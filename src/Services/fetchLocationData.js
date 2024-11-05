import axios from 'axios';
// https://geocoding-api.open-meteo.com/v1/search?name=indore&count=10&language=en&format=json

export const fetchLocationData = async (location) => {
    try {
        const url = `https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=10&language=en&format=json`;
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.log(error);
        return { error: true, message: "Cannot search location." };
    }
}