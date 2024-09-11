import React from 'react';
import {ScrollView, View, Text, Image} from 'react-native';

import {styles} from '../other/Styles.tsx';
import {Footer} from '../other/Footer.tsx';
import {Search} from '../other/Search.tsx';
import {ExploreDisplayPlants} from "../other/ExploreDisplayPlants.tsx";

const plusIcon = '../images/plusIcon.png';

type UserPlant = {
    id: string;
    name: string,
    
}
export const HomeScreen = () => {
    return (
    // Full view
        <View style={{height: '100%'}}>
            {/* Scroll view */}
            <View style={styles.scrollArea}>
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    <Text style={styles.pageTitle}>{'My Plants'}</Text>
                    {/* Search bar */}
                    <Search />
                    {/* Main box */}
                    <View style={[styles.main, {flexDirection:'column'}]} >
                        {/* Add new plant */}
                        <View style={[styles.greenButton, {marginVertical: 15}]}>
                            <Image source={require(plusIcon)} />
                            <Text style={styles.greenButton}>{'Add new plant'}</Text>
                        </View>

                    </View>
                </ScrollView>
            </View>

            {/* Footer */}
            <Footer />
        </View>
    );
};
