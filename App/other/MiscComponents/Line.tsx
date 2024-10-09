import { Image } from "react-native"
import { styles } from "../Styles"
import React from "react"


export const Line = () => {
    return (<Image
        style={styles.line}
        source={require("../../images/line.png")}
    />)
}


export const SmallLine = () => {
    return (<Image
        style={styles.smallLine}
        source={require("../../images/line.png")}
    />)
}