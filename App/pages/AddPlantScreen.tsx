import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, Image, Pressable, TextInput, Modal } from 'react-native';

import { styles } from '../other/Styles.tsx';
import { Footer } from '../other/Footer.tsx';

import { useNavigation } from '@react-navigation/native';

import { BackButton } from "../other/MiscComponents/BackButton.tsx";
import { Dropdown } from 'react-native-element-dropdown';
import { addUserPlant, getDevice, getPlantTypes, UserPlant } from '../api.ts';
import { Loading } from '../other/MiscComponents/Loading.tsx';

export const AddPlantScreen = () => {

    const navigation = useNavigation<any>();
    const [plantName, setPlantName] = useState("");
    const [plantTypes, setPlantTypes] = useState([]);
    const [deviceID, setDeviceID] = useState("");
    const [description, setDescription] = useState("");
    const [selectedPlantType, setSelectedPlantType] = useState("");
    const [issues, setIssues] = useState<string>("");
    const [infoVisible, setInfoVisible] = useState(false);
    const submitPlant = async () => {
        if (! await checkValidity()) {
            console.log("BAD")
            return;
        }
        let plant = {
            name: plantName,
            device: deviceID,
            plantType: selectedPlantType,
            description: description
        }
        console.log(plant)
        try {
            await addUserPlant(plant)
        } catch (e: any) {
            console.error("ERROR: " + e.message)
        }
        navigation.navigate("Home", { screen: "HomeScreen" })
    }
    const setupPlantTypes = async () => {
        try {
            setPlantTypes(await getPlantTypes())
        } catch (e: any) {
            console.error(e.message);
        }
    }

    const deviceExists = async () => {
        if (deviceID === "") {
            return false;
        }
        try {
            const device = await getDevice(deviceID);
            return true;
        } catch (e: any) {
            return false;
        }
    }

    const checkValidity = async () => {
        let valid = true;
        let newIssues = ""

        let exists = await deviceExists()
        if (!exists) {
            valid = false;
            newIssues += "\nInvalid device ID"
        }
        if (selectedPlantType === "") {
            valid = false;
            newIssues += "\nPlease select a plant type."
        }
        setIssues(newIssues)
        return valid;
    }

    const InfoModal = () => {
        return (
            <Modal
                animationType='fade'
                visible={infoVisible}
                transparent={true}
                onRequestClose={() => { setInfoVisible(false) }}
            >
                <View style={[styles.modalView, styles.main]}>
                    <Text style={styles.smallHeading}>Finding your device ID</Text>
                    <Image style={{ borderRadius: 100, marginVertical: 20 }} source={require("../images/device_diagram.png")}></Image>
                    <Text style={{ color: "black", fontSize: 18 }}>
                        The serial number of your HappyPlants device is located on a small
                        sticker near the bottom of the device.
                    </Text>
                    <Pressable onPress={() => {
                        setInfoVisible(false)
                    }}
                        style={[styles.smallGreenButton, { marginVertical: 15 }]}>
                        <Text style={[styles.greenButton, { textAlign: "center" }]}>{'Got it.'}</Text>
                    </Pressable>
                </View>

            </Modal>
        )
    }

    useEffect(() => {
        setupPlantTypes().then();
    }, [])
    return (
        // Full view
        <View style={{ height: '100%' }}>
            {/* Scroll view */}
            <View style={styles.scrollArea}>
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    <Text style={styles.pageTitle}>{'Add a Plant'}</Text>
                    <BackButton />
                    <InfoModal />


                    <View style={styles.main}>
                        <View style={{ padding: 8, gap: 20 }}>
                            {/* Plant Name */}
                            <Text style={styles.smallHeading}>{'Plant Name'}</Text>
                            <TextInput
                                style={{ ...styles.smallWhiteButton, ...styles.textBox }}
                                keyboardType="default"
                                onChangeText={setPlantName}
                                maxLength={20}
                            />
                            {/* Plant Type */}
                            <Text style={styles.smallHeading}>{'Plant Type'}</Text>
                            <Dropdown
                                data={plantTypes}
                                labelField={"name"}
                                valueField={"id"}
                                style={{ ...styles.smallWhiteButton, ...styles.textBox }}
                                fontFamily='Poppins-Regular'
                                placeholder='Select a plant'
                                onChange={(item: any) => {
                                    setSelectedPlantType(item.id);
                                }}
                            ></Dropdown>
                            {/* Description */}
                            <Text style={styles.smallHeading}>{'Description (optional)'}</Text>
                            <TextInput
                                style={{ ...styles.smallWhiteButton, ...styles.textBox }}
                                keyboardType="default"
                                onChangeText={setDescription}
                            />
                            <View style={[{ display: "flex", flexDirection: "row", alignItems: "center" }]}>
                                <Text style={[styles.smallHeading, { flex: 1 }]}>{'Device ID'}</Text>
                                <Pressable onPress={() => {
                                    setInfoVisible(true)
                                }} style={{ flex: 1, alignItems: "flex-end" }}>
                                    <Image style={{ width: 30, height: 30 }} source={require("../images/help_icon.png")} />
                                </Pressable>
                            </View>

                            <TextInput
                                style={{ ...styles.smallWhiteButton, ...styles.textBox }}
                                keyboardType="default"
                                onChangeText={setDeviceID}
                            />
                            <Image
                                style={styles.line}
                                source={require("../images/line.png")}
                            />
                            {/* Device */}

                        </View>
                        <Text style={styles.error}>{issues}</Text>
                        <Pressable
                            onPress={submitPlant}
                            style={[styles.greenButton, { marginVertical: 15 }]}>
                            <Text style={[styles.greenButton]}>{'Plant now!'}</Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </View>

            {/* Footer */}
            <Footer />
        </View>
    );
};
