import React from "react"
import { Image, Text, View } from "react-native"
import { styles } from "../Styles"

interface BadgeProps {
    info: any
}


export const AttentionBadge = () => {
    return(
        <View style={[styles.smallInfo, {backgroundColor: '#F5D4C9', height:25, alignItems: "center", }]}>
                  
                    <Text
                    style={[styles.baseText, {fontSize: 12, textTransform: 'uppercase', color: '#D83400', textAlign: "center", fontWeight: "bold"}]}>
                        Needs Attention
                    </Text>
                </View>
    )
}
export const HealthyBadge = () => {
    return (
    <View style={[styles.smallInfo, {backgroundColor: '#D1EDCE'}]}>
                  
                    <Text
                    style={[styles.baseText, {fontSize: 12, textTransform: 'uppercase', color: '#218F4A'}]}>
                        Healthy
                    </Text>
                </View>
    )
}

export const DiffcultyBadge = (props: BadgeProps) => {
    return (
        <View style={[styles.smallInfo, {backgroundColor: '#D1EDCE'}]}>
                    <Image
                    style={{width: 20, height: 20}}
                    source={require("../../images/difficulty.png")}
                    />
                    <Text
                    style={[styles.baseText, {fontSize: 12, textTransform: 'uppercase', color: '#218F4A'}]}>
                        {`${props.info.careDifficulty}`}
                    </Text>
                </View>
    )
}

export const LocationBadge = (props: BadgeProps) => {
    return (
        <View style={[styles.smallInfo, {backgroundColor: '#F2D6AC'}]}>
                    <Image
                    style={{width: 20, height: 20}}
                    source={require("../../images/location.png")}
                    />
                    <Text
                    style={[styles.baseText, {fontSize: 12, textTransform: 'uppercase', color: '#A5772D'}]}>
                        {`${props.info.location}`}
                    </Text>
                </View>
    )
}


export const WaterBadge = (props: BadgeProps) => {
    return (
        <View style={[styles.smallInfo, {backgroundColor: '#CEEDED'}]}>
                    <Image
                    style={{width: 20, height: 20}}
                    source={require("../../images/water.png")}
                    />
                    <Text
                    style={[styles.baseText, {fontSize: 12, textTransform: 'uppercase', color: '#21828F'}]}>
                        {`${props.info.water}`}
                    </Text>
                </View>
    )
}

export const PlantBadges = (props: BadgeProps) => {
    return(
        <View style={{flexDirection: 'row', marginTop: 20}}>
                {/* Difficulty */}
                <DiffcultyBadge info={props.info} />
                {/* Location */}
                <LocationBadge info={props.info}/>
                {/* Watering */}
                <WaterBadge info={props.info}/>
            </View>
    )
}