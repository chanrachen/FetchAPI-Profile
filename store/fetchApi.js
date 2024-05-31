"use stric"
const baseURL = "https://fakestoreapi.com/";

export async function getData(endpoint) {
    try {
        const response = await fetch(`${baseURL}${endpoint}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
