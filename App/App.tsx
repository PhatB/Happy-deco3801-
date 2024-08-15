/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function App(): React.JSX.Element {

  return (
    /* Full view */
    <View style={{height: '100%'}}>
      {/* Scroll view */}
      <View style={styles.scrollArea}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">
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

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Poppins',
    fontSize: 60,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  scrollArea: {
    height: '90%',
    backgroundColor: 'beige',
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
