import React, {useEffect} from 'react'
import {FlatList, Text, View} from "react-native";
import * as fs from 'react-native-fs'
import {readString} from 'react-native-csv'
import plants from "../data/PlantTypes.json";


export const ExploreDisplayPests = ({}) => {

    return (
        <View>
            <FlatList
                data={plants}
                renderItem ={({item}) => <Text>{`
                    Name: ${item.name}
                    Scientific Name: ${item.sci_name}
                   `}
                </Text>}
            />

        </View>
    )
}
