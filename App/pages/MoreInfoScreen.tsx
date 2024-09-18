import React from 'react';
import {ScrollView, View, Text, Image, Pressable} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import {styles} from '../other/Styles.tsx';
import {Footer} from '../other/Footer.tsx';
import {MorePlantInfo}from '../other/MorePlantInfo.tsx';
import {MorePestInfo}from '../other/MorePestInfo.tsx';
import {BackButton} from "../other/MiscComponents/BackButton.tsx";

const plusIcon = '../images/plusIcon.png';

export const MoreInfoScreen = () => {
    const navigation = useNavigation();
    const route: any = useRoute()
    const {info, isPlant} = route.params;

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
                    </View>
                </ScrollView>
            </View>

            {/* Footer */}
            <Footer />
        </View>
    );
};
