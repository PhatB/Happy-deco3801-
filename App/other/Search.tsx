import React from 'react';
import {TextInput, View, Image, ImageSourcePropType} from 'react-native';
import {styles} from './Styles.tsx';

const searchIcon = '../images/searchIcon.png';
interface SearchProps {
    searchCallback: (text: string) => void,
}
export const Search = (props: SearchProps) => {
    return (
        <View style={{...styles.main,...styles.search}}>
            <Image
                style={{width: 30, height: 30, resizeMode: 'stretch'}}
                source={require(searchIcon)}
            />
            <TextInput
            style={{width: '100%', fontSize: 20, 
                marginHorizontal: 10}}
            placeholder="Search"
            keyboardType="default"
            onChangeText={props.searchCallback}
            maxLength={25}
            />
        </View>
        
    );
}