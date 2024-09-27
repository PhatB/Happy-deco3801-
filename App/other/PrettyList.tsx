
import React from 'react'
import {FlatList, Text, View, Image, Pressable, ImageSourcePropType} from "react-native";
import {NavigationProp, useNavigation, useRoute} from '@react-navigation/native';

import {styles} from './Styles.tsx';
interface ListProps {
    data: any[],
    primaryField: string,
    secondaryField: string,
    defaultImage: ImageSourcePropType | null,
    targetPage:string,
    targetConstParams: any,
    targetItemParams: any,
    searchString: string,
}


export const PrettyList = (props: ListProps) => {

    /**
     * Creates a struct of parameters to be passed to the
     * target page if the given item is pressed.
     * @param item The current list item.
     */
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
    const navigation: NavigationProp<any> = useNavigation();
    return (
        <View>

            {props.data.length > 0 ? <FlatList
                data={props.searchString !== undefined ?
                    props.data.filter(item => item[props.primaryField] !== undefined
                        && item[props.secondaryField] !== undefined
                        && item[props.primaryField].includes(props.searchString)
                        || item[props.secondaryField].includes(props.searchString)
                    )
                    : props.data
            }
                scrollEnabled={false}
                renderItem ={({item}) =>
                    <View style={{flexDirection:'row', paddingVertical: 15}}>
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
                                style={styles.smallHeading}>
                                {`${item[props.primaryField]}`}
                            </Text>
                            <Text
                                style={[styles.baseText, {fontSize: 15, color: '#BFBFBF', fontFamily: 'Poppins-Italic'}]}>
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
                : <Text style={{textAlign:'center'}}>We found no matches for '{props.searchString}'...</Text>}

        </View>
    )
}
PrettyList.defaultProps = {
    searchString: "",
}