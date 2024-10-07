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
import { InfoType, PlantType, loadJson, plantImages } from './ExploreScreen.tsx';

type UserPlantJSON = {
    id: string;
    name: string,
    plantType: string,
    device: string,
}

type UserPlant = {
    name: string,
    plantType: PlantType,
    device: string,
}

export const HomeScreen = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState<UserPlantJSON[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [searchText, setSearchText] = useState<string>("");
    const navigation = useNavigation<any>();

    
    const getPlants = async () => {
      
            console.log("STart");
            const response = await fetch("https://deco3801-teamhappy.uqcloud.net/api/UserPlant/FromUser/" + testUserId);
            console.log("end");
            const uPlantJson = await response.json();
            /*
            if (response.status != 200) {
                setError(response.statusText)
            }
           
            let plantTypes: UserPlant[] = [];
            for (let plant of uPlantJson) {
                const id = plant.plantType;

                const plantResponse = await fetch("https://deco3801-teamhappy.uqcloud.net/api/PlantType/" + id)
                const plantJson = await plantResponse.json();
                let plantType: PlantType = loadJson<PlantType>([plantJson], plantImages)[0]
                let newUserPlant: UserPlant = {name: plantJson.name, device: plantJson.device, plantType: plantType}
                plantTypes.push(newUserPlant);
            }
            
           
         

            
            
            */
            setData(uPlantJson);
            setLoading(false);
       
    }
    useEffect(() => {
        console.log("AAA")
        getPlants().then(() => {
            console.log("ERRN")
        });
    }, [setData, setError, setLoading])
    return (
    // Full view
        <View style={{height: '100%'}}>
            {/* Scroll view */}
            <View style={styles.scrollArea}>
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    <Text style={styles.pageTitle}>{"A"}</Text>
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
                            ? <Text>{`Error while accessing your plant list. ${error}`}</Text>
                            : <PrettyList
                                data={data}
                                primaryField={"name"}
                                secondaryField={"name"}
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
