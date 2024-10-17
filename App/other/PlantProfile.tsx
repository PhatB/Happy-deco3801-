import React, { useEffect, useState } from "react"
import { Image, Modal, Pressable, Switch, Text, View } from "react-native"
import { AttentionBadge, HealthyBadge, PlantBadges, WaterBadge } from "./MiscComponents/Badges"
import { NavigationProp, useNavigation, useRoute } from "@react-navigation/native"
import { Line } from "./MiscComponents/Line"
import { styles } from "./Styles"
import { deleteUserPlant, EnvironmentRecord, mostRecentEnvironmentRecord, PlantType, UserPlant } from "../api"
import { CircularProgress } from "react-native-circular-progress"
import { InfoCircle } from "./MiscComponents/InfoCircle"
import { Loading } from "./MiscComponents/Loading"

interface PlantProfileProps {
    info: UserPlant
}

export const inBounds = (value: number, min: number, max: number) => {
    return value >= min && value <= max
}

export const PlantProfile = (props: PlantProfileProps) => {
    const navigation: NavigationProp<any> = useNavigation();
    let { info } = props;
    const [needsAttention, setNeedsAttention] = useState(false);
    const [mostRecent, setMostRecent] = useState<EnvironmentRecord | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [warningVisisble, setWarningVisible] = useState(false)
    const attentionCheck = (record: EnvironmentRecord, plantType: PlantType) => {

        if (!inBounds(record.moisture, plantType.moistureMin, plantType.moistureMax)) return true;
        if (!inBounds(record.sunlight, plantType.sunlightMin, plantType.sunlightMax)) return true;
        if (!inBounds(record.temperature, plantType.temperatureMin, plantType.temperatureMax)) return true;
        return false;
    }
    const WarningModal = () => {
        return (
            <Modal

                animationType='fade'
                visible={warningVisisble}
                transparent={true}
                onRequestClose={() => { setWarningVisible(false) }}
            >
                <View style={[styles.modalView, styles.main]}>
                    <Text style={styles.smallHeading}>Are you sure?</Text>

                    <Text style={{ color: "black", fontSize: 18 }}>
                        Are you sure you want to delete {info.name}?
                    </Text>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <Pressable onPress={() => {
                            deletePlant()
                        }}
                            style={[styles.smallGreenButton, { marginVertical: 15 }]}>
                            <Text style={[styles.redButton, { textAlign: "center" }]}>{'Delete'}</Text>
                        </Pressable>
                        <Pressable onPress={() => {
                            setWarningVisible(false)
                        }}
                            style={[styles.smallGreenButton, { marginVertical: 15 }]}>
                            <Text style={[styles.greenButton, { textAlign: "center" }]}>{'Cancel'}</Text>
                        </Pressable>
                    </View>
                </View>

            </Modal >

        )
    }
    const getMostRecentRecord = async () => {
        setIsLoading(true);
        const recent = await mostRecentEnvironmentRecord(info.device);
        if (recent === null) {
            setNeedsAttention(true);
            return;
        }
        setMostRecent(recent)
        setNeedsAttention(attentionCheck(recent, info.plantType))
        setIsLoading(false);
    }

    const deletePlant = async () => {
        try {
            await deleteUserPlant(info.id);
        } catch (e: any) {
            console.log(e)
        }
        navigation.navigate("Home", { "dummy": "dummy" })
    }

    const WhichAttentionBadge = () => {
        if (needsAttention) {
            return <AttentionBadge />
        } else {
            return <HealthyBadge />
        }
    }

    const CurrentStatusBody = () => {
        const plantType: PlantType = info.plantType;
        if (isLoading) {
            return (
                <Loading />
            )
        }
        if (mostRecent === null) {
            return (
                <Text>No environmental records found... Ensure your device has been turned on.</Text>
            )
        } else {
            return (
                <>
                    <View style={{ flexDirection: "row", marginTop: 25 }}>
                        <InfoCircle
                            value={Math.round(mostRecent.moisture * 10)}
                            value_max={plantType.moistureMax * 10}
                            value_min={plantType.moistureMin * 10}
                            suffix="%"
                            label="Moisture"
                        />
                        <InfoCircle
                            value={Math.round(mostRecent.temperature)}
                            value_max={plantType.temperatureMax}
                            value_min={plantType.temperatureMin}
                            suffix="°C"
                            label="Temperature"
                        />
                        <InfoCircle
                            value={Math.round(mostRecent.sunlight * 10)}
                            value_max={plantType.sunlightMax * 10}
                            value_min={plantType.sunlightMin * 10}
                            suffix="%"
                            label="Sunlight"
                        />

                    </View>

                    <Pressable
                        onPress={() => navigation.navigate("History", { "plant": info })}
                        style={[styles.smallGreenButton, { marginHorizontal: 0, marginTop: 30, width: '100%', height: 60 }]}>
                        <Text style={styles.greenButton}>View Plant History</Text>
                    </Pressable>
                </>
            )
        }
    }

    useEffect(() => {
        getMostRecentRecord().then()
    }, [])

    // Reminder Switch State
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View>
            <WarningModal />
            <Line></Line>
            <View style={{ flexDirection: "row", alignContent: "center", alignItems: "center" }}>
                <Text style={[styles.smallBold, { flex: 1 }]}>Current Status</Text>
                <WhichAttentionBadge />
            </View>
            <CurrentStatusBody />
            <Line></Line>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={[styles.smallBold, { flex: 1 }]}>Watering</Text>
                <WaterBadge info={info.plantType} />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 15 }}>
                {/* Reminders Switch */}
                <Text style={[styles.smallHeading, { flex: 1, fontSize: 15, }]}>Reminders</Text>
                <Switch
                    thumbColor="#FFFFFF"
                    trackColor={{ true: "#D1EDCE", false: "#D1EDCE" }}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style={{ marginRight: 10 }}
                    />
            </View>
            <Line></Line>
            <Text style={[styles.smallBold]}>Pest Management</Text>
            <Pressable
                onPress={() => {
                    navigation.navigate("PestDetected", { "plant": info })
                }}
                style={[styles.smallGreenButton, { marginHorizontal: 0, marginTop: 30, width: '100%', height: 60 }]}>
                <Text style={styles.greenButton}>I've detected a pest!</Text>
            </Pressable>
            <Line></Line>
            <Text style={[styles.smallBold]}>Description</Text>
            <Text style={styles.baseText}>{info.description}</Text>
            <Pressable
                style={[styles.smallGreenButton, { marginHorizontal: 0, marginTop: 30, width: '100%', height: 60 }]}
                onPress={() => { setWarningVisible(true) }}>
                <Text style={styles.redButton}>Delete Plant</Text>
            </Pressable>
        </View>
    )
}