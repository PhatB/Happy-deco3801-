import {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Poppins',
    fontSize: 15,
  },
  pageTitle: {
    fontFamily: 'Poppins',
    color: '#1B5D42',
    fontSize: 35,
    textAlign: 'center',
    paddingTop: 20,
  },
  heading: {
    fontFamily: 'Poppins',
    color: '#143728',
    fontSize: 30,
    marginBottom: 10,
  },
  line: {
    marginVertical: 20,
    width: '100%',
  },
  main: {
    fontFamily: 'Poppins',
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
  },
  scrollArea: {
    height: '90%',
    backgroundColor: '#F5F9F3',
  },
  greenButton: {
    backgroundColor: '#218F4A',
    flexDirection: 'row',
    color: 'white',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    padding: 8,

    borderRadius: 10,

  },
  smallGreenButton: {
    width: '42.5%',
    marginHorizontal: '2.5%',
  },
  smallWhiteButton: {
    width: '42.5%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#B3B3B3',
    marginHorizontal: '2.5%',
    color: '#B3B3B3',
  },
  backArrow: {
    width: 30,
    height: 30,
    transform: [{rotate: '180deg'}],
    marginTop: -35,
    marginLeft: '5%',
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
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  footerIcon: {
    height: 50,
    width: 50,
    // Space out icons
    margin: 22,
  },
  display: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 20,
  },
  plantList: {

    height:'100%',
  },
});