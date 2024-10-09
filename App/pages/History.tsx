import React, { useEffect, useState } from "react"
import { Image, ImageSourcePropType, Pressable, ScrollView, Text, View } from "react-native"
import { BackButton } from "../other/MiscComponents/BackButton"
import { styles } from "../other/Styles"
import { Footer } from "../other/Footer"
import { Line, SmallLine } from "../other/MiscComponents/Line"
import { EnvironmentRecord, getEnvironmentRecords } from "../api"
import { useRoute } from "@react-navigation/native"

<<<<<<< Updated upstream
export const HistoryPanel = (props: {time: string, moisture: number, temperature: number, sunlight: number}) => {
  
=======
/**
 * Item in the list of environment measurements in an EnvironmentRecordPanel
 */
const EnvironmentRecordPanelItem = (props: {label: string, value: string, icon: ImageSourcePropType}) => {
    return (
        <View style={[styles.historyPanelList,{display: "flex", flexDirection: "row", alignContent:"center"}]}>
            <Image style={{width:30, height:30}}source={props.icon}></Image>
            <Text style={[styles.historyPanelListText, {flex:8, marginVertical: "auto", marginLeft:10}]}>{props.label}</Text>
            <Text style={[styles.historyPercent]}>{props.value}</Text>
        </View>
    )
}

/**
 * Panel showing the data from a single environment record.
 */
const EnvironmentRecordPanel = (props: {time: string, moisture: number, temperature: number, sunlight: number}) => {
>>>>>>> Stashed changes
    return (
    <View style={[styles.historyPanel, {flexDirection: "column"}]}>
        <Text style={[styles.historyPanelHeading, {paddingHorizontal: 15}]}>{props.time}</Text>
        <SmallLine/>
        <View style={[{flexDirection: "column", marginVertical:5}]}>
<<<<<<< Updated upstream
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
=======
            <EnvironmentRecordPanelItem label="Moisture" value={props.moisture + "%"} icon = {require("../images/water_green.png")}/>
            <EnvironmentRecordPanelItem label="Temperature" value={props.temperature + "°C"} icon = {require("../images/temp_green.png")}/>
            <EnvironmentRecordPanelItem label="Sunlight" value={props.sunlight + "%"} icon = {require("../images/sun_green.png")}/>  
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
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
=======
            </View>
            {/* Display the panels for the environment records. */}
            <ScrollView style={[{flexDirection: "column"}]}>
                {
                    records.map((record, idx) => {
                        //Convert the time to AM or PM
                        const time = new Date(record.time)
                        const isPM = time.getHours() > 12
                        let hours = isPM ? time.getHours() - 12 : time.getHours()
                        if (time.getHours() == 0) hours = 12;
                        let mins = time.getMinutes() < 10 ? "0" + time.getMinutes() : "" + time.getMinutes() ;
                        const amPM = isPM ? "pm" : "am"
                        const timeString = hours + ":" + mins + amPM
                        return (
                            <EnvironmentRecordPanel key={idx} time={timeString} moisture={record.moisture} temperature={record.temperature} sunlight={record.sunlight}></EnvironmentRecordPanel>
                        )
                    })
                }
>>>>>>> Stashed changes
                    
                 
                </ScrollView>
                
             </View>
             <Footer />
        </View>
    )
}