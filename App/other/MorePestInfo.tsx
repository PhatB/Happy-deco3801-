import React from 'react';
import {View, Text} from 'react-native';

type MorePestInfoProps = {
    info: any
}
export const MorePestInfo = (props: MorePestInfoProps) => {
    return (
        <View>
            <Text>{`${props.info.appearance}`}</Text>
        </View>
    );
};
