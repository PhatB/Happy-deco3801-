import React from 'react';
import {View, Text, Image} from 'react-native';

import {styles} from '../other/Styles.tsx';

type MorePestInfoProps = {
    info: any
}
export const MorePestInfo = (props: MorePestInfoProps) => {
    return (
        <View>
            <Image
                style={styles.line}
                source={require("../images/line.png")}
            />
            <Text style={styles.heading}>Appearance</Text>
            <Text style={styles.baseText}>{`${props.info.appearance}.`}</Text>
            <Image
                style={styles.line}
                source={require("../images/line.png")}
            />
            <Text style={styles.heading}>Associated Plants</Text>
            <Text style={styles.baseText}>{`${props.info.associatedPlants}.`}</Text>
            <Image
                style={styles.line}
                source={require("../images/line.png")}
            />
            <Text style={styles.heading}>Symptoms</Text>
            <Text style={styles.baseText}>{`${props.info.symptoms}.`}</Text><Image
                style={styles.line}
                source={require("../images/line.png")}
            />
            <Text style={styles.heading}>How to manage them</Text>
            <Text style={styles.baseText}>{`${props.info.manage}.`}</Text>
        </View>
    );
};
