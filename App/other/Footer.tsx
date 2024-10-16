import React from 'react';
import {
    View,
    Text,
    Pressable,
    Image,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './Styles.tsx';
import { InfoType } from '../pages/ExploreScreen.tsx';

// Images
const gLeafIcon = '../images/gLeafIcon.png';
const leafIcon = '../images/leafIcon.png';
const gSearchIcon = '../images/gSearchIcon.png';
const searchIcon = '../images/searchIcon.png';
const gTrophyIcon = '../images/gTrophyIcon.png';
const trophyIcon = '../images/trophyIcon.png';
const gProfileIcon = '../images/gProfileIcon.png';
const profileIcon = '../images/profileIcon.png';

export const Footer = ({}) => {
    const navigation = useNavigation<any>();
    const route = useRoute();
    const getInfoType = () => {
        if (route.name == "MoreInfo") {
            let {info, infoType, extra} = route.params;
            return infoType;
        } else {
            return null;
        }
    }
    //let infoType = null;
    // if (route.name == "MoreInfo") {
    //     let {info, infoType, extra} = route.params;
    // }
    return (
        <View style={styles.footer}>
            {/* Footer Icons */}
            <Pressable onPress={() => navigation.navigate("Home", {screen: "HomeScreen"})}>
                <Image
                style={styles.footerIcon}
                source={route.name == "Home" || route.name == "Add" || route.name == "Notifications"|| route.name == "History" || getInfoType() == InfoType.PlantProfile
                    ? require(gLeafIcon):require(leafIcon)}
                />
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Explore", {screen: "ExploreScreen"})}>
                <Image
                style={styles.footerIcon}
                source={route.name == "Explore" || (route.name == "MoreInfo" && getInfoType() != InfoType.PlantProfile)
                        ? require(gSearchIcon):require(searchIcon)}
                />
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Achievements", {screen: "AchievementsScreen"})}>
                <Image
                style={styles.footerIcon}
                source={route.name == "Achievements" ? require(gTrophyIcon):require(trophyIcon)}
                />
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Settings", {screen: "SettingsScreen"})}>
                <Image
                style={styles.footerIcon}
                source={route.name == "Settings" ? require(gProfileIcon):require(profileIcon)}
                />
            </Pressable>
        </View>
    );
}