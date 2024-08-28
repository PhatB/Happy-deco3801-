import {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Poppins',
    fontSize: 60,
  },
  pageTitle: {
    fontFamily: 'Poppins',
    color: '143728',
    fontSize: 35,
    textAlign: 'center',
    paddingTop: 20,
  },
  search: {
    fontFamily: 'Poppins',
    fontSize: 30,
  },
  scrollArea: {
    height: '90%',
    backgroundColor: 'F5F9F3',
  },
  chart: {
    alignSelf: 'center',
    width: '80%',
    height: 400,
  },
  footer: {
    position: 'absolute',
    height: '10%',
    backgroundColor: 'white',
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
});