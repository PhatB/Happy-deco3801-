/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Files made by us
import {HomeScreen} from './pages/HomeScreen.tsx';
import {SearchScreen} from './pages/SearchScreen.tsx';
import {AchievementsScreen} from './pages/AchievementsScreen.tsx';
import {ProfileScreen} from './pages/ProfileScreen.tsx';

// Stack
const Stack = createNativeStackNavigator();

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
                        name="Achievements"
                        component={AchievementsScreen}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="Profile"
                        component={ProfileScreen}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="Search"
                        component={SearchScreen}
                        options={{headerShown: false}}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default App;
