import React from 'react';
import {ScrollView, View, Text} from 'react-native';

import {styles} from '../other/Styles.tsx';
import {Footer} from '../other/Footer.tsx';

export const AddPlantScreen = () => {
    return (
        // Full view
        <View style={{height: '100%'}}>
            {/* Scroll view */}
            <View style={styles.scrollArea}>
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    <Text style={styles.pageTitle}>{'Add a Plant'}</Text>
                </ScrollView>
            </View>

            {/* Footer */}
            <Footer />
        </View>
    );
};
