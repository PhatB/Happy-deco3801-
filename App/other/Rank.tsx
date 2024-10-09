
import React from 'react'
import {Image, ImageSourcePropType, Text, View} from "react-native";

import {styles} from './Styles.tsx';

interface ListProps {
    name: string,
    lvl: string,
    defaultImage: ImageSourcePropType | null,
}

export const Rank = (props: ListProps) => {
    return (
    <View style={{flexDirection: 'row', marginVertical: 5}}>
        <Image
        style={{width: 60, height: 60, borderRadius: 60/2, marginRight: 15}}
        source={props.defaultImage === null || props.defaultImage === undefined
                ? require("../images/missingTexture.jpg")
                : props.defaultImage
        }
        />
        <View style={{flexDirection: 'column', justifyContent: 'center'}}>
            <Text style={styles.baseText}>{`${props.name}`}</Text>
            <Text style={styles.baseText}>{`${props.lvl}`}</Text>
        </View>
    </View>
)
}
