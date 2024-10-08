import React from 'react';
import {Image, ScrollView, View, Text} from 'react-native';

import {styles} from '../other/Styles.tsx';
import {Footer} from '../other/Footer.tsx';
import {SmallLine} from '../other/MiscComponents/Line.tsx';

export const AchievementsScreen = () => {
    return (
        // Full view
        <View style={{height: '100%'}}>
            {/* Scroll view */}
            <View style={styles.scrollArea}>
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    <Text style={styles.pageTitle}>{'Achievements'}</Text>

                    <View style={styles.main}>
                        
                        {/* User */}
                        <View style={{alignItems: 'center'}}>
                            <Image
                            style={{width: 125, height: 125, borderRadius: 125/2}}
                            source={require('../images/CaitlinMikli.png')}
                            />
                            <Text style={styles.smallHeading}>Caitlin Mikli</Text>
                            <Text style={styles.baseText}>Lvl 5 - Intermediate Gardener</Text>
                        </View>

                        {/* Your Achievements */}
                        <SmallLine></SmallLine>
                        <Text style={styles.smallHeading}>Your Achievements</Text>
                        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                            <View style={[styles.greenButton, {width: '27.5%', flexDirection: 'column'}]}>
                                <Text style={styles.achievementBox}>Healthy Days</Text>
                                <Text style={[styles.achievementBox, {fontSize: 25}]}>3/14</Text>
                            </View>
                            <View style={[styles.greenButton, {width: '27.5%', flexDirection: 'column'}]}>
                                <Text style={styles.achievementBox}>Pest-Free Days</Text>
                                <Text style={[styles.achievementBox, {fontSize: 25}]}>6/12</Text>
                            </View>
                            <View style={[styles.greenButton, {width: '27.5%', flexDirection: 'column'}]}>
                                <Text style={styles.achievementBox}>Monthly Streak</Text>
                                <Text style={[styles.achievementBox, {fontSize: 25}]}>6</Text>
                            </View>
                        </View>

                        {/* Ranking */}
                        <SmallLine></SmallLine>
                        <Text style={styles.smallHeading}>Ranking</Text>

                    </View>

                </ScrollView>
            </View>

            {/* Footer */}
            <Footer />
        </View>
    );
};
