import { Image, ScrollView, Text, View } from "react-native"
import { styles } from "../other/Styles"
import React from "react"
import { BackButton } from "../other/MiscComponents/BackButton"
import { useRoute } from "@react-navigation/native"


const images = {
    "water": require("../images/water_warning.png"),
    "sunlight" :require("../images/sun_warning.png"),
    "temperature" :require ("../images/temp_warning.png")
}

export const Notifications = () => {
    const route: any = useRoute()
    const {notifs} = route.params


    return (
        <View style={{height: "100%"}}>
            <View style={styles.scrollArea}>
                <ScrollView contentInsetAdjustmentBehavior = "automatic">
                    <Text style={[styles.pageTitle]}>{"Notifications"}</Text>
                    <BackButton/>
                    <View style={styles.main}>
                    {
                        notifs.map((notif:any , idx: number) => (
                            <View style={{flexDirection: "row", alignContent: "center", alignItems: "center"}}>
                                       <Image style={{transform: [{scale:0.75}]}}source={images[notif.type as "water" | "sunlight" | "temperature"]}></Image>
                                       <Text style={[styles.smallHeading, {width:"70%"}]}key={idx}>{notif.type} is bad for {notif.plant.name}</Text>
                            </View>
                 
                        ))
                    }
                    </View>
                   
                </ScrollView>
            </View>
        </View>
    )
}