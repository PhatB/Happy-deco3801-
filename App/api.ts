import { ImageSourcePropType } from 'react-native';

const TEST_KEY = "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjY2YWMwZTY0MWI4MWZhZDE3NzIyOGZiNSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJVc2VyMSIsIm5iZiI6MTcyODg4OTYyMiwiZXhwIjoxNzMxNDgxNjIyfQ.XjKkpZ8b05rJjpDURmbFq-4ueOxvpuvNGTvRd1cDxGs"

const API_BASE_URL: string = "https://deco3801-teamhappy.uqcloud.net/api/"
const IMAGE_PREFIX: string = "./images/"
export type PlantType = {
    id: string
    name: string
    scientificName: string
    careDifficulty: string
    location: string
    moistureMin: number
    moistureMax: number
    sunlightMin: number
    sunlightMax: number
    temperatureMin: number
    temperatureMax: number
    uvMin: number
    uvMax: number
    pests: string
    detail: string
    image: ImageSourcePropType
}
export type UserPlant = {
    id: string
    name: string,
    plantType: PlantType,
    device: string,
    description: string,
    image: ImageSourcePropType,
}

export type EnvironmentRecord = {
    id: string,
    device: string,
    time: string,
    temperature: number,
    moisture: number,
    sunlight: number,
    suppress_notifications: boolean,
}
export const pestImages: any = {
    "Mealybugs": require(IMAGE_PREFIX + "mealybugs.jpg"),
    "Spider Mites": require(IMAGE_PREFIX + "spiderMites.jpg"),
    "Scale Insects": require(IMAGE_PREFIX + "scaleInsects.jpg"),
    "Fungus Gnats": require(IMAGE_PREFIX + "fungusGnats.jpg"),
    "Aphids": require(IMAGE_PREFIX + "aphids.jpg"),
    "Thrips": require(IMAGE_PREFIX + "thrips.jpg"),
}
export const plantImages: any = {
    "Peace Lily": require(IMAGE_PREFIX + "peace.jpg"),
    "Dieffenbachia": require(IMAGE_PREFIX + "dieffenbachia.jpg"),
    "Monstera": require(IMAGE_PREFIX + "monstera.jpg"),
    "Orchid": require(IMAGE_PREFIX + "orchid.jpg"),
    "Burro's Tail": require(IMAGE_PREFIX + "succulent.jpg"),
}
export function addImage<Type>(json: any[], images: any) {
    let types: Type[] = []
    // Go through each element in the JSON
    for (let index in json) {
        let item = json[index]

        // Add the plant's image
        item["image"] = images[item["name"]]
        // Convert the plant to a PlantType and add it to the array.
        types.push(item);
    }
    return types
}
async function apiRequest(endpoint: string, body: any = null, method = "GET") {
    const response = await fetch(`${API_BASE_URL}${endpoint}`,
        {
            method: method,
            body: body === null ? "" : JSON.stringify(body),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": `Bearer ${TEST_KEY}`
            }
        }
    );
    if (!response.ok) {
        try {
            const responseBody = await response.json()
            throw new Error(`Could not access the api.Status: ${response.status} message: ${responseBody.message}`)
        } catch (_) {
            throw new Error(`Could not access the api.Status: ${response.status}`)
        }
    }
    return response.json();
}
export async function addUserPlant(body: any) {
    return apiRequest("UserPlant", body, "POST")
}

export async function userPlantsFromUser(userID: string) {
    let userPlants: UserPlant[] = []
    const response = await apiRequest(`UserPlant/FromUser/${userID}`)
    for (let i = 0; i < response.length; i++) {
        const rawUserPlant = response[i];
        const rawPlantType = await getPlantType(rawUserPlant.plantType);
        const plantType: PlantType = addImage<PlantType>([rawPlantType],
            plantImages)[0];
        const userPlant: UserPlant = {
            id: rawUserPlant.id,
            name: rawUserPlant.name,
            device: rawUserPlant.device,
            description: rawUserPlant.description,
            plantType: plantType,
            image: plantImages[plantType.name]
        };
        userPlants.push(userPlant);
    }

    return userPlants;
}

export async function getEnvironmentRecords(deviceID: string) {
    return apiRequest(`EnvironmentRecords/FromDevice/${deviceID}`)
}

export async function suppressRecord(record: EnvironmentRecord) {
    record.suppress_notifications = true;
    return apiRequest(`EnvironmentRecords/${record.id}`, record, "PUT")
}

export async function mostRecentEnvironmentRecord(deviceID: string) {
    let records: EnvironmentRecord[] = await getEnvironmentRecords(deviceID)
    if (records.length == 0) {
        return null
    }
    return records.sort((a, b) => a.time > b.time ? -1 : 1)[0]
}

export async function getPlantTypes() {
    return apiRequest('PlantType');
}

export async function getPlantType(typeID: string) {
    return apiRequest(`PlantType/${typeID}`)
}

export async function getDeviceFromUser(userID: string) {
    return apiRequest(`Devices/FromUser/%{userID}`)
}

export async function getDevice(deviceID: string) {
    return apiRequest(`Devices/${deviceID}`);
}