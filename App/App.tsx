/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  ScrollView,
  Text,
  View,
} from 'react-native';
import {LineChart} from 'react-native-charts-wrapper';
import {NavigationContainer,
  useNavigation,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Files made by us
import {styles} from './other/Styles.tsx';
import {Footer} from './other/Footer.tsx';

// Navigation screens
const HomeScreen = () => {
  return (
    // Full view
    <View style={{height: '100%'}}>

    {/* Scroll view */}
    <View style={styles.scrollArea}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <Text style={styles.baseText}>
          {'Home'}
        </Text>
      </ScrollView>
    </View>

    {/* Footer */}
    <Footer></Footer>

  </View>
  );
};

const StatsScreen = () => {
  return (
    // Full view
    <View style={{height: '100%'}}>

    {/* Scroll view */}
    <View style={styles.scrollArea}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <Text style={styles.baseText}>
          {'Stats'}
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

const AchievementsScreen = () => {
  return (
    // Full view
    <View style={{height: '100%'}}>

    {/* Scroll view */}
    <View style={styles.scrollArea}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <Text style={styles.baseText}>
          {'Achievements'}
        </Text>
      </ScrollView>
    </View>

    {/* Footer */}
    <Footer></Footer>

  </View>
  );
};

const ProfileScreen = () => {
  return (
    // Full view
    <View style={{height: '100%'}}>

    {/* Scroll view */}
    <View style={styles.scrollArea}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <Text style={styles.baseText}>
          {'Profile'}
        </Text>
      </ScrollView>
    </View>

    {/* Footer */}
    <Footer></Footer>

  </View>
  );
};

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
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Achievements"
            component={AchievementsScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Stats"
            component={StatsScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
    </NavigationContainer>
    );
  }
}

export default App;
