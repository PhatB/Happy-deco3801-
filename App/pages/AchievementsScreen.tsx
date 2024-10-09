import React from 'react';
import {Image, ScrollView, View, Text, ImageSourcePropType} from 'react-native';

import {styles} from '../other/Styles.tsx';
import {Footer} from '../other/Footer.tsx';
import {SmallLine} from '../other/MiscComponents/Line.tsx';
import {Rank} from '../other/Rank.tsx';

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
                        <View style={{alignItems: 'center', flexDirection: 'row'}}>
                            <Image
                            style={{width: 120, height: 120, borderRadius: 120/2, marginVertical: 10}}
                            source={require('../images/CaitlinMikli.png')}
                            />
                            <View style={{flexDirection: 'column', marginHorizontal: 10}}>
                                <Text style={styles.smallHeading}>Caitlin Mikli</Text>
                                <Text style={styles.baseText}>Lvl 5 - Intermediate Gardener</Text>
                            </View>
                        </View>
                    </View>

                    {/* <View style={{width: '90%', alignSelf: 'center'}}><SmallLine></SmallLine></View> */}

                    <View style={styles.main}>
                        {/* Your Achievements */}
                        <Text style={[styles.smallHeading, {marginVertical: 10}]}>Your Achievements</Text>
                        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                            <View style={[styles.greenButton, {width: '27.5%', flexDirection: 'column'}]}>
                                <Text style={styles.achievementBox}>Healthy Days</Text>
                                <Text style={[styles.achievementBox, {fontSize: 25}]}>3/14</Text>
                            </View>
                            <View style={[styles.greenButton, {width: '27.5%', flexDirection: 'column'}]}>
                                <Text style={styles.achievementBox}>Pest-Free Days</Text>
                                <Text style={[styles.achievementBox, {fontSize: 25}]}>6/14</Text>
                            </View>
                            <View style={[styles.greenButton, {width: '27.5%', flexDirection: 'column'}]}>
                                <Text style={styles.achievementBox}>Monthly Streak</Text>
                                <Text style={[styles.achievementBox, {fontSize: 25}]}>6</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.main}>
                        {/* Ranking */}
                        <Text style={[styles.smallHeading, {marginVertical: 10}]}>Ranking</Text>
                        <View style={{flexDirection: 'row'}}>
                            <View>
                                <Image
                                style={{width: 55, height: 55, marginVertical: 7.5}}
                                source={require('../images/1stMedal.png')}
                                />
                                <Image
                                style={{width: 55, height: 55, marginVertical: 7.5}}
                                source={require('../images/2ndMedal.png')}
                                />
                                <Image
                                style={{width: 55, height: 55, marginVertical: 7.5}}
                                source={require('../images/3rdMedal.png')}
                                />
                            </View>
                            <View>
                                <Rank
                                    name={"Grace Choo"}
                                    lvl={"Lvl 10 - Intermediate Gardener"}
                                    defaultImage={require("../images/GraceChoo.png")}
                                />
                                <Rank
                                    name={"Caitlin Mikli"}
                                    lvl={"Lvl 5 - Intermediate Gardener"}
                                    defaultImage={require("../images/CaitlinMikli.png")}
                                />
                                <Rank
                                    name={"Yuki Bui"}
                                    lvl={"Lvl 4 - Beginner Gardener"}
                                    defaultImage={require("../images/YukiBui.png")}
                                />
                                <Rank
                                    name={"Taichun Chen"}
                                    lvl={"Lvl 3 - Beginner Gardener"}
                                    defaultImage={require("../images/TaichunChen.png")}
                                />
                                <Rank
                                    name={"Karan Vijay Shankar"}
                                    lvl={"Lvl 2 - Beginner Gardener"}
                                    defaultImage={require("../images/KaranVijayShankar.png")}
                                />
                                <Rank
                                    name={"Billy Rule"}
                                    lvl={"Lvl 1 - Beginner Gardener"}
                                    defaultImage={require("../images/BillyRule.png")}
                                />
                            </View>
                        </View>
                    </View>

                </ScrollView>
            </View>

            {/* Footer */}
            <Footer />
        </View>
    );
};
