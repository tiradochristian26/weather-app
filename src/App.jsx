import { useState } from "react";
import WeatherCard from "./components/WeatherCard";
import SearchBar from "./components/Searchbar";
const App = () => {
    return (
        <>
        <SearchBar/>
        <WeatherCard
        temperature="30°C"
        city="Manila"
        humidity="80%"
        humidityText="Humidity"
        windSpeed="12 km/h"
        windText="Wind Speed"
            />
        </>
    )
}


export default App;