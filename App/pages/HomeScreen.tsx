import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, Image, Pressable } from 'react-native';

import { styles } from '../other/Styles.tsx';
import { Footer } from '../other/Footer.tsx';
import { Search } from '../other/Search.tsx';
import { Weather } from '../other/Weather.tsx';


import { useNavigation, useRoute } from '@react-navigation/native';

const testUserId = "66e3848cc14bcef4f162d6e9";
const plusIcon = '../images/plusIcon.png';
const bellIcon = '../images/notification_bell.png'
const activeBell = '../images/notification_active.png'
import { PrettyList } from '../other/PrettyList.tsx';
import plants from "../data/PlantTypes.json";
import { InfoType } from './ExploreScreen.tsx';
import { EnvironmentRecord, getDeviceFromUser, getEnvironmentRecords, mostRecentEnvironmentRecord, PlantType, UserPlant, userPlantsFromUser } from '../api.ts'
import { Loading } from '../other/MiscComponents/Loading.tsx';
import { inBounds } from '../other/PlantProfile.tsx';

export type Notification = {
    type: "water" | "sunlight" | "temperature",
    time: string
    plant: UserPlant
    record: EnvironmentRecord
}

const whatsWrong = (record: EnvironmentRecord, plantType: PlantType) => {
    if (!inBounds(record.moisture, plantType.moistureMin, plantType.moistureMax)) return "water";
    if (!inBounds(record.sunlight, plantType.sunlightMin, plantType.sunlightMax)) return "sunlight";
    if (!inBounds(record.temperature, plantType.temperatureMin, plantType.temperatureMax)) return "temperature";
    return "nothing"
}

export const checkNotifications = async () => {
    let notifs = []
    let plants = await userPlantsFromUser(testUserId)
    for (let i = 0; i < plants.length; i++) {
        let device = plants[i].device;
        let recent = await mostRecentEnvironmentRecord(device);
        if (recent === null || recent.suppressNotifications) {
            continue;
        }
        let wrong = whatsWrong(recent, plants[i].plantType)
        switch (wrong) {
            case "nothing":
                continue
            default:
                notifs.push({ type: wrong, time: recent.time, plant: plants[i], record: recent } as Notification)

        }

    }
    console.log(notifs)
    return notifs;
}
export const HomeScreen = (props: any) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState<UserPlant[]>([]);
    const [error, setError] = useState<Error | null>(null);
    const [searchText, setSearchText] = useState<string>("");
    const navigation = useNavigation<any>();
    const [notifications, setNotifications] = useState<Notification[]>([])



    const getPlants = async () => {
        setLoading(true);
        try {
            let plants = await userPlantsFromUser(testUserId);
            setData(plants);
            setNotifications(await checkNotifications())
            //console.error(plants)
        } catch (e: any) {
            setError(e)
        } finally {
            setLoading(false)
        }


    }
    useEffect(() => {

        getPlants().then();
    }, [props])
    return (
        // Full view
        <View style={{ height: '100%' }}>
            {/* Scroll view */}
            <View style={styles.scrollArea}>
                <ScrollView contentInsetAdjustmentBehavior="automatic">


                    <Text style={[styles.pageTitle]}>{"Your Plants"}</Text>
                    <Pressable onPress={() => {
                        navigation.navigate("Notifications", { screen: "Notifications", notifs: notifications })
                    }} style={styles.notificationBell}>
                        <Image source={notifications.length == 0 ? require(bellIcon) : require(activeBell)}></Image>
                    </Pressable>


                    {/* Weather box */}
                    <View style={styles.main}><Weather /></View>

                    {/* Search bar */}
                    <Search searchCallback={setSearchText} />
                    {/* Main box */}

                    <View style={[styles.main, { flexDirection: 'column' }]}
                    >
                        {/* Add new plant */}
                        <Pressable
                            style={[styles.greenButton, { marginVertical: 15, flexDirection: "row", display: "flex", alignItems: "center" }]}
                            onPress={() => navigation.navigate("Add", { screen: "AddPlantScreen" })}
                        >
                            <Image style={{ width: 27, height: 27, transform: [{ translateY: -2 }, { translateX: 7 }] }} source={require(plusIcon)} />
                            <Text style={styles.greenButton}>{'Add new plant'}</Text>
                        </Pressable>
                        {isLoading ? <Loading /> :
                            error !== null
                                ? <Text>{`Error while accessing your plant list. ${error?.message}`}</Text>
                                : <PrettyList
                                    data={data}
                                    primaryField={"name"}
                                    secondaryField={"name"}
                                    defaultImage={require("../images/gLeafIcon.png")}
                                    targetPage="MoreInfo"
                                    targetItemParams={{ "info": "self", "extra": "self" }}
                                    targetConstParams={{ "infoType": InfoType.PlantProfile }}
                                    searchString={searchText}
                                />
                        }


                    </View>
                </ScrollView>
            </View>

            {/* Footer */}
            <Footer />
        </View>
    );
};
