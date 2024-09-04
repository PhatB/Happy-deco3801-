import React from 'react';
import {ScrollView, View, Text, Image} from 'react-native';

import {styles} from '../other/Styles.tsx';
import {Footer} from '../other/Footer.tsx';
import {Search} from '../other/Search.tsx';

const plusIcon = '../images/plusIcon.png';

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
                    <View style={styles.main}>
                        {/* Add new plant */}
                        <View style={styles.greenButton}>
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
