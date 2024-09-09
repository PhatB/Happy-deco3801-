
import React, {useEffect} from 'react'
import {FlatList, Text, View, Image} from "react-native";
import * as fs from 'react-native-fs'
import {readString} from 'react-native-csv'
import plants from "../data/PlantTypes.json";
import {styles} from './Styles.tsx';

export const ExploreDisplayPlants = ({}) => {

    //let plantImage = data.item.image

    return (
        <View>
            <FlatList
                data={plants}
                renderItem ={({item}) =>
                <View>
                    <Image
                    style={styles.display}
                    source={item.name == "Peace Lily" ? require('../images/peace.jpg') :
                        (item.name == "Dieffenbachia" ? require('../images/dieffenbachia.jpg') :
                        (item.name == "Monstera" ? require('../images/monstera.jpg') :
                        (item.name == "Orchid" ? require('../images/orchid.jpg') :
                        (item.name == "Burro's Tail" ? require('../images/succulent.jpg') :
                        require('../images/missingTexture.jpg')))))}
                    />
                    <Text>{`
                        Name: ${item.name}
                        Scientific Name: ${item.sci_name}
                    `}
                    </Text>
                </View>
                }
            />

        </View>
    )
}
