import React, {useCallback} from 'react';
import {Alert, ScrollView, View, Text, Image, Linking, Pressable} from 'react-native';
import {useRoute} from '@react-navigation/native';

import {styles} from '../other/Styles.tsx';
import {Footer} from '../other/Footer.tsx';
import {MorePlantInfo}from '../other/MorePlantInfo.tsx';
import {MorePestInfo}from '../other/MorePestInfo.tsx';
import {BackButton} from "../other/MiscComponents/BackButton.tsx";

const plusIcon = '../images/plusIcon.png';

export const MoreInfoScreen = () => {
    const route: any = useRoute()
    const {info, isPlant} = route.params;

    {/* Open URL */}
    const handleURL = useCallback(async () => {
        // Checking if the link is supported for links with custom URL scheme.
        const supported = await Linking.canOpenURL(info.url);

        if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
            await Linking.openURL(info.url);
        } else {
            Alert.alert(`Don't know how to open this URL: ${info.url}`);
        }
    }, [info.url]);

    return (
    // Full view
        <View style={{height: '100%', backgroundColor: 'white'}}>
            {/* Scroll view */}
            <View style={[styles.scrollArea]}>
                <ScrollView contentInsetAdjustmentBehavior="automatic"
                style={{backgroundColor: 'white'}}>
                    <Text style={[styles.pageTitle]}>{`${info.name}`}</Text>
                    <BackButton/>
                    {/* Main box */}
                    <View style={styles.main}>
                        <Image
                            style={{width: '100%', height: 200, alignSelf: 'center', borderRadius: 20}}
                            source={info.hasOwnProperty("image") ? info.image : require("../images/missingTexture.jpg")}
                        />
                        {isPlant ? <MorePlantInfo info={info}/> : <MorePestInfo info={info}/>}
                        {/* More Information */}
                        <Pressable
                        style={[styles.greenButton, {marginHorizontal: 0, marginTop: 20, width: '100%'}]}
                        onPress={handleURL}>
                            <Text style={styles.greenButton}>More Information</Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </View>

            {/* Footer */}
            <Footer />
        </View>
    );
};
