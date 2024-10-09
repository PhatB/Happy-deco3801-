import React, {useCallback, useState} from 'react';	
import { fetchWeatherApi } from 'openmeteo';
import {Alert, ScrollView, View, Text, Image, Pressable} from 'react-native';
import 'react-native-url-polyfill/auto';

import {styles} from '../other/Styles.tsx';

export const Weather = () => {

    const [temp, setTemp] = useState<number>(0);

    // Helper function to form time ranges
    const range = (start: number, stop: number, step: number) =>
        Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);
        

    {/* Get weather */}
    const GetWeather = useCallback(async () => {

        const params = {
            latitude: [27.4705],
            longitude: [153.0260],
            current: "temperature_2m"
        };
        const url = "https://api.open-meteo.com/v1/forecast";

        try {
            {/* Responses */}
            const responses = await fetchWeatherApi(url, params);
            const response = responses[0];

            const utcOffsetSeconds = response.utcOffsetSeconds();
            const timezone = response.timezone();
            const timezoneAbbreviation = response.timezoneAbbreviation();
            const latitude = response.latitude();
            const longitude = response.longitude();
            const current = response.current()!;

            setTemp(current.variables(0)!.value());

            console.log("getweather");
        }
        catch(e) {
            {/* Error */}
            Alert.alert(`${e}`);
        }
    }, []);

    GetWeather();

    return(
        <View>
            <Text>{`${temp}`}˚C</Text>
        </View>
            
    );


}


