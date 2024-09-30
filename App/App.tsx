/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer, NavigationProp} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Files made by us
import {HomeScreen} from './pages/HomeScreen.tsx';
import {AddPlantScreen} from './pages/AddPlantScreen.tsx';
import {ExploreScreen} from './pages/ExploreScreen.tsx';
import {AchievementsScreen} from './pages/AchievementsScreen.tsx';
import {SettingsScreen} from './pages/SettingsScreen.tsx';
import {MoreInfoScreen} from './pages/MoreInfoScreen.tsx';
import {styles} from "./other/Styles.tsx";
import {Text, View} from "react-native";

const Stack = createNativeStackNavigator<RootStackParamList>();

// App
class App extends React.Component {
    render() {
        return (

                <NavigationContainer>
                    <Stack.Navigator initialRouteName="Home">
                        <Stack.Screen
                            name="Home"
                            component={HomeScreen}
                            options={{headerShown: false}}
                        />
                        <Stack.Screen
                            name="Add"
                            component={AddPlantScreen}
                            options={{headerShown: false}}
                        />
                        <Stack.Screen
                            name="Achievements"
                            component={AchievementsScreen}
                            options={{headerShown: false}}
                        />
                        <Stack.Screen
                            name="Settings"
                            component={SettingsScreen}
                            options={{headerShown: false}}
                        />
                        <Stack.Screen
                            name="Explore"
                            component={ExploreScreen}
                            options={{headerShown: false}}
                        />
                        <Stack.Screen
                            name="MoreInfo"
                            component={MoreInfoScreen}
                            options={{headerShown: false}}
                        />
                    </Stack.Navigator>
                </NavigationContainer>

        );
    }
}

export default App;
