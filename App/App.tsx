/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Button,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {LineChart} from 'react-native-charts-wrapper';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Images
const homeIcon = './images/homeIcon.png';
const zoomIcon = './images/zoomIcon.png';
const trophyIcon = './images/trophyIcon.png';
const profileIcon = './images/profileIcon.png';

// Navigation screens
const HomeScreen = ({navigation}) => {
  return (
    // Full view
    <View style={{height: '100%'}}>

    {/* Scroll view */}
    <View style={styles.scrollArea}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <Text style={styles.baseText}>
          {'HOME'}
        </Text>
      </ScrollView>
    </View>

    {/* Footer */}
    <View style={styles.footer}>

      {/* Footer Icons */}
      <Pressable>
        <Image
        style={styles.footerIcon}
        source={require(homeIcon)}
        />
      </Pressable>
      <Pressable>
        <Image
        style={styles.footerIcon}
        source={require(zoomIcon)}
        />
      </Pressable>
      <Pressable>
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
  </View>
  );
};

const ProfileScreen = ({navigation}) => {
  return (
    // Full view
    <View style={{height: '100%'}}>

    {/* Scroll view */}
    <View style={styles.scrollArea}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <Text style={styles.baseText}>
          {'PROFILE'}
        </Text>
      </ScrollView>
    </View>

    {/* Footer */}
    <View style={styles.footer}>

      {/* Footer Icons */}
      <Pressable onPress={() => navigation.navigate("Home", {screen: "HomeScreen"})}>
        <Image
        style={styles.footerIcon}
        source={require(homeIcon)}
        />
      </Pressable>
      <Pressable>
        <Image
        style={styles.footerIcon}
        source={require(zoomIcon)}
        />
      </Pressable>
      <Pressable>
        <Image
        style={styles.footerIcon}
        source={require(trophyIcon)}
        />
      </Pressable>
      <Pressable>
        <Image
        style={styles.footerIcon}
        source={require(profileIcon)}
        />
      </Pressable>
    </View>
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
            options={{title: 'Welcome'}}
          />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
    </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
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
  },
});

export default App;
