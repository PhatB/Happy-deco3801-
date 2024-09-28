import React from 'react';
import {ScrollView, View, Text, Pressable, Image} from 'react-native';

import {styles} from '../other/Styles.tsx';
import {Footer} from '../other/Footer.tsx';

export const ProfileScreen = () => {
    return (
        // Full view
        <View style={{height: '100%'}}>
            {/* Scroll view */}
            <View style={styles.scrollArea}>
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    <Text style={styles.pageTitle}>{'Profile'}</Text>

                    {/* Account */}
                    <View style={[styles.main, {flexDirection: 'row', paddingVertical: 20, marginTop: '22.5%'}]}>
                        <View style={{width: '92.5%'}}>
                            <Text style={styles.smallHeading}>Account</Text>
                        </View>
                        <Pressable>
                            <Image
                                style={{direction: 'rtl', width: 20, height: 20}}
                                source={require('../images/arrowIcon.png')}
                            />
                        </Pressable>
                    </View>

                    {/* Notification */}
                    <View style={[styles.main, {flexDirection: 'row', paddingVertical: 20}]}>
                        <View style={{width: '92.5%'}}>
                            <Text style={styles.smallHeading}>Notification</Text>
                        </View>
                        <Pressable>
                            <Image
                                style={{direction: 'rtl', width: 20, height: 20}}
                                source={require('../images/arrowIcon.png')}
                            />
                        </Pressable>
                    </View>

                    {/* Help & Privacy */}
                    <View style={[styles.main, {flexDirection: 'row', paddingVertical: 20}]}>
                        <View style={{width: '92.5%'}}>
                            <Text style={styles.smallHeading}>Help & Privacy</Text>
                        </View>
                        <Pressable>
                            <Image
                                style={{direction: 'rtl', width: 20, height: 20}}
                                source={require('../images/arrowIcon.png')}
                            />
                        </Pressable>
                    </View>

                    {/* Logout */}
                    <View style={[styles.main, {flexDirection: 'row', paddingVertical: 20, backgroundColor: '#F5D4C9', justifyContent: 'center'}]}>
                            <Text style={styles.smallHeading}>Logout</Text>
                    </View>

                </ScrollView>
            </View>

            {/* Footer */}
            <Footer />
        </View>
    );
};
