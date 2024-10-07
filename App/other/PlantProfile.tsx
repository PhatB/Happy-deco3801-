import React from "react"
import { Image, Text, View } from "react-native"
import { PlantBadges } from "./MiscComponents/Badges"
import { useRoute } from "@react-navigation/native"
import { Line } from "./MiscComponents/Line"
import { styles } from "./Styles"

interface PlantProfileProps {
    info: any
}

export const PlantProfile = (props: PlantProfileProps) => {
    let {info} = props;
    return (
        <View>
            <PlantBadges info={info.plantType}/>
            <Line/>
            <Text style={styles.smallHeading}>{info.plantType.name}</Text>
            <Text style={styles.baseText}>{info.plantType.scientificName}</Text>
            <Text style={styles.smallHeading}>Description</Text>
            <Text style={styles.baseText}>{info.plantType.detail}</Text>
            <Line/>
        </View>
    )
}