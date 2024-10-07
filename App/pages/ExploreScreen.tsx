import React, {useEffect, useState} from 'react';
import {ScrollView, View, Text, Pressable, ImageSourcePropType} from 'react-native';

import {styles} from '../other/Styles.tsx';
import {Footer} from '../other/Footer.tsx';
import {Search} from '../other/Search.tsx';

import plants from "../data/PlantTypes.json";
import pests from "../data/PestTypes.json";
import {PrettyList} from "../other/PrettyList.tsx";
import Screen from "react-native-screens/src/components/Screen.tsx";

import {PlantType, pestImages, plantImages, addImage} from '../api.ts'


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

export enum InfoType {
    PlantInfo,
    PestInfo,
    PlantProfile
}



export const ExploreScreen = () =>{

    const [searchText, setSearchText] = useState("");
    /**
     * Converts the plant data from JSON into an array of PlantType structs.
     */
    
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
                                    ? addImage<PlantType>(plants, plantImages)
                                    : addImage<PlantType>(pests, pestImages)
                                    }
                                primaryField = {"name"}
                                secondaryField={"scientificName"}
                                targetPage={"MoreInfo"}
                                defaultImage={require("../images/gLeafIcon.png")}
                                targetConstParams={{"infoType":showPlants ? InfoType.PlantInfo : InfoType.PestInfo}}
                                targetItemParams={{"info":"self"}}
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
