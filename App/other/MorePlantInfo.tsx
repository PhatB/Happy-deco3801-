import React, {useCallback} from 'react';
import {Alert, View, Text, Image, Pressable, Linking} from 'react-native';

import {styles} from '../other/Styles.tsx';

type MorePlantInfoProps = {
    info: any
}
export const MorePlantInfo = (props: MorePlantInfoProps) => {

    {/* Open URL */}
    const handleURL = useCallback(async () => {
        // Checking if the link is supported for links with custom URL scheme.
        const supported = await Linking.canOpenURL(props.info.url);

        if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
            await Linking.openURL(props.info.url);
        } else {
            Alert.alert(`Don't know how to open this URL: ${props.info.url}`);
        }
    }, [props.info.url]);

    return (
        <View>
            {/* Difficulty/Location/Watering */}
            <View style={styles.smallInfo}>
                <Image
                source={require("../images/difficulty.png")}
                />
                <Text style={styles.baseText}>{`${props.info.careDifficulty}`}</Text>
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
            <Pressable
            style={[styles.greenButton, {marginHorizontal: 0, marginTop: 20, width: '100%'}]}
            onPress={handleURL}>
                <Text style={styles.greenButton}>More Information</Text>
            </Pressable>
        </View>
    );
};
