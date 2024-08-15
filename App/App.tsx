/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  processColor,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {LineChart} from 'react-native-charts-wrapper';

//function App(): React.JSX.Element {
class App extends React.Component {

  render() {
    return (
      /* Full view */
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
          <Text style={styles.baseText}>Footer</Text>
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
  },
});

export default App;
