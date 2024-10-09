import React from "react"
import { Image, ImageSourcePropType, Text, View } from "react-native"
import { styles } from "../Styles"

interface BadgeProps {
    info: any
}

interface IconBadgeProps {
    icon: ImageSourcePropType,
    bgColor: string,
    text: string
    fgColor: string,
}

export const IconBadge = (props: IconBadgeProps) => {
    const {icon, bgColor, fgColor, text} = props
    return (
<View style={[styles.smallInfo, {backgroundColor: bgColor, display: "flex", alignItems: "center", flexDirection: "row"}]}>
                    <Image
                    style={{width: 20, height: 20}}
                    source={icon}
                    />
                    <Text
                    style={[styles.smallBold, {fontSize: 12, textTransform: 'uppercase', color: fgColor, marginTop:3}]}>
                        {text}
                    </Text>
                </View>
    )
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

export const DifficultyBadge = (props: BadgeProps) => {
    return (
        <IconBadge 
            icon={require("../../images/difficulty.png")} 
            bgColor="#D1EDCE" 
            fgColor="#218F4A" 
            text={props.info.careDifficulty}
        />
    )
}

export const LocationBadge = (props: BadgeProps) => {
    return (
        <IconBadge 
        icon={require("../../images/location.png")} 
        bgColor="#F2D6AC" 
        fgColor="#A5772D" 
        text={props.info.location}
    />
 
    )
}


export const WaterBadge = (props: BadgeProps) => {
    return (
        <IconBadge 
        icon={require("../../images/water.png")} 
        bgColor="#CEEDED" 
        fgColor="#21828F" 
        text={props.info.water}
    />
        
    )
}

export const PlantBadges = (props: BadgeProps) => {
    return(
        <View style={{flexDirection: 'row', marginTop: 20}}>
                {/* Difficulty */}
                <DifficultyBadge info={props.info} />
                {/* Location */}
                <LocationBadge info={props.info}/>
                {/* Watering */}
                <WaterBadge info={props.info}/>
            </View>
    )
}