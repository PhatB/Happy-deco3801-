import React from 'react';
import {View, Text, Image} from 'react-native';

import {styles} from '../other/Styles.tsx';

type MorePlantInfoProps = {
    info: any
}
export const MorePlantInfo = (props: MorePlantInfoProps) => {
    return (
        <View>
            <Image
                style={styles.line}
                source={require("../images/line.png")}
            />
            <Text style={styles.heading}>Botanic Name</Text>
            <Text style={styles.baseText}>{`${props.info.scientificName}.`}</Text>
            <Image
                style={styles.line}
                source={require("../images/line.png")}
            />
            <Text style={styles.heading}>About</Text>
            <Text style={styles.baseText}>{`${props.info.detail}.`}</Text>
            <Image
                style={styles.line}
                source={require("../images/line.png")}
            />
            <Text style={styles.heading}>Common Pests</Text>
            <Text style={styles.baseText}>{`${props.info.pests}.`}</Text>
        </View>
    );
};
