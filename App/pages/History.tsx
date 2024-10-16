import React, { useEffect, useState } from "react"
import { Image, ImageSourcePropType, Pressable, ScrollView, Text, View } from "react-native"
import { BackButton } from "../other/MiscComponents/BackButton"
import { styles } from "../other/Styles"
import { Footer } from "../other/Footer"
import { Line, SmallLine } from "../other/MiscComponents/Line"
import { EnvironmentRecord, getEnvironmentRecords } from "../api"
import { useRoute } from "@react-navigation/native"
import { Loading } from "../other/MiscComponents/Loading"

/**
 * Item in the list of environment measurements in an EnvironmentRecordPanel
 */
const EnvironmentRecordPanelItem = (props: { label: string, value: string, icon: ImageSourcePropType }) => {
    return (
        <View style={[styles.historyPanelList, { display: "flex", flexDirection: "row", alignContent: "center" }]}>
            <Image style={{ width: 30, height: 30 }} source={props.icon}></Image>
            <Text style={[styles.historyPanelListText, { flex: 8, marginVertical: "auto", marginLeft: 10 }]}>{props.label}</Text>
            <Text style={[styles.historyPercent]}>{props.value}</Text>
        </View>
    )
}

/**
 * Panel showing the data from a single environment record.
 */
const EnvironmentRecordPanel = (props: { time: string, moisture: number, temperature: number, sunlight: number }) => {
    return (
        <View style={[styles.historyPanel, { flexDirection: "column" }]}>
            <Text style={[styles.historyPanelHeading, { paddingHorizontal: 15 }]}>{props.time}</Text>
            <SmallLine />
            <View style={[{ flexDirection: "column", marginVertical: 5 }]}>
                <EnvironmentRecordPanelItem label="Moisture" value={props.moisture * 10 + "%"} icon={require("../images/water_green.png")} />
                <EnvironmentRecordPanelItem label="Temperature" value={props.temperature + "°C"} icon={require("../images/temp_green.png")} />
                <EnvironmentRecordPanelItem label="Sunlight" value={props.sunlight * 10 + "%"} icon={require("../images/sun_green.png")} />
            </View>
        </View>
    )
}

/**
 * History page - gives environment record history for a plant.
 */
export const History = () => {
    // Selected day of the week.
    const [selectedDay, setSelectedDay] = useState(0);
    // Valid environment records for the current day of the week.
    const [records, setRecords] = useState<EnvironmentRecord[]>([]);
    // Are we waiting for the API?
    const [isLoading, setIsLoading] = useState(true);


    const route: any = useRoute();
    const { plant } = route.params;

    const weekDays: string[] = ["S", "M", "T", "W", "T", "F", "S"];

    /** 
     * Gets the dates of every day in the current week.
     * @returns The dates
     */
    const getDates = () => {
        let currentDate = new Date();
        let dates = [];
        for (let i = 0; i < 7; i++) {
            // How many days away is this day,
            // get the date with that offset.
            let diff = i - currentDate.getDay();
            let newDate = new Date();
            newDate.setDate(currentDate.getDate() + diff);
            dates[i] = newDate.getDate();
        }
        return dates;
    }

    /**
     * Changes the current selected day of the week and
     * updates the validRecords list accordingly.
     * @param day The day of the week to select.
     */
    const selectDay = async (day: number) => {
        setSelectedDay(day);
        let currentDate = new Date();
        let currentDay = currentDate.getDay();
        let diff = currentDay - day;
        currentDate.setDate(currentDate.getDate() - diff);
        updateRecordsByDate(currentDate);

    }

    /**
     * Gets the environment records for this plant's device
     * from the database, and sets validRecords to include
     * the ones that fall on the given date.
     * @param date The date to get records for.
     */
    const updateRecordsByDate = async (date: Date) => {
        setIsLoading(true);
        const records = await getEnvironmentRecords(plant.device)
        const validRecords = records.filter((record: EnvironmentRecord) => {
            const time = new Date(record.time);
            if (time.getDate() === date.getDate()
                && time.getMonth() === date.getMonth()
                && time.getFullYear() === date.getFullYear()) return true;
            return false;
        })
        setRecords(validRecords);
        setIsLoading(false);
    }


    useEffect(() => {
        selectDay(new Date().getDay()).then()
    }, [])
    return (
        <View style={{ height: "100%" }}>
            <View style={styles.scrollArea}>
                <ScrollView style={[{ flexDirection: "column" }]}
                    contentInsetAdjustmentBehavior="automatic">
                    <Text style={[styles.pageTitle]}>History</Text>
                    <BackButton />
                    {/* Calendar at the top of the history page */}
                    <View style={[styles.historyCalendar, { marginTop: 30 }]}>
                        {/* Days of the week */}
                        <View style={[{ flexDirection: "row", alignItems: "center", justifyContent: "center" }]}>
                            {weekDays.map((day, idx) => (
                                <Text key={idx} style={[styles.weekDay, { flex: 1, height: 50, }]}>{day}</Text>
                            ))}
                        </View>
                        {/* Dates for this week */}
                        <View style={[{ flexDirection: "row", alignItems: "center" }]}>
                            {/* <Text>{selectedDay == Date.prototype.getDay() ? "same day" : "different day"}</Text> */}
                            {getDates().map((day, idx) => (
                                // Different styling for the current day
                                idx === selectedDay ?
                                    (selectedDay == new Date().getDay() ?
                                        // SELECTED + CURRENT
                                        <Pressable style={[{...styles.weekDaySelected, ...styles.currentDay}]} key={idx} onPress={() => { selectDay(idx) }}>
                                            <Text key={idx} style={[styles.weekDaySelectedText, {color: 'black'}]}>{day}</Text>
                                        </Pressable> :
                                        // SELECTED + NOT CURRENT
                                        <Pressable style={[styles.weekDaySelected]} key={idx} onPress={() => { selectDay(idx) }}>
                                            <Text key={idx} style={[styles.weekDaySelectedText]}>{day}</Text>
                                        </Pressable>
                                    ) : (idx == new Date().getDay() ?
                                        // UNSELECTED + CURRENT
                                        <Pressable style={[{...styles.weekDay, ...styles.currentDay}]} key={idx} onPress={() => { selectDay(idx) }}>
                                            <Text key={idx} style={[styles.weekDayText, {color: 'black'}]}>{day}</Text>
                                        </Pressable> :
                                        // UNSELECTED + NOT CURRENT
                                        <Pressable style={[styles.weekDay]} key={idx} onPress={() => { selectDay(idx) }}>
                                            <Text key={idx} style={[styles.weekDayText]}>{day}</Text>
                                        </Pressable>
                                    )
                            ))}
                        </View>
                    </View>
                    {/* Display the panels for the environment records. */}
                    {
                        isLoading ? <Loading /> : <View>
                            {
                                records.map((record, idx) => {
                                    //Convert the time to AM or PM
                                    const time = new Date(record.time)

                                    const isPM = time.getHours() > 12
                                    let hours = isPM ? time.getHours() - 12 : time.getHours()
                                    if (time.getHours() == 0) hours = 12;
                                    let mins = time.getMinutes() < 10 ? "0" + time.getMinutes() : "" + time.getMinutes();
                                    const amPM = isPM ? "pm" : "am"
                                    const timeString = hours + ":" + mins + amPM
                                    return (
                                        <EnvironmentRecordPanel key={idx} time={timeString} moisture={record.moisture} temperature={record.temperature} sunlight={record.sunlight}></EnvironmentRecordPanel>
                                    )
                                })
                            }
                        </View>
                    }
                </ScrollView>
            </View>
            <Footer />
        </View>
    )
}