import React, { useCallback, useEffect, useState } from 'react';
import { fetchWeatherApi } from 'openmeteo';
import { Alert, ScrollView, View, Text, Image, Pressable } from 'react-native';
import 'react-native-url-polyfill/auto';

import { styles } from './Styles.tsx';
import codes from "../data/WeatherCodes.json";

const sunny = '../images/sunny.png';
const partlyCloudy = '../images/partlyCloudy.png';
const rain = '../images/rain.png';

export const Weather = () => {

    const [temp, setTemp] = useState<number>(0);
    const [humidity, setHumidity] = useState<number>(0);
    const [weatherCode, setWeatherCode] = useState<number>(0);
    const [weather, setWeather] = useState<string>("");
    const [wind, setWind] = useState<number>(0);

    {/* Get weather */ }
    const GetWeather = async () => {

        const params = {
            latitude: [-27.29455],
            longitude: [153.00381],
            current: ["temperature_2m", "relative_humidity_2m", "rain", "weather_code", "wind_speed_10m"]
        };
        const url = "https://api.open-meteo.com/v1/forecast";

        try {
            {/* Responses */ }
            const responses = await fetchWeatherApi(url, params);
            const response = responses[0];

            const utcOffsetSeconds = response.utcOffsetSeconds();
            const timezone = response.timezone();
            const timezoneAbbreviation = response.timezoneAbbreviation();
            const latitude = response.latitude();
            const longitude = response.longitude();
            const current = response.current()!;

            const temp = current.variables(0)!.value().toFixed(0);
            const humidity = current.variables(1)!.value().toFixed(0);
            const rain = current.variables(2)!.value();
            const weatherCode = current.variables(3)!.value();
            const wind = current.variables(4)!.value().toFixed(0);

            setTemp(temp);
            setHumidity(humidity);
            setWeatherCode(weatherCode);
            setWeather((codes[weatherCode]["day"]["description"]));
            setWind(wind);

            console.log("getweather");
        }
        catch (e) {
            {/* Error */ }
            Alert.alert(`${e}`);
        }
    }


    useEffect(() => {
        GetWeather().then()
    }, [])

    return (
        <View style={{ flexDirection: 'row' }}>
            {/* Details */}
            <View style={{ flexDirection: 'column', paddingLeft: 10, width: '75%' }}>
                <Text style={[styles.baseText, { fontSize: 32 }]}>{`${temp}`}˚C</Text>
                <View style={[{ flexDirection: 'row'}]}>
                    <Text style={[styles.baseText, {fontSize: 14.5}]}>{`${weather}`} | </Text>
                    <Image style={[{ width: 18, height: 18 }]} source={require('../images/humidity.png')}></Image>
                    <Text style={[styles.baseText, {fontSize: 14.5}]}>{`${humidity}`}% | </Text>
                    <Image style={[{ width: 18, height: 18 }]} source={require('../images/wind.png')}></Image>
                    <Text style={[styles.baseText, {fontSize: 14.5}]}>{`${wind}`}km/h</Text>
                </View>
            </View>
            {/* Weather image */}
            <Image
                style={{ width: 70, height: 70 }}
                source={weatherCode < 2 ? require(sunny)
                    : weatherCode < 49 ? require(partlyCloudy)
                        : require(rain)
                }
            />
        </View>

    );


}


function UseEffect(arg0: () => void, arg1: never[]) {
    throw new Error('Function not implemented.');
}

