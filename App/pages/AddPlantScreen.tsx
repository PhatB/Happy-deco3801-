import React from 'react';
import {ScrollView, View, Text, Pressable} from 'react-native';

import {styles} from '../other/Styles.tsx';
import {Footer} from '../other/Footer.tsx';

import {useNavigation} from '@react-navigation/native';

export const AddPlantScreen = () => {

    const navigation = useNavigation<any>();

    return (
        // Full view
        <View style={{height: '100%'}}>
            {/* Scroll view */}
            <View style={styles.scrollArea}>
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    <Text style={styles.pageTitle}>{'Add a Plant'}</Text>
                    <View style={styles.main}>
                        {/* Plant Name */}
                        <Text style={styles.smallHeading}>{'Plant Name'}</Text>
                        {/* Plant Type */}
                        <Text style={styles.smallHeading}>{'Plant Type'}</Text>
                        {/* Plant Location */}
                        <Text style={styles.smallHeading}>{'Plant Location'}</Text>
                        {/* Description */}
                        <Text style={styles.smallHeading}>{'Description (optional)'}</Text>
                        {/* Device */}
                        <Text style={styles.smallHeading}>{'Device'}</Text>
                        <Pressable
                        style={[styles.greenButton, {marginVertical: 15, backgroundColor: "#7D9C8F"}]}>
                            <Text style={[styles.greenButton, {backgroundColor: "#7D9C8F"}]}>{'Connect Device'}</Text>
                        </Pressable>
                        {/* Plant Now! */}
                        <Pressable
                        style={[styles.greenButton, {marginVertical: 15}]}
                        onPress={() => navigation.navigate("Home", {screen: "HomeScreen"})}
                        >
                            <Text style={styles.greenButton}>{'Plant Now!'}</Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </View>

            {/* Footer */}
            <Footer />
        </View>
    );
};
