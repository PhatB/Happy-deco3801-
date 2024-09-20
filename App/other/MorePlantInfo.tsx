import React from 'react';
import {View, Text, Image} from 'react-native';

import {styles} from '../other/Styles.tsx';

type MorePlantInfoProps = {
    info: any
}
export const MorePlantInfo = (props: MorePlantInfoProps) => {

    return (
        <View>
            <View style={{flexDirection: 'row', marginTop: 20}}>
                {/* Difficulty */}
                <View style={[styles.smallInfo, {backgroundColor: '#D1EDCE'}]}>
                    <Image
                    style={{width: 20, height: 20}}
                    source={require("../images/difficulty.png")}
                    />
                    <Text
                    style={[styles.baseText, {fontSize: 12, textTransform: 'uppercase', color: '#218F4A'}]}>
                        {`${props.info.careDifficulty}`}
                    </Text>
                </View>
                {/* Location */}
                <View style={[styles.smallInfo, {backgroundColor: '#F2D6AC'}]}>
                    <Image
                    style={{width: 20, height: 20}}
                    source={require("../images/location.png")}
                    />
                    <Text
                    style={[styles.baseText, {fontSize: 12, textTransform: 'uppercase', color: '#A5772D'}]}>
                        {`${props.info.location}`}
                    </Text>
                </View>
                {/* Watering */}
                <View style={[styles.smallInfo, {backgroundColor: '#CEEDED'}]}>
                    <Image
                    style={{width: 20, height: 20}}
                    source={require("../images/water.png")}
                    />
                </View>
            </View>

            {/* Info */}
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
