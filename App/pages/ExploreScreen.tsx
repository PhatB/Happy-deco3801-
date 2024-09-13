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
            for (let index in plantList) {
                let plant = plantList[index]
                let plantType: any = {}
                for (let key in plant) {
                    plantType[key] = plant[key]
                }
                plantType["image"] = plantImages[plant["name"]]
                plantTypes.push(plantType);
            }
            return plantTypes
        }
        const [showPlants, setShowPlants] = useState<boolean>(true);
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
                        <Search />
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
                                data={showPlants ? loadPlants() : pests}
                                primaryField = {"name"}
                                secondaryField={"sci_name"}
                                targetPage={"MoreInfo"}
                                defaultImage={require("../images/gLeafIcon.png")}
                                targetConstParams={{"isPlant":showPlants}}
                                targetItemParams={{}}
                            />


                        </View>
                    </ScrollView>
                </View>

                {/* Footer */}
                <Footer />
            </View>
        );

}
