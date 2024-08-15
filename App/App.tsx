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
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {LineChart} from 'react-native-charts-wrapper';

// Images
const homeIcon = './images/homeIcon.png';
const zoomIcon = './images/zoomIcon.png';
const trophyIcon = './images/trophyIcon.png';
const profileIcon = './images/profileIcon.png';

//function App(): React.JSX.Element {
class App extends React.Component {

  render() {
    return (
      // Full view
      <View style={{height: '100%'}}>

        {/* Scroll view */}
        <View style={styles.scrollArea}>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic">
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
            <Text style={styles.baseText}>
              {'A\nB\nC\nD\nE\nF\nG\nH\nI\nJ\nK\nL\nM\nN'}
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
          <Pressable>
            <Image
            style={styles.footerIcon}
            source={require(profileIcon)}
            />
          </Pressable>

        </View>
      </View>
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
