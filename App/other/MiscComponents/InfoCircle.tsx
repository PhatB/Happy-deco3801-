
import React from "react";
import { Text, View } from "react-native";
import { CircularProgress } from "react-native-circular-progress";
import { styles } from "../Styles";

type InfoCircleProps =  {
    value: number,
    value_min: number,
    value_max: number,
    suffix: string,
    label: string
}

export const InfoCircle = (props: InfoCircleProps) =>{
    const {value, value_min, value_max, suffix, label} = props
    const colors = {
        "danger": "#D83400",
        "warning": "#FBB93A",
        "safe" : "#208F4A"
    }
    const safe_range = 5
    const diff = value_max - value_min;
    const safe_min = value_min + (diff / safe_range)
    const safe_max = value_max - (diff / safe_range)
    const true_min = value_min - diff/2;
    const true_max = value_max + diff/2;
    let dangerLevel: "danger" | "warning" | "safe"
    if (value < value_min || value > value_max) {
        dangerLevel = "danger"
    } else if (value < safe_min || value > safe_max) {
        dangerLevel = "warning"
    } else {
        dangerLevel = "safe"
    }
    
    const ratio = (value - true_min) / (true_max - true_min)
    
    return (
        <View style={{flex:1, alignItems:"center" }}>
        <CircularProgress
                    size={80}
                    width={6}
                    fill={ratio*100}
                    rotation={-140}
                    tintColor={colors[dangerLevel]}
                    arcSweepAngle={280}
                    backgroundColor="#F2F2F2"
                    
                >{() => (
                    <Text style={[styles.smallHeading, {fontSize:18}]}>{" " + value + suffix}</Text>
                )
                }</CircularProgress>
            <Text style={[styles.smallHeading, {fontSize:15, textAlign: "center"}]}>{label}</Text>
            </View>
    )
}