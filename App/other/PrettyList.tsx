
import React from 'react'
import {FlatList, Text, View, Image, Pressable, ImageSourcePropType} from "react-native";
import {useNavigation, useRoute} from '@react-navigation/native';

import {styles} from './Styles.tsx';


type ListProps = {
    data: any[],
    primaryField: string,
    secondaryField: string,
    defaultImage: ImageSourcePropType,
    targetPage: string,
    targetConstParams: any,
    targetItemParams: any,
}
export const PrettyList = (props: ListProps) => {
    const navigation = useNavigation();
    const generateParams = (item: any) => {
        let obj: any = {}
        obj["info"] = item;
        for (let key in props.targetConstParams){
            obj[key] = props.targetConstParams[key];
        }
        for (let key in props.targetItemParams){
            obj[key] = item[props.targetItemParams[key]];
        }
        return obj

    }
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
                            source={item.hasOwnProperty('image')
                                ? item.image
                                : props.defaultImage === null || props.defaultImage === undefined
                                    ? require("../images/missingTexture.jpg")
                                    : props.defaultImage
                        }
                        />
                        <View
                            style={{width: '60%', flexDirection: 'column'}}>
                            {/* Name */}
                            <Text
                                style={[styles.baseText, {fontSize: 20}]}>
                                {`${item[props.primaryField]}`}
                            </Text>
                            <Text
                                style={[styles.baseText, {fontSize: 15, color: '#BFBFBF'}]}>
                                {`${item[props.secondaryField]}`}
                            </Text>
                        </View>

                        <Pressable onPress={() => navigation.navigate(props.targetPage, generateParams(item))}>
                            <Image
                                style={{direction: 'rtl', width: 20, height: 20, marginTop: '120%'}}
                                source={require('../images/arrowIcon.png')}
                            />
                        </Pressable>
                    </View>
                }
            />

        </View>
    )
}
