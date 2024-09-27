import React, {useEffect, useState} from 'react';
import {ScrollView, View, Text, Pressable, ImageSourcePropType} from 'react-native';

import {styles} from '../other/Styles.tsx';
import {Footer} from '../other/Footer.tsx';
import {Search} from '../other/Search.tsx';

import plants from "../data/PlantTypes.json";
import pests from "../data/PestTypes.json";
import {PrettyList} from "../other/PrettyList.tsx";
import Screen from "react-native-screens/src/components/Screen.tsx";

type PlantType = {
    name: string
    scientificName: string
    difficulty: string
    location: string
    moistureMin: number
    moistureMax: number
    sunlightMin: number
    sunlightMax: number
    temperatureMin: number
    temperatureMax: number
    uvMin: number
    uvMax: number
    pests: string
    detail: string
    image: ImageSourcePropType
}

type PestTypes = {
    name: string,
    scientificName: string,
    appearance: string,
    associatedPlants: string
    symptoms: string
    manage: string
    url: string
    image: ImageSourcePropType
}

const pestImages: any = {
    "Mealybugs": require("../images/mealybugs.jpg"),
    "Spider Mites": require("../images/spiderMites.jpg"),
    "Scale Insects": require("../images/scaleInsects.jpg"),
    "Fungus Gnats": require("../images/fungusGnats.jpg"),
    "Aphids": require("../images/aphids.jpg"),
    "Thrips": require("../images/thrips.jpg"),
}
const plantImages: any = {
    "Peace Lily" : require("../images/peace.jpg"),
    "Dieffenbachia": require("../images/dieffenbachia.jpg"),
    "Monstera" : require("../images/monstera.jpg"),
    "Orchid" : require("../images/orchid.jpg"),
    "Burro's Tail" : require("../images/succulent.jpg"),
}

export const ExploreScreen = () =>{

    const [searchText, setSearchText] = useState("");
    /**
     * Converts the plant data from JSON into an array of PlantType structs.
     */
    function loadJson<Type>(json: any[], images:any) {
            let types: Type[] = []
            // Go through each element in the JSON
            for (let index in json) {
                let item = json[index]

                // Add the plant's image
                item["image"] = images[item["name"]]
                // Convert the plant to a PlantType and add it to the array.
                types.push(item);
            }
            return types
        }
        const [showPlants, setShowPlants] = useState<boolean>(true);
    /**
     * Component for the buttons that switch between displaying plants and pests
     * @param props Contains `showPlants: boolean`
     * and `label: string`
     */
    const ShowPlantButton = (props: any) => {
            return(
                <Pressable
                    style={[styles.greenButton, showPlants === props.showPlants
                        ? styles.smallGreenButton
                        : styles.smallWhiteButton
                    ]}
                    onPress={() => setShowPlants(props.showPlants)}>
                    <Text style={[styles.greenButton, showPlants !== props.showPlants
                        ? {backgroundColor: 'white',color: '#B3B3B3'}
                        :{}
                    ]}>
                        {props.label}
                    </Text>
                </Pressable>
            )
        }
        return (
            // Full view
            <View style={{height: '100%'}}>
                {/* Scroll view */}
                <View style={styles.scrollArea}>
                    <ScrollView contentInsetAdjustmentBehavior="automatic">
                        <Text style={styles.pageTitle}>{'Explore'}</Text>
                        {/* Search bar */}
                        <Search searchCallback={setSearchText}/>
                        {/* Plants/pests buttons */}
                        <View
                        style= {{
                            flexDirection: 'row',
                            justifyContent: 'center',
                        }}
                        >
                            {/* Plants */}
                            <ShowPlantButton showPlants={true} label={"Plants"} />
                            {/* Pests */}
                            <ShowPlantButton showPlants={false} label={"Pests"} />

                        </View>
                        {/* Main box */}
                        <View style={styles.main}>
                            {/* Display plants or pests */}
                            <PrettyList
                                data={showPlants
                                    ? loadJson<PlantType>(plants, plantImages)
                                    : loadJson<PlantType>(pests, pestImages)
                                    }
                                primaryField = {"name"}
                                secondaryField={"scientificName"}
                                targetPage={"MoreInfo"}
                                defaultImage={require("../images/gLeafIcon.png")}
                                targetConstParams={{"isPlant":showPlants}}
                                targetItemParams={{}}
                                searchString={searchText}
                            />


                        </View>
                    </ScrollView>
                </View>

                {/* Footer */}
                <Footer />
            </View>
        );

}
