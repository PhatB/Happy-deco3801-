import { Image } from "react-native"
import { styles } from "../Styles"
import React from "react"


export const Line = () => {
    return (<Image
        style={styles.line}
        source={require("../../images/line.png")}
    />)
}