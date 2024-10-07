import React from "react"
import { Image, Text, View } from "react-native"
import { PlantBadges } from "./MiscComponents/Badges"
import { useRoute } from "@react-navigation/native"

interface PlantProfileProps {
    info: any
}

export const PlantProfile = (props: PlantProfileProps) => {
    let {info} = props;
    return (
        <View>
            <PlantBadges info={info.plantType}/>
            <Text>{info.plantType.name}</Text>
        </View>
    )
}