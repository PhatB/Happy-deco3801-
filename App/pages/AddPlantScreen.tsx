import React, { useEffect, useState } from 'react';
import {ScrollView, View, Text, Image, Pressable, TextInput} from 'react-native';

import {styles} from '../other/Styles.tsx';
import {Footer} from '../other/Footer.tsx';

import {useNavigation} from '@react-navigation/native';

import {BackButton} from "../other/MiscComponents/BackButton.tsx";
import { Dropdown } from 'react-native-element-dropdown';
import { addUserPlant, getPlantTypes, UserPlant } from '../api.ts';

export const AddPlantScreen = () => {

    const navigation = useNavigation<any>();
    const [plantName, setPlantName] = useState("");
    const [plantTypes, setPlantTypes] = useState([]);
    const [deviceID, setDeviceID] = useState("");
    const [selectedPlantType, setSelectedPlantType] = useState("");

    const submitPlant = async () => {
        let plant = {
            name: plantName,
            device: deviceID,
            plantType: selectedPlantType,
            description: ""
        }
        console.log(plant)
        try {
            await addUserPlant(plant)
        } catch (e: any) {
            console.error("ERROR: " + e.message)
        }
        navigation.navigate("Home",  {screen: "HomeScreen"})
    }
    const setupPlantTypes = async () => {
        try {
        setPlantTypes(await getPlantTypes())
        }catch(e: any) {
            console.error(e.message);
        }
    }
    useEffect(() => {
        setupPlantTypes().then();
    },[])
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
                            onChangeText={setPlantName}
                            />
                            {/* Plant Type */}
                            <Text style={styles.smallHeading}>{'Plant Type'}</Text>
                            <Dropdown
                                data={plantTypes}
                                labelField={"name"}
                                valueField={"id"}
                                style={{...styles.smallWhiteButton, ...styles.textBox}}
                                fontFamily='Poppins-Regular'
                                placeholder='Select a plant'
                                onChange={(item: any) => {
                                    setSelectedPlantType(item.id);
                                }}
                            ></Dropdown>
                            {/* Description */}
                            <Text style={styles.smallHeading}>{'Description (optional)'}</Text>
                            <TextInput
                            style={{...styles.smallWhiteButton,...styles.textBox}}
                            keyboardType="default"
                            />
                            <Text style={styles.smallHeading}>{'Device'}</Text>
                            <TextInput
                            style={{...styles.smallWhiteButton,...styles.textBox}}
                            keyboardType="default"
                            onChangeText={setDeviceID}
                            />
                            <Image
                                style={styles.line}
                                source={require("../images/line.png")}
                            />
                            {/* Device */}
                           
                        </View>
                        <Pressable
                        onPress={submitPlant}
                        style={[styles.greenButton, {marginVertical: 15}]}>
                            <Text style={[styles.greenButton]}>{'Plant now!'}</Text>
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
