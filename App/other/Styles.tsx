import {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
  },
  pageTitle: {
    fontFamily: 'Poppins-Medium',
    color: '#262626',
    fontSize: 28,
    textAlign: 'center',
    paddingTop: 20,
  },
  notificationBell: {
    transform: [{scale:0.4}, {translateY: -20}],
    position: "absolute",
    alignSelf: "flex-end"
  },
  smallHeading: {
    fontFamily: 'Poppins-Medium',
    color: '#143728',
    fontSize: 20,
  },
  smallBold: {
    fontFamily: 'Poppins-SemiBold',
    color: '#143728',
    fontSize: 20,
    fontWeight: "medium"
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  error: {
    fontFamily: 'Poppins-SemiBold',
    color: '#D83400',
    fontSize: 15,
  },
  historyPanelHeading: {
    fontFamily: 'Poppins-Medium',
    color: '#143728',
    fontSize: 25,
    marginBottom: 0,
  },
  heading: {
    fontFamily: 'Poppins-Regular',
    color: '#143728',
    fontSize: 30,
    marginBottom: 10,
  },

  historyPanelList: {
    
    paddingVertical: 8,
    paddingHorizontal: 10,
    alignItems: "center"
  },

  historyPanelListText: {
    fontFamily: 'Poppins-Medium',
    color: '#143728',
    fontSize: 15,
  },
  historyPercent: {
    fontFamily: 'Poppins-Bold',
    color: '#143728',
    fontSize: 16,
  
  },
  line: {
    marginVertical: 20,
    width: '100%',
  },
  smallLine: {
    marginVertical: 2,
    width: '100%',
  },

  historyPanel: {
    backgroundColor: 'white',
    borderRadius: 10,
    alignSelf: 'center',
    width: '90%',
    marginTop: 30,
    padding:10
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
  textBox: {
    fontSize: 20,
    color: 'black',
    width: '100%',
    fontFamily: 'Poppins-Regular',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignSelf: 'center',
  },
  scrollArea: {
    height: '90%',
    backgroundColor: '#F5F9F3',
    fontFamily: 'Poppins-Regular',
  },

  historyCalendar : {
    backgroundColor: '#218F4A',
    flexDirection: 'column',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    fontFamily: 'Poppins-Regular',
    marginHorizontal: 20,
    padding: 8,
  },
  greenButton: {
    backgroundColor: '#218F4A',
    flexDirection: 'row',
    color: 'white',
    fontSize: 17,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: "center",
    marginHorizontal: 10,
    padding: 6,
    borderRadius: 5,
    fontFamily: 'Poppins-Medium',

  },

  weekDay: {
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    color: "white",
    textAlign: "center",
    flex:1,

    height:50,
    paddingVertical: 10,
  },
  weekDayText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    textAlign: "center",
    color:"white",
  },
  weekDaySelectedText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    textAlign: "center",
    color:"black",
  },
  weekDaySelected: {
    
   
    backgroundColor:"#F2F2F2",

    paddingVertical: 10,
    flex:1,
    height:50,
    borderRadius:2000
  },

  smallGreenButton: {
    width: '42.5%',
    marginHorizontal: '2.5%',
    fontFamily: 'Poppins-Regular',
    textAlign: "center"
  },
  smallWhiteButton: {
    width: '42.5%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#D9D9D9',
    marginHorizontal: '2.5%',
    color: '#D9D9D9',
    fontFamily: 'Poppins-Regular',
  },
  achievementBox: {
    textAlign: 'center',
    color: 'white',
  },
  smallInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    borderRadius: 5,
    marginRight: 20,
    paddingHorizontal: '3%',
    paddingVertical: 2,
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