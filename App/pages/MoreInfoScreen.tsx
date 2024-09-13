import React from 'react';
import {ScrollView, View, Text, Image, Pressable} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import {styles} from '../other/Styles.tsx';
import {Footer} from '../other/Footer.tsx';
import {MorePlantInfo}from '../other/MorePlantInfo.tsx'

const plusIcon = '../images/plusIcon.png';

export const MoreInfoScreen = () => {
    const navigation = useNavigation();
    const route = useRoute()
    const info = route.params?.info
    const isPlant: boolean = route.params?.isPlant
    return (
    // Full view
        <View style={{height: '100%', backgroundColor: 'white'}}>
            {/* Scroll view */}
            <View style={[styles.scrollArea]}>
                <ScrollView contentInsetAdjustmentBehavior="automatic"
                style={{backgroundColor: 'white'}}>
                    <Text style={[styles.pageTitle]}>{`${info.name}`}</Text>
                    <Pressable onPress={() => navigation.pop()}>
                        <Image
                            style={styles.backArrow}
                            source={require('../images/arrowIcon.png')}
                        />
                    </Pressable>
                    {/* Main box */}
                    <View style={styles.main}>
                        <Image
                            style={{width: '100%', height: 200, alignSelf: 'center', borderRadius: 20}}
                            source={info.image}
                        />
                    </View>
                    <MorePlantInfo info={info}/>
                </ScrollView>
            </View>

            {/* Footer */}
            <Footer />
        </View>
    );
};
