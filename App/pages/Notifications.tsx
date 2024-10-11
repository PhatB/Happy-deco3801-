import { ScrollView, Text, View } from "react-native"
import { styles } from "../other/Styles"
import React from "react"
import { BackButton } from "../other/MiscComponents/BackButton"


export const Notifications = () => {
    return (
        <View style={{height: "100%"}}>
            <View style={styles.scrollArea}>
                <ScrollView contentInsetAdjustmentBehavior = "automatic">
                    <Text style={[styles.pageTitle]}>{"Notifications"}</Text>
                    <BackButton/>
                </ScrollView>
            </View>
        </View>
    )
}