import React from "react"
import { Text, View } from "react-native"
import { BackButton } from "../other/MiscComponents/BackButton"
import { styles } from "../other/Styles"



export const History = () => {
    const weekDays: string[] = ["S", "M", "T", "W", "T", "F", "S"]

    const dates = () => {
        let currentDate = new Date()
        let day = currentDate.getDay();
        let dates = []
        for (let i = 0; i < 7; i++) {
            let diff = i - day
            let newDate = new Date()
            newDate.setDate(currentDate.getDate() + diff)
            dates[i] = newDate.getDate();
        }
        return dates;
    }
    return (
        <View style={{height:"100%"}}>
             <View style={[styles.scrollArea]}>
                <Text style={[styles.pageTitle]}>History</Text>
                <BackButton/>
                <View style={[styles.historyCalendar, {marginTop:30}]}>
                    <View style={[{flexDirection:"row", alignItems:"center", justifyContent:"center"}]}>
                        {
                            weekDays.map((day, idx) => (
                                <Text key={idx} style={[styles.weekDay, {flex:1,  height:50,}]}>{day}</Text>
                            ))
                        }
                       

                    </View>
                    <View style={[{flexDirection:"row", alignItems:"center"}]}>
                    {
                            dates().map((day, idx) => (
                                day === new Date().getDate() ? 
                                <Text key={idx} style={[styles.weekDaySelected]}>{day}</Text>
                                :<Text key={idx} style={[styles.weekDay]}>{day}</Text>
                                
                            ))
                        }
                       

                    </View>
                   
                </View>
             </View>
        </View>
    )
}