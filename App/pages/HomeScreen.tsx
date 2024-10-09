import React, {useEffect, useState} from 'react';
import {ScrollView, View, Text, Image, Pressable} from 'react-native';

import {styles} from '../other/Styles.tsx';
import {Footer} from '../other/Footer.tsx';
import {Search} from '../other/Search.tsx';

import {useNavigation, useRoute} from '@react-navigation/native';

const testUserId = "66e3848cc14bcef4f162d6e9";
const plusIcon = '../images/plusIcon.png';
import {PrettyList} from '../other/PrettyList.tsx';
import plants from "../data/PlantTypes.json";
import { InfoType } from './ExploreScreen.tsx';
import {PlantType, UserPlant, userPlantsFromUser} from '../api.ts'



export const HomeScreen = (props: any) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState<UserPlant[]>([]);
    const [error, setError] = useState<Error | null>(null);
    const [searchText, setSearchText] = useState<string>("");
    const navigation = useNavigation<any>();

    
    const getPlants = async () => {
        setLoading(true);
        try {
            let plants = await userPlantsFromUser(testUserId);
            setData(plants);
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
        <View style={{height: '100%'}}>
            {/* Scroll view */}
            <View style={styles.scrollArea}>
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    <Text style={styles.pageTitle}>{"Your Plants"}</Text>
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
                        {error !== null || isLoading
                            ? <Text>{`Error while accessing your plant list. ${error?.message}`}</Text>
                            : <PrettyList
                                data={data}
                                primaryField={"name"}
                                secondaryField={"name"}
                                defaultImage={require("../images/gLeafIcon.png")}
                                targetPage = "MoreInfo"
                                targetItemParams={{"info":"self", "extra": "self"}}
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
