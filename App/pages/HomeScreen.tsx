import React, {useState} from 'react';
import {ScrollView, View, Text, Image} from 'react-native';

import {styles} from '../other/Styles.tsx';
import {Footer} from '../other/Footer.tsx';
import {Search} from '../other/Search.tsx';

const testUserId = "66e3848cc14bcef4f162d6e9";
const plusIcon = '../images/plusIcon.png';
import {PrettyList} from '../other/PrettyList.tsx';
import plants from "../data/PlantTypes.json";
type UserPlant = {
    id: string;
    name: string,
    plantType: string,
    device: string,
}
export const HomeScreen = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState<UserPlant[]>([]);
    const [error, setError] = useState<String | null>(null);
    const getPlants = async () => {
        try {
            const response = await fetch("https://deco3801-teamhappy.uqcloud.net/api/UserPlants/FromUser/" + testUserId);
            const json = await response.json();
            setData(json);
        } catch (err) {
            setError(err as String);
        } finally {
            setLoading(false);
        }
    }
    return (
    // Full view
        <View style={{height: '100%'}}>
            {/* Scroll view */}
            <View style={styles.scrollArea}>
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    <Text style={styles.pageTitle}>{'My Plants'}</Text>
                    {/* Search bar */}
                    <Search />
                    {/* Weather box */}
                    <View>
                        
                    </View>
                    {/* Main box */}

                    <View style={[styles.main, {flexDirection:'column'}]} >
                        {/* Add new plant */}
                        <View style={[styles.greenButton, {marginVertical: 15}]}>
                            <Image source={require(plusIcon)} />
                            <Text style={styles.greenButton}>{'Add new plant'}</Text>
                        </View>
                        {error !== null
                        ? <Text>Error while accessing your plant list: {error}</Text>
                        : <PrettyList data={data} />}

                    </View>
                </ScrollView>
            </View>

            {/* Footer */}
            <Footer />
        </View>
    );
};
