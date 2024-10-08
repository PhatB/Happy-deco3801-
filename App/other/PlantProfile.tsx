import React, { useEffect, useState } from "react"
import { Image, Pressable, Switch, Text, View } from "react-native"
import { AttentionBadge, HealthyBadge, PlantBadges, WaterBadge } from "./MiscComponents/Badges"
import { useNavigation, useRoute } from "@react-navigation/native"
import { Line } from "./MiscComponents/Line"
import { styles } from "./Styles"
import { EnvironmentRecord, mostRecentEnvironmentRecord, PlantType, UserPlant } from "../api"
import { CircularProgress } from "react-native-circular-progress"
import { InfoCircle } from "./MiscComponents/InfoCircle"
interface PlantProfileProps {
    info: UserPlant
}



export const PlantProfile = (props: PlantProfileProps) => {
    const navigation = useNavigation();
    let {info} = props;
    const [needsAttention, setNeedsAttention] = useState(false);
    const [mostRecent, setMostRecent] = useState<EnvironmentRecord | null>(null);
    const attentionCheck = (record: EnvironmentRecord) => {
        const plantType: PlantType = info.plantType;
        if (!inBounds(record.moisture, plantType.moistureMin, plantType.moistureMax)) return true;
        if (!inBounds(record.sunlight, plantType.sunlightMin, plantType.sunlightMax)) return true;
        if (!inBounds(record.temperature, plantType.temperatureMin, plantType.temperatureMax)) return true;
        return false;
    }
    const setAttention = async () => {
        setMostRecent(await mostRecentEnvironmentRecord(info.device));
        if (mostRecent === null) {
            setNeedsAttention(true);
            return;
        }
        console.log(mostRecent)
       setNeedsAttention(attentionCheck(mostRecent))
    }
    const inBounds = (value: number, min: number, max: number) => {
        return value >= min && value <= max
    }

    const WhichAttentionBadge = () => {
        if (needsAttention) {
            return <AttentionBadge/>
        } else {
            return <HealthyBadge />
        }
    }
    
    
    
    

    const CurrentStatusBody = () => {
        const plantType: PlantType = info.plantType;
        if (mostRecent === null) {
            return (
                <Text>No environmental records found... Ensure your device has been turned on.</Text>
            )
        } else {
            return (
                <>  
                    <View style={{flexDirection: "row", marginTop: 25}}>
                    <InfoCircle 
                        value={mostRecent.moisture*10} 
                        value_max = {plantType.moistureMax*10} 
                        value_min={plantType.moistureMin*10} 
                        suffix="%"
                        label="Moisture"
                        />
                    <InfoCircle 
                        value={mostRecent.sunlight*10} 
                        value_max = {plantType.sunlightMax*10} 
                        value_min={plantType.sunlightMin*10} 
                        suffix="%"
                        label="Sunlight"
                        />
                    <InfoCircle 
                        value={mostRecent.temperature} 
                        value_max = {plantType.temperatureMax} 
                        value_min={plantType.temperatureMin} 
                        suffix="°C"
                        label="Temperature"
                    />
                    </View>
                    
                    <Pressable
                    onPress={() => navigation.navigate("History" as never)}
                    style={[styles.greenButton, {marginHorizontal: 0, marginTop: 30, width: '100%', height: 60}]}>
                        <Text style={styles.greenButton}>View Plant History</Text>
                    </Pressable> 
                </>
            )
        }
    }

    useEffect(() => {
        setAttention().then()
    }, [])

    return (
        <View>
            <Line></Line>
            <View style={{flexDirection: "row", alignContent: "center", alignItems: "center"}}>
                <Text style={[styles.smallBold, {flex:1}]}>Current Status</Text>
                <WhichAttentionBadge />
            </View>
            <CurrentStatusBody/>
            <Line></Line>
            <View style={{flexDirection: "row", alignItems: "center"}}>
                <Text style={[styles.smallBold, {flex:1}]}>Watering</Text>
                <WaterBadge info={info.plantType}/>
            </View>
            <View style={{flexDirection: "row", alignItems: "center", marginTop:15}}>
                <Text style={[styles.smallHeading, {flex:1, fontSize:15,}]}>Reminders</Text>
                <Switch thumbColor="#FFFFFF" trackColor={{true: "#D1EDCE", false:"#D1EDCE"}} style={{marginRight:10}}/>
            </View>
            <Line></Line>
            <Text style={[styles.smallBold]}>Pest Management</Text>
            <Pressable
                    style={[styles.greenButton, {marginHorizontal: 0, marginTop: 30, width: '100%', height: 60}]}>
                        <Text style={styles.greenButton}>I've detected a pest!</Text>
                    </Pressable> 
            <Line></Line>
            <Text style={[styles.smallBold]}>Description</Text>
        </View>
    )
}