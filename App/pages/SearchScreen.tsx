import React from 'react';
import {
    ScrollView,
    View,
    Text,
} from 'react-native';

import {LineChart} from 'react-native-charts-wrapper';

import {styles} from '../other/Styles.tsx';
import {Footer} from '../other/Footer.tsx';

export const SearchScreen = () => {
    return (
        // Full view
        <View style={{height: '100%'}}>
            {/* Scroll view */}
            <View style={styles.scrollArea}>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic">
                    <Text style={styles.baseText}>
                        {'Explore'}
                    </Text>
                    <LineChart
                        style={styles.chart}
                        data={{
                            dataSets: [
                            {
                                values: [
                                {
                                    y: 65,
                                    x: 0
                                },
                                {
                                    y: 77,
                                    x: 1
                                }
                                ]
                            },
                            ]
                        }}
                        />
                </ScrollView>
            </View>

            {/* Footer */}
            <Footer></Footer>

        </View>
    );
};