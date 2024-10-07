import React from 'react';
import {View, Text, Image} from 'react-native';

import {styles} from '../other/Styles.tsx';
import { DiffcultyBadge, LocationBadge, PlantBadges, WaterBadge } from './MiscComponents/Badges.tsx';
import { Line } from './MiscComponents/Line.tsx';

type MorePlantInfoProps = {
    info: any
}
export const MorePlantInfo = (props: MorePlantInfoProps) => {

    return (
        <View>
            
            <PlantBadges info={props.info}/>
            {/* Info */}
            <Line/>
            <Text style={styles.heading}>Botanic Name</Text>
            <Text style={styles.baseText}>{`${props.info.scientificName}.`}</Text>
            <Line/>
            <Text style={styles.heading}>About</Text>
            <Text style={styles.baseText}>{`${props.info.detail}.`}</Text>
            <Line/>
            <Text style={styles.heading}>Common Pests</Text>
            <Text style={styles.baseText}>{`${props.info.pests}.`}</Text>
        </View>
    );
};
