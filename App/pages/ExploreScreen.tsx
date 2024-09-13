import React from 'react';
import {ScrollView, View, Text, Pressable} from 'react-native';

import {styles} from '../other/Styles.tsx';
import {Footer} from '../other/Footer.tsx';
import {Search} from '../other/Search.tsx';

import plants from "../data/PlantTypes.json";
import pests from "../data/PestTypes.json";
import {PrettyList} from "../other/PrettyList.tsx";

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
                            {showPlants ?
                                <Pressable
                                style={[styles.greenButton,
                                    styles.smallGreenButton]}
                                onPress={() => this.setState({ showPlants: true })}
                                >
                                    <Text style={styles.greenButton}>{'Plants'}</Text>
                                </Pressable>
                                :
                                <Pressable
                                style={[styles.greenButton,
                                    styles.smallWhiteButton]}
                                onPress={() => this.setState({ showPlants: true })}
                                >
                                    <Text
                                    style={[styles.greenButton,
                                        {backgroundColor: 'white',
                                        color: '#B3B3B3',
                                        }]}
                                    >
                                        {'Plants'}
                                    </Text>
                                </Pressable>
                            }
                            {/* Pests */}
                            {showPlants ?
                                <Pressable
                                style={[styles.greenButton,
                                styles.smallWhiteButton]}
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
                                :
                                <Pressable
                                style={[styles.greenButton,
                                    styles.smallGreenButton]}
                                    onPress={() => this.setState({ showPlants: false })}
                                    >
                                        <Text style={styles.greenButton}>{'Pests'}</Text>
                                    </Pressable>
                                }
                        </View>
                        {/* Main box */}
                        <View style={styles.main}>
                            {/* Display plants or pests */}
                            {
                                showPlants
                                ? <PrettyList  data={plants}
                                               primaryField = {"name"}
                                               secondaryField={"sci_name"}
                                               targetPage={"MoreInfo"}
                                               targetConstParams={{"isPlant":showPlants}}
                                               targetItemParams={{}}/>
                                : <PrettyList  data={pests}
                                               primaryField = {"name"}
                                               secondaryField={"sci_name"}
                                               targetPage={"MoreInfo"}
                                               targetConstParams={{"isPlant":showPlants}}
                                               targetItemParams={{}}/>
                            }
                        </View>
                    </ScrollView>
                </View>

                {/* Footer */}
                <Footer />
            </View>
        );
    };
}
