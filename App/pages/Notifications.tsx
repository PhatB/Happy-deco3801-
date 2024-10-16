import { Image, Pressable, ScrollView, Text, View } from "react-native"
import { styles } from "../other/Styles"
import React, { useEffect, useState } from "react"
import { BackButton } from "../other/MiscComponents/BackButton"
import { useRoute } from "@react-navigation/native"
import { checkNotifications, Notification } from '../pages/HomeScreen'
import { Footer } from "../other/Footer"
import { suppressRecord } from "../api"
const images = {
    "water": require("../images/water_warning.png"),
    "sunlight": require("../images/sun_warning.png"),
    "temperature": require("../images/temp_warning.png")
}

const cross = require("../images/cross.png")
const testUserId = "66e3848cc14bcef4f162d6e9";

export const Notifications = () => {
    const route: any = useRoute()
    const { notifs } = route.params
    const [notifications, setNotifications] = useState<Notification[]>([])
    const messages = {
        "water": "getting enough water",
        "sunlight": "getting enough sunlight",
        "temperature": "at the right temperature"
    }

    const NotifcationPanel = (props: { notif: Notification }) => {
        let { notif } = props;
        return (
            <View style={{ flexDirection: "row", alignContent: "center", alignItems: "center" }}>
                <Image style={{ transform: [{ scale: 0.75 }] }} source={images[notif.type as "water" | "sunlight" | "temperature"]}></Image>
                <View style={{ width: "60%" }}>
                    <Text style={[styles.smallHeading,]}>Warning for {notif.plant.name}!</Text>
                    <Text style={[styles.baseText]}>Ensure {notif.plant.name} is {messages[notif.type]}</Text>
                </View>
                <Pressable onPress={async () => {

                    suppressRecord(notif.record)
                    setNotifications(await checkNotifications())
                }}
                    style={{ backgroundColor: "#D83400", borderRadius: 100, height: 30, width: 30, marginLeft: 5 }}>
                    <Image source={cross} style={{ height: "70%", width: "70%", margin: "auto" }} />
                </Pressable>
            </View >
        )
    }
    useEffect(() => {
        setNotifications(notifs);

    }, [route.params])

    return (
        <View style={{ height: "100%" }}>
            <View style={styles.scrollArea}>
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    <Text style={[styles.pageTitle]}>{"Notifications"}</Text>
                    <BackButton />
                    <View style={styles.main}>
                        {
                            notifications.length == 0 ? (<Text>No notifications.</Text>) :
                                notifications.map((notif: Notification, idx: number) => {
                                    if (notif.record.suppressNotifications) {
                                        return (<></>)
                                    } else {
                                        return <NotifcationPanel key={idx} notif={notif} />
                                    }
                                })
                        }
                    </View>

                </ScrollView>
            </View>
            <Footer />
        </View>
    )
}