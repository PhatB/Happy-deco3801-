import React from 'react';
import {ScrollView, View, Text, Pressable} from 'react-native';

import {styles} from '../other/Styles.tsx';
import {Footer} from '../other/Footer.tsx';
import {Search} from '../other/Search.tsx';
import { ExploreDisplayPlants } from '../other/ExploreDisplayPlants.tsx';
import { ExploreDisplayPests } from '../other/ExploreDisplayPests.tsx';

export class ExploreScreen extends React.Component {

    state = {
        showPlants: true,
    };

    render() {
        const { showPlants } = this.state;
        return (
            // Full view
            <View style={{height: '100%'}}>
                {/* Scroll view */}
                <View style={styles.scrollArea}>
                    <ScrollView contentInsetAdjustmentBehavior="automatic">
                        <Text style={styles.pageTitle}>{'Explore'}</Text>
                        {/* Search bar */}
                        <Search />
                        {/* Plants/pests buttons */}
                        <View
                        style= {{
                            flexDirection: 'row',
                            justifyContent: 'center',
                        }}
                        >
                            {/* Plants */}
                            <Pressable
                            style={[styles.greenButton,
                            {width: '42.5%',
                            marginHorizontal: '2.5%',
                            }]}
                            onPress={() => this.setState({ showPlants: true })}
                            >
                                <Text style={styles.greenButton}>{'Plants'}</Text>
                            </Pressable>
                            {/* Pests */}
                            <Pressable
                            style={[styles.greenButton,
                            {width: '42.5%',
                            backgroundColor: 'white',
                            borderWidth: 1,
                            borderColor: '#B3B3B3',
                            marginHorizontal: '2.5%',
                            }]}
                            onPress={() => this.setState({ showPlants: false })}
                            >
                                <Text
                                style={[styles.greenButton,
                                {backgroundColor: 'white',
                                color: '#B3B3B3',
                                }]}
                                >
                                    {'Pests'}
                                </Text>
                            </Pressable>
                        </View>
                        {/* Main box */}
                        <View style={styles.main}>
                            {/* Display plants or pests */}
                            {showPlants ? <ExploreDisplayPlants /> : <ExploreDisplayPests />}
                        </View>
                    </ScrollView>
                </View>

                {/* Footer */}
                <Footer />
            </View>
        );
    };
}
