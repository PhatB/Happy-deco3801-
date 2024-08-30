import React from 'react';
import {
    ScrollView,
    View,
    Text,
} from 'react-native';

import {styles} from '../other/Styles.tsx';
import {Footer} from '../other/Footer.tsx';
import {Search} from '../other/Search.tsx';

export const SearchScreen = () => {
    return (
        // Full view
        <View style={{height: '100%'}}>
            {/* Scroll view */}
            <View style={styles.scrollArea}>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic">
                    <Text style={styles.pageTitle}>
                        {'Explore'}
                    </Text>
                    {/* Search bar */}
                    <Search></Search>
                </ScrollView>
            </View>

            {/* Footer */}
            <Footer></Footer>

        </View>
    );
};