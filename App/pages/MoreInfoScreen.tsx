import React from 'react';
import {ScrollView, View, Text, Image, Pressable} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import {styles} from '../other/Styles.tsx';
import {Footer} from '../other/Footer.tsx';

const plusIcon = '../images/plusIcon.png';

export const MoreInfoScreen = () => {
    const navigation = useNavigation();
    const route = useRoute()
    const info = route.params?.info
    return (
    // Full view
        <View style={{height: '100%'}}>
            {/* Scroll view */}
            <View style={styles.scrollArea}>
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    <Text style={[styles.pageTitle]}>{`${info.name}`}</Text>
                    <Pressable onPress={() => navigation.pop()}>
                        <Image
                            style={styles.backArrow}
                            source={require('../images/arrowIcon.png')}
                        />
                    </Pressable>
                    {/* Main box */}
                    <View style={styles.main}>
                        
                    </View>
                </ScrollView>
            </View>

            {/* Footer */}
            <Footer />
        </View>
    );
};
