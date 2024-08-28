import React from 'react';
import {TextInput} from 'react-native';
import {styles} from './Styles.tsx';


export const Search = ({}) => {
    return (
        <TextInput
        style={styles.search}
        placeholder="Search"
        keyboardType="default"
        backgroundColor="white"
        />
    );
}