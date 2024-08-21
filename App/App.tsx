/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {LineChart} from 'react-native-charts-wrapper';
import {NavigationContainer,
  useNavigation,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {styles} from './other/Styles.tsx';

// Images
const homeIcon = './images/homeIcon.png';
const zoomIcon = './images/zoomIcon.png';
const trophyIcon = './images/trophyIcon.png';
const profileIcon = './images/profileIcon.png';
const leafIcon = './images/leafIcon.png';

const Footer = ({}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.footer}>
      {/* Footer Icons */}
      <Pressable onPress={() => navigation.navigate("Home", {screen: "HomeScreen"})}>
        <Image
        style={styles.footerIcon}
        source={require(homeIcon)}
        />
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Stats", {screen: "StatsScreen"})}>
        <Image
        style={styles.footerIcon}
        source={require(zoomIcon)}
        />
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Achievements", {screen: "AchievementsScreen"})}>
        <Image
        style={styles.footerIcon}
        source={require(trophyIcon)}
        />
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Profile", {screen: "ProfileScreen"})}>
        <Image
        style={styles.footerIcon}
        source={require(profileIcon)}
        />
      </Pressable>
    </View>
  );
}

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

/*const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Poppins',
    fontSize: 60,
  },
  scrollArea: {
    height: '90%',
    backgroundColor: 'beige',
  },
  chart: {
    alignSelf: 'center',
    width: '80%',
    height: 400,
  },
  footer: {
    position: 'absolute',
    height: '10%',
    backgroundColor: 'tan',
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  footerIcon: {
    height: 50,
    width: 50,
    // Space out icons
    margin: 15,
  },
});*/

export default App;
