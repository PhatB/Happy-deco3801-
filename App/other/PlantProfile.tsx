import React from "react"
import { View } from "react-native"
import { PlantBadges } from "./MiscComponents/Badges"

interface PlantProfileProps {
    info: any
}

export const PlantProfile = (props: PlantProfileProps) => {
    return (
        <View>
            <PlantBadges info={props.info}/>
        </View>
    )
}