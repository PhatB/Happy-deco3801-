
import React, {useEffect} from 'react'
import {View} from "react-native";
import fs from "react-native-fs";
import {parse} from 'csv-parse'
const loadCSV =  function (filePath: string) {
    return new Promise((resolve, reject) => {
        const results: any[] = [];

        fs.createReadStream(filePath)
            .pipe(parse({columns: true}))
            .on('data', (row) => results.push(row))
            .on('end', () => {

                resolve(results); // Resolve the promise with the current instance for chaining
            })
            .on('error', (err) => reject(err)); // Reject the promise in case of an error

    });
}

type PlantType = {
    name:string,
    sci_name:string,
    difficulty:string,
    moisture_min:number,
    moisture_max:number,
    sun_min:number,
    sun_max:number,
    temp_min:number,
    temp_max:number,
    uv_min:number,
    uv_max:number,


}
export const ExploreDisplayPlants = ({}) => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [data, setData] = React.useState([]);

    const getPlants = async () => {
        setData(await loadCSV("./data/PlantTypes") as never)
    }
    useEffect(() => {
        getPlants().then()
    }, []);
    return (
        <View>
            data
        </View>
    )
}
