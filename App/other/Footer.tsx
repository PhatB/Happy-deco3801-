import React from 'react';
import {
    View,
    Text,
    Pressable,
    Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './Styles.tsx';

// Images
const homeIcon = '../images/homeIcon.png';
const zoomIcon = '../images/zoomIcon.png';
const searchIcon = '../images/searchIcon.png';
const trophyIcon = '../images/trophyIcon.png';
const profileIcon = '../images/profileIcon.png';
const leafIcon = '../images/leafIcon.png';

const homeIndex = 0;

export const Footer = ({}) => {
    const navigation = useNavigation();
    const state = navigation.getState()?.index;
    return (
        <View style={styles.footer}>
            {/* Footer Icons */}
            {navigation.getState().index == homeIndex ? <Text>{navigation.getState().index}</Text> : <Text>{'False'}</Text>}
            {/*navigation.getState().index == homeIndex ? image = leafIcon : image = homeIcon*/}
            
            <Pressable onPress={() => navigation.navigate("Home", {screen: "HomeScreen"})}>
                <Image
                style={styles.footerIcon}
                source={require(leafIcon)}
                />
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Explore", {screen: "ExploreScreen"})}>
                <Image
                style={styles.footerIcon}
                source={require(searchIcon)}
                />
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Achievements", {screen: "AchievementsScreen"})}>
                <Image
                style={styles.footerIcon}
                source={require(trophyIcon)}
                />
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Profile", {screen: "ProfileScreen"})}>
                <Image
                style={styles.footerIcon}
                source={require(profileIcon)}
                />
            </Pressable>
        </View>
    );
  }