import {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
  },
  pageTitle: {
    fontFamily: 'Poppins-Regular',
    color: '#1B5D42',
    fontSize: 35,
    textAlign: 'center',
    paddingTop: 20,
  },
  smallHeading: {
    fontFamily: 'Poppins-Regular',
    color: '#143728',
    fontSize: 20,
  },
  heading: {
    fontFamily: 'Poppins-Regular',
    color: '#143728',
    fontSize: 30,
    marginBottom: 10,
  },
  line: {
    marginVertical: 20,
    width: '100%',
  },
  main: {
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignSelf: 'center',
    width: '90%',
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  search: {
    flexDirection: 'row',
    fontFamily: 'Poppins-Regular',
  },
  scrollArea: {
    height: '90%',
    backgroundColor: '#F5F9F3',
    fontFamily: 'Poppins-Regular',
  },
  greenButton: {
    backgroundColor: '#218F4A',
    flexDirection: 'row',
    color: 'white',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    padding: 8,
    borderRadius: 10,
    fontFamily: 'Poppins-Regular',

  },
  smallGreenButton: {
    width: '42.5%',
    marginHorizontal: '2.5%',
    fontFamily: 'Poppins-Regular',
  },
  smallWhiteButton: {
    width: '42.5%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#B3B3B3',
    marginHorizontal: '2.5%',
    color: '#B3B3B3',
    fontFamily: 'Poppins-Regular',
  },
  backArrow: {
    width: 30,
    height: 30,
    transform: [{rotate: '180deg'}],
    marginTop: -35,
    marginLeft: '5%',
    fontFamily: 'Poppins-Regular',
  },
  chart: {
    alignSelf: 'center',
    width: '80%',
    height: 400,
    fontFamily: 'Poppins-Regular',
  },
  footer: {
    position: 'absolute',
    height: '10%',
    backgroundColor: 'white',
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    fontFamily: 'Poppins-Regular',
  },
  footerIcon: {
    height: 50,
    width: 50,
    // Space out icons
    margin: 22,
    fontFamily: 'Poppins-Regular',
  },
  display: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 20,
    fontFamily: 'Poppins-Regular',
  },
  app: {
    fontFamily: 'Poppins-Regular',
  },
  plantList: {
    fontFamily: 'Poppins-Regular',
    height:'100%',
  },
});