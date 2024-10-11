import React, {useCallback, useState} from 'react';	
import { fetchWeatherApi } from 'openmeteo';
import {Alert, ScrollView, View, Text, Image, Pressable} from 'react-native';
import 'react-native-url-polyfill/auto';

export const Weather = () => {

    const [temp, setTemp] = useState<number>(0);
    const [humidity, setHumidity] = useState<number>(0);
    const [rain, setRain] = useState<number>(0);
    const [weatherCode, setWeatherCode] = useState<number>(0);
    const [wind, setWind] = useState<number>(0);

    // Helper function to form time ranges
    const range = (start: number, stop: number, step: number) =>
        Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);
        

    {/* Get weather */}
    const GetWeather = useCallback(async () => {

        const params = {
            //latitude: [27.5021],
            //longitude: [152.9968],
            latitude: [27.29455],
            longitude: [153.00381],
            current: ["temperature_2m", "relative_humidity_2m", "rain", "weather_code", "wind_speed_10m"]
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

            const temp = current.variables(0)!.value();
            const humidity = current.variables(1)!.value();
            const rain = current.variables(2)!.value();
            const weatherCode = current.variables(3)!.value();
            const wind = current.variables(4)!.value();

            setTemp(temp);
            setHumidity(humidity);
            setRain(rain);
            setWeatherCode(weatherCode);
            setWind(wind);

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
            <Text>Temperature: {`${temp}`}˚C</Text>
            <Text>Humidity: {`${humidity}`}%</Text>
            <Text>Rain: {`${rain}`}</Text>
            <Text>Weather code: {`${weatherCode}`}</Text>
            <Text>Wind: {`${wind}`}km/h</Text>
        </View>
            
    );


}


