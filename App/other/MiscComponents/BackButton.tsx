import {Image, Pressable} from "react-native";
import {styles} from "../Styles.tsx";
import React from "react";
import {NavigationProp, useNavigation} from "@react-navigation/native";
export const BackButton = () => {
    const navigation = useNavigation<any>();
    return (
        <Pressable onPress={() => navigation.pop()}>
            <Image
                style={styles.backArrow}
                source={require('../../images/arrowIcon.png')}
            />
        </Pressable>
    )
}