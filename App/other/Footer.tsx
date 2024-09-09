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
const gLeafIcon = '../images/gLeafIcon.png';
const leafIcon = '../images/leafIcon.png';
const gSearchIcon = '../images/gSearchIcon.png';
const searchIcon = '../images/searchIcon.png';
const gTrophyIcon = '../images/gTrophyIcon.png';
const trophyIcon = '../images/trophyIcon.png';
const gProfileIcon = '../images/gProfileIcon.png';
const profileIcon = '../images/profileIcon.png';

const homeIndex = 0;
const exploreIndex = 1;
const achievementsIndex = 2;
const profileIndex = 3;

export const Footer = ({}) => {
    const navigation = useNavigation();
    const state = navigation.getState()?.index;
    return (
        <View style={styles.footer}>
            {/* Footer Icons */}
            <Pressable onPress={() => navigation.navigate("Home", {screen: "HomeScreen"})}>
                <Image
                style={styles.footerIcon}
                source={navigation.getState().index == homeIndex ? require(gLeafIcon):require(leafIcon)}
                />
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Explore", {screen: "ExploreScreen"})}>
                <Image
                style={styles.footerIcon}
                source={navigation.getState().index == exploreIndex ? require(gSearchIcon):require(searchIcon)}
                />
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Achievements", {screen: "AchievementsScreen"})}>
                <Image
                style={styles.footerIcon}
                source={navigation.getState().index == achievementsIndex ? require(gTrophyIcon):require(trophyIcon)}
                />
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Profile", {screen: "ProfileScreen"})}>
                <Image
                style={styles.footerIcon}
                source={navigation.getState().index == profileIndex ? require(gProfileIcon):require(profileIcon)}
                />
            </Pressable>
        </View>
    );
  }