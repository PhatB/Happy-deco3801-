import React, { useState } from 'react';
import {ScrollView, View, Text, Image, Pressable, TextInput} from 'react-native';

import {styles} from '../other/Styles.tsx';
import {Footer} from '../other/Footer.tsx';

import {useNavigation} from '@react-navigation/native';

import {BackButton} from "../other/MiscComponents/BackButton.tsx";

export const AddPlantScreen = () => {

    const navigation = useNavigation<any>();
    const [plantName, setPlantName] = useState("");
    return (
        // Full view
        <View style={{height: '100%'}}>
            {/* Scroll view */}
            <View style={styles.scrollArea}>
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    <Text style={styles.pageTitle}>{'Add a Plant'}</Text>
                    <BackButton/>
                    <View style={styles.main}>
                        <View style={{padding: 8, gap: 20}}>
                            {/* Plant Name */}
                            <Text style={styles.smallHeading}>{'Plant Name'}</Text>
                            <TextInput
                            style={{...styles.smallWhiteButton,...styles.textBox}}
                            keyboardType="default"
                            />
                            {/* Plant Type */}
                            <Text style={styles.smallHeading}>{'Plant Type'}</Text>
                            <View style={[{...styles.smallWhiteButton,...styles.textBox}, {paddingVertical: 12.5}]}>
                                <Pressable>
                                    <Image
                                        style={{width: 20,
                                            height: 20,
                                            transform: [{rotate: '90deg'}],
                                            marginLeft: '95%'}}
                                        source={require('../images/arrowIcon.png')}
                                    />
                                </Pressable>
                            </View>
                            {/* Description */}
                            <Text style={styles.smallHeading}>{'Description (optional)'}</Text>
                            <TextInput
                            style={{...styles.smallWhiteButton,...styles.textBox}}
                            keyboardType="default"
                            />
                            <Image
                                style={styles.line}
                                source={require("../images/line.png")}
                            />
                            {/* Device */}
                            <Text style={styles.smallHeading}>{'Device'}</Text>
                        </View>
                        <Pressable
                        style={[styles.greenButton, {marginVertical: 15}]}>
                            <Text style={[styles.greenButton]}>{'Connect Device'}</Text>
                        </Pressable>
                        {/* Plant Now! */}
                        {/* <Pressable
                        style={[styles.greenButton, {marginVertical: 15}]}
                        onPress={() => navigation.navigate("Home", {screen: "HomeScreen"})}
                        >
                            <Text style={styles.greenButton}>{'Plant Now!'}</Text>
                        </Pressable> */}
                    </View>
                </ScrollView>
            </View>

            {/* Footer */}
            <Footer />
        </View>
    );
};
