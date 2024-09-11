
import React from 'react'
import {FlatList, Text, View, Image, Pressable} from "react-native";

import {styles} from './Styles.tsx';


type ListProps = {
    data: any[]
}
export const PrettyList = (props: ListProps) => {

    return (
        <View>
            <FlatList
                data={props.data}
                scrollEnabled={false}
                renderItem ={({item}) =>
                    <View
                        style={{flexDirection:'row', paddingVertical: 15}}>
                        <Image
                            style={styles.display}
                            source={item.name == "Peace Lily" ? require('../images/peace.jpg') :
                                (item.name == "Dieffenbachia" ? require('../images/dieffenbachia.jpg') :
                                    (item.name == "Monstera" ? require('../images/monstera.jpg') :
                                        (item.name == "Orchid" ? require('../images/orchid.jpg') :
                                            (item.name == "Burro's Tail" ? require('../images/succulent.jpg') :
                                                require('../images/missingTexture.jpg')))))}
                        />
                        <View
                            style={{width: '60%', flexDirection: 'column'}}>
                            {/* Name */}
                            <Text
                                style={[styles.baseText, {fontSize: 20}]}>
                                {`${item.name}`}
                            </Text>
                            <Text
                                style={[styles.baseText, {fontSize: 15, color: '#BFBFBF'}]}>
                                {`${item.sci_name}`}
                            </Text>
                        </View>
                        <Pressable>
                            <Image
                                style={{direction: 'rtl'}}
                                source={require('../images/arrowIcon.png')}
                            />
                        </Pressable>
                    </View>
                }
            />

        </View>
    )
}
