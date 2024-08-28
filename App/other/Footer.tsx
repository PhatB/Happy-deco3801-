import React from 'react';
import {
    View,
    Pressable,
    Image,
    Text
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './Styles.tsx';

// Images
const homeIcon = '../images/homeIcon.png';
const zoomIcon = '../images/zoomIcon.png';
const trophyIcon = '../images/trophyIcon.png';
const profileIcon = '../images/profileIcon.png';
const leafIcon = '../images/leafIcon.png';

const homeIndex = 0;
let image;

export const Footer = ({}) => {
    const navigation = useNavigation();
    return (
        <View style={styles.footer}>
            {/* Footer Icons */}
            <Pressable onPress={() => navigation.navigate("Home", {screen: "HomeScreen"})}>
                <Image
                style={styles.footerIcon}
                source={require(leafIcon)}
                />
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Search", {screen: "SearchScreen"})}>
                <Image
                style={styles.footerIcon}
                source={require(zoomIcon)}
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