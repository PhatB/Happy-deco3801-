import React from 'react';
import {ScrollView, View, Text, Image, Pressable} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import {styles} from '../other/Styles.tsx';
import {Footer} from '../other/Footer.tsx';

const plusIcon = '../images/plusIcon.png';
type MorePlantInfoProps = {
    info: any
}
export const MorePlantInfo = (props: MorePlantInfoProps) => {
    return (
        <View>
            <Text>{`${props.info.detail}`}</Text>
        </View>
    );
};
