import { useNavigation, useRoute } from "@react-navigation/native"
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { styles } from "../other/Styles";
import { Dropdown } from "react-native-element-dropdown";
import { Footer } from "../other/Footer";
import { BackButton } from "../other/MiscComponents/BackButton";
import { Line } from "../other/MiscComponents/Line";
import { UpdateVibration } from "../api";



export const PestDetectedScreen = () => {

    let choices = [
        {
            "label": "5 minutes",
            "value": 5
        },
        {
            "label": "20 minutes",
            "value": 20
        },
        {
            "label": "60 minutes",
            "value": 60
        },
    ]

    const update = async () => {
        await UpdateVibration(plant.devie, selectedFrequency);
    }

    const navigation = useNavigation<any>();
    const route: any = useRoute()
    const { plant } = route.params;
    const [selectedFrequency, setSelectedFrequency] = useState(0)
    return (
        <View style={{ height: "100%" }}>
            <View style={[styles.scrollArea, styles.main]}>

                <Text style={styles.pageTitle}>Pest Detected!</Text>
                <BackButton />
                <Line />
                <Text style={{ ...styles.smallHeading }}>     Vibration Frequency</Text>
                <View style={{ display: "flex", flexDirection: "column" }}>
                    <Pressable
                        onPress={() => { setSelectedFrequency(5) }}
                        style={[selectedFrequency === 5
                            ? styles.whiteButton
                            : styles.greenButton
                            , {marginBottom:15}]}>
                        <Text style={[selectedFrequency === 5
                            ? styles.whiteButton
                            : styles.greenButton]}>{"5 mins"}</Text>
                    </Pressable>
                    <Pressable
                        onPress={() => { setSelectedFrequency(20) }}
                        style={[selectedFrequency === 20
                            ? styles.whiteButton
                            : styles.greenButton
                        , {marginBottom:15}]}>
                        <Text style={[selectedFrequency === 20
                            ? styles.whiteButton
                            : styles.greenButton]}>{"20 mins"}</Text>
                    </Pressable>
                    <Pressable
                        onPress={() => { setSelectedFrequency(60) }}
                        style={[selectedFrequency === 60
                            ? styles.whiteButton
                            : styles.greenButton
                            , {marginBottom:15}]}>
                        <Text style={[selectedFrequency === 60
                            ? styles.whiteButton
                            : styles.greenButton]}>{"60 mins"}</Text>
                    </Pressable>
                </View>
                <Line />
                <Pressable
                    onPress={async () => { await update() }}
                    style={[styles.greenButton, { marginVertical: 15 }]}>
                    <Text style={[styles.greenButton]}>{"Update Frequency"}</Text>
                </Pressable>
                <Line />
                <Text style={{ ...styles.smallHeading, marginHorizontal: 20 }}>Need some info about the pest you spotted?</Text>
                <Pressable
                    onPress={() => { navigation.navigate("Explore") }}
                    style={[styles.greenButton, { marginVertical: 15 }]}>
                    <Text style={[styles.greenButton]}>{"Visit the Explore page."}</Text>
                </Pressable>
            </View>
            <Footer />
        </View>
    )
}