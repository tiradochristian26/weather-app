const fetchWeather = async (city) => {
    const key = import.meta.env.VITE_WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error('faile to fetch Data')
        }

        const result = await response.json()
        return result;
    } catch (error) {
        console.error(error)
    }
}
const normalizeWeatherData = (apiResponse) => {
    return {
        cityName: apiResponse.name,
        coordinates: apiResponse.coord,
        country: apiResponse.sys.country,
        celsius: apiResponse.main.temp,

    }
}


export { fetchWeather, normalizeWeatherData }