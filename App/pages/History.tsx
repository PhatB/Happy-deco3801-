import React, { useEffect, useState } from "react"
import { Pressable, ScrollView, Text, View } from "react-native"
import { BackButton } from "../other/MiscComponents/BackButton"
import { styles } from "../other/Styles"
import { Footer } from "../other/Footer"
import { Line, SmallLine } from "../other/MiscComponents/Line"
import { EnvironmentRecord, getEnvironmentRecords } from "../api"
import { useRoute } from "@react-navigation/native"

export const HistoryPanel = (props: {time: string, moisture: number, temperature: number, sunlight: number}) => {
  
    return (
    <View style={[styles.historyPanel, {flexDirection: "column"}]}>
        <Text style={[styles.historyPanelHeading, {paddingHorizontal: 15}]}>{props.time}</Text>
        <SmallLine/>
        <View style={[{flexDirection: "column", marginVertical:5}]}>
            <View style={[styles.historyPanelList,{flexDirection: "row"}]}>
                <Text style={[styles.historyPanelListText, {flex:1}]}>Moisture</Text>
                <Text style={[styles.historyPercent]}>{props.moisture*10}%</Text>
            </View>
            <View style={[styles.historyPanelList,{flexDirection: "row"}]}>
                <Text style={[styles.historyPanelListText, {flex:1}]}>Temperature</Text>
                <Text style={[styles.historyPercent]}>{props.temperature}°C</Text>
            </View>
            <View style={[styles.historyPanelList,{flexDirection: "row"}]}>
                <Text style={[styles.historyPanelListText, {flex:1}]}>Sunlight</Text>
                <Text style={[styles.historyPercent]}>{props.sunlight*10}%</Text>
            </View>
        </View>
    </View>
    )
}

export const History = () => {
    const weekDays: string[] = ["S", "M", "T", "W", "T", "F", "S"]
    const [selectedDay, setSelectedDay] = useState(0);
    const [records, setRecords] = useState<EnvironmentRecord[]>([]);
    const route: any = useRoute()
    const {plant} = route.params;
    const dates = () => {
        let currentDate = new Date()
        let dates = []
        for (let i = 0; i < 7; i++) {
            let diff = i - currentDate.getDay()
            let newDate = new Date()
            newDate.setDate(currentDate.getDate() + diff)
            dates[i] = newDate.getDate();
        }
        return dates;
    }

    const updateDay = async (day: number) => {
        setSelectedDay(day);
        let currentDate = new Date()
        let currentDay = currentDate.getDay()
        let diff = currentDay - day
        currentDate.setDate(currentDate.getDate() + diff);
        const records = await getEnvironmentRecords(plant.device)
        const validRecords = records.filter((record: EnvironmentRecord) => {
            const time = new Date(record.time);
            if (time.getDate() === currentDate.getDate() 
                && time.getMonth() === currentDate.getMonth()
                && time.getFullYear() === currentDate.getFullYear()) return true;
                return false;
        })
        setRecords(validRecords);
        console.log(validRecords)
    }

    const initHistory = async ()  => {
       await updateDay(new Date().getDay())
    }

    useEffect(() => {
        initHistory().then()
    }, [])
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
                                idx === selectedDay
                                ? <Pressable style={[styles.weekDaySelected]} onPress={() => {updateDay(idx)}}>
                                    <Text key={idx} style={[styles.weekDaySelectedText]}>{day}</Text>
                                    </Pressable>
                                : <Pressable style={[styles.weekDay]} onPress={() => {updateDay(idx)}}>
                                <Text key={idx} style={[styles.weekDayText]}>{day}</Text>
                                </Pressable>
                                
                            ))
                        }
                    </View>
                   
                </View>
                <ScrollView style={[{flexDirection: "column"}]}>
                    {
                        records.map((record, idx) => {
                            const time = new Date(record.time)
                            const isPM = time.getHours() > 12
                            let hours = isPM ? time.getHours() - 12 : time.getHours()
                            if (time.getHours() == 0) hours = 12;
                            const amPM = isPM ? "pm" : "am"
                            const timeString = hours + ":" + time.getMinutes() + amPM
                            return (
                                <HistoryPanel key={idx} time={timeString} moisture={record.moisture} temperature={record.temperature} sunlight={record.sunlight}></HistoryPanel>
                            )
                        })
                    }
                    
                 
                </ScrollView>
                
             </View>
             <Footer />
        </View>
    )
}