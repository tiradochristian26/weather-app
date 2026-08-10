const fetchWeather = async (city,signal) => {
    const key = import.meta.env.VITE_WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
     const response = await fetch(url,{signal})
            if (!response.ok) {
            throw new Error('Failed to fetch Data')
        }
        return response.json()
         
}
const normalizeWeatherData = (apiResponse) => {
        const celsius = Math.round( apiResponse.main.temp)
        const fahrenheit = Math.round((celsius * 9/5) + 32)
     
    return {
        cityName: apiResponse.name,
        lat:apiResponse.coord.lat,
        lon:apiResponse.coord.lon,
        celsius:celsius,
        fahrenheit: fahrenheit,
        humidity: apiResponse.main.humidity,
        wind:apiResponse.wind.speed,
        pressure:apiResponse.main.pressure,
        condition:apiResponse.weather[0].description,
        country:apiResponse.sys.country,
        visibility:apiResponse.visibility
    }
}
export { fetchWeather, normalizeWeatherData }