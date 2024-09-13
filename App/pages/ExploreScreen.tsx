import React, {useEffect, useState} from 'react';
import {ScrollView, View, Text, Pressable, ImageSourcePropType} from 'react-native';

import {styles} from '../other/Styles.tsx';
import {Footer} from '../other/Footer.tsx';
import {Search} from '../other/Search.tsx';

import plants from "../data/PlantTypes.json";
import pests from "../data/PestTypes.json";
import {PrettyList} from "../other/PrettyList.tsx";

type PlantType = {
    name: string
    sci_name: string
    difficulty: string
    location: string
    moisture_min: number
    moisture_max: number
    sun_min: number
    sun_max: number
    temp_min: number
    temp_max: number
    uv_min: number
    uv_max: number
    pests: string
    detail: string
    image: ImageSourcePropType
}
/*
     source={info.name == "Peace Lily" ? require('../images/peace.jpg') :
                                (info.name == "Dieffenbachia" ? require('../images/dieffenbachia.jpg') :
                                    (info.name == "Monstera" ? require('../images/monstera.jpg') :
                                        (info.name == "Orchid" ? require('../images/orchid.jpg') :
                                            (info.name == "Burro's Tail" ? require('../images/succulent.jpg') :
                                                require('../images/missingTexture.jpg')))))}
 */

const plantImages: any = {
    "Peace Lily" : require("../images/peace.jpg"),
    "Dieffenbachia": require("../images/dieffenbachia.jpg"),
    "Monstera" : require("../images/monstera.jpg"),
    "Orchid" : require("../images/orchid.jpg"),
    "Burro's Tail" : require("../images/succulent.jpg"),
}


export const ExploreScreen = () =>{

        const loadPlants = () => {
            let plantTypes: PlantType[] = []
            let plantList: any[] = plants
            console.log(JSON.stringify(plantList));
            for (let index in plantList) {
                let plant = plantList[index]
                console.log("plant: " + JSON.stringify(plant));
                let plantType: any = {}
                for (let key in plant) {
                    console.log("KEY:" + key)
                    plantType[key] = plant[key]
                }
                plantType["image"] = plantImages[plant["name"]]
                plantTypes.push(plantType);
                console.log(JSON.stringify("PT: " + JSON.stringify(plantType)));
            }
            console.log(plantTypes.toString())
            return plantTypes
        }
        const [plantTypes, setPlantTypes] = useState<PlantType[]>([]);
        const [showPlants, setShowPlants] = useState<boolean>(true);
        return (
            // Full view
            <View style={{height: '100%'}}>
                {/* Scroll view */}
                <View style={styles.scrollArea}>
                    <ScrollView contentInsetAdjustmentBehavior="automatic">
                        <Text style={styles.pageTitle}>{'Explore'}</Text>
                        {/* Search bar */}
                        <Search />
                        {/* Plants/pests buttons */}
                        <View
                        style= {{
                            flexDirection: 'row',
                            justifyContent: 'center',
                        }}
                        >
                            {/* Plants */}
                            {showPlants ?
                                <Pressable
                                style={[styles.greenButton,
                                    styles.smallGreenButton]}
                                onPress={() => setShowPlants(true)}>
                                    <Text style={styles.greenButton}>{'Plants'}</Text>
                                </Pressable>
                                :
                                <Pressable
                                style={[styles.greenButton,
                                    styles.smallWhiteButton]}
                                onPress={() => setShowPlants(true)}
                                >
                                    <Text
                                    style={[styles.greenButton,
                                        {backgroundColor: 'white',
                                        color: '#B3B3B3',
                                        }]}
                                    >
                                        {'Plants'}
                                    </Text>
                                </Pressable>
                            }
                            {/* Pests */}
                            {showPlants ?
                                <Pressable
                                style={[styles.greenButton,
                                styles.smallWhiteButton]}
                                onPress={() => setShowPlants(false)}
                                >
                                    <Text
                                    style={[styles.greenButton,
                                    {backgroundColor: 'white',
                                    color: '#B3B3B3',
                                    }]}
                                    >
                                        {'Pests'}
                                    </Text>
                                </Pressable>
                                :
                                <Pressable
                                style={[styles.greenButton,
                                    styles.smallGreenButton]}
                                    onPress={() => setShowPlants(false)}
                                    >
                                        <Text style={styles.greenButton}>{'Pests'}</Text>
                                    </Pressable>
                                }
                        </View>
                        {/* Main box */}
                        <View style={styles.main}>
                            {/* Display plants or pests */}
                            {
                                showPlants
                                ? <PrettyList  data={loadPlants()}
                                               primaryField = {"name"}
                                               secondaryField={"sci_name"}
                                               targetPage={"MoreInfo"}
                                               image = "auto"
                                               targetConstParams={{"isPlant":showPlants}}
                                               targetItemParams={{}}/>
                                : <PrettyList  data={pests}
                                               primaryField = {"name"}
                                               image = "auto"
                                               secondaryField={"sci_name"}
                                               targetPage={"MoreInfo"}
                                               targetConstParams={{"isPlant":showPlants}}
                                               targetItemParams={{}}/>
                            }
                        </View>
                    </ScrollView>
                </View>

                {/* Footer */}
                <Footer />
            </View>
        );

}
