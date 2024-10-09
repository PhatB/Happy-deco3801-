import React, {useCallback} from 'react';	
import { fetchWeatherApi } from 'openmeteo';
import {Alert, ScrollView, View, Text, Image, Pressable} from 'react-native';
import 'react-native-url-polyfill/auto';

export const Weather = () => {

    // Helper function to form time ranges
    const range = (start: number, stop: number, step: number) =>
        Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

    {/* Get weather */}
    const GetWeather = useCallback(async () => {

        // const params = {
        //     "latitude": 52.52,
        //     "longitude": 13.41
        // };
        const params = {
            latitude: [52.52],
            longitude: [13.41],
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

            return timezone;
        }
        catch(e) {
            {/* Error */}
            //Alert.alert(`Couldn't fetch weather API.`);
            Alert.alert(`${e}`);
        }
    }, []);
    
    return(
        <View>
            <Text>aaaaaa</Text>
            <Text>{`${GetWeather()}`}</Text>
        </View>
            
    );


}


