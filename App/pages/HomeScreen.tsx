import React, {useEffect, useState} from 'react';
import {ScrollView, View, Text, Image, Pressable} from 'react-native';

import {styles} from '../other/Styles.tsx';
import {Footer} from '../other/Footer.tsx';
import {Search} from '../other/Search.tsx';

import {useNavigation} from '@react-navigation/native';

const testUserId = "66e3848cc14bcef4f162d6e9";
const plusIcon = '../images/plusIcon.png';
import {PrettyList} from '../other/PrettyList.tsx';
import plants from "../data/PlantTypes.json";
import { InfoType, PlantType } from './ExploreScreen.tsx';

type UserPlantJSON = {
    id: string;
    name: string,
    plantType: string,
    device: string,
}

type UserPlant = {
    id: string;
    name: string,
    plantType: PlantType,
    device: string,
}

export const HomeScreen = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState<UserPlantJSON[]>([]);
    const [error, setError] = useState<String | null>(null);
    const [searchText, setSearchText] = useState<string>("");
    const navigation = useNavigation<any>();

    
    const getPlants = async () => {
        try {
            const response = await fetch("https://deco3801-teamhappy.uqcloud.net/api/UserPlant/FromUser/" + testUserId);
            const json = await response.json();
            console.log(json)
            setData(json);
        } catch (err) {
            setError(err as String);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        getPlants().then();
    }, [])
    return (
    // Full view
        <View style={{height: '100%'}}>
            {/* Scroll view */}
            <View style={styles.scrollArea}>
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    <Text style={styles.pageTitle}>{'My Plants'}</Text>
                    {/* Search bar */}
                    <Search searchCallback={setSearchText}/>
                    {/* Weather box */}
                    <View>
                    </View>
                    {/* Main box */}

                    <View style={[styles.main, {flexDirection:'column'}]}
                    >
                        {/* Add new plant */}
                        <Pressable
                        style={[styles.greenButton, {marginVertical: 15}]}
                        onPress={() => navigation.navigate("Add", {screen: "AddPlantScreen"})}
                        >
                            <Image source={require(plusIcon)} />
                            <Text style={styles.greenButton}>{'Add new plant'}</Text>
                        </Pressable>
                        {error !== null
                            ? <Text>{`Error while accessing your plant list. ${error}`}</Text>
                            : <PrettyList
                                data={data}
                                primaryField={"name"}
                                secondaryField={"plantType"}
                                defaultImage={require("../images/gLeafIcon.png")}
                                targetPage = "MoreInfo"
                                targetItemParams={{}}
                                targetConstParams={{"infoType":InfoType.PlantProfile}}
                                searchString={searchText}
                            />}

                    </View>
                </ScrollView>
            </View>

            {/* Footer */}
            <Footer />
        </View>
    );
};
