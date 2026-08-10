
import Cities from "./components/common/CityCard";
import Title from "./components/common/Title";
import SearchBar from "./components/Searchbar";
import WeatherCard from "./components/WeatherCard";
import WeatherDetails from "./components/common/WeatherDetails";
import { Droplet } from "lucide-react";
import { Wind } from "lucide-react";
import { Gauge } from "lucide-react";
import { SunMedium } from "lucide-react";
import { fetchWeather, normalizeWeatherData } from "./components/service/WeatherAPI";
import CloudLoader from "./utils/loader";
import { useEffect, useState } from "react";
const App = () => {
        const [weatherData,setWeatherData] = useState(null);
        const [err,setErr] = useState(null)
        const [loader,setLoader] = useState(false)
        useEffect(() => {
            const controller = new AbortController()
            const fetchWeatherData =  async () => {
            setLoader(true)
            setErr(null)
                try {
                      const rawData =  await fetchWeather('Manila',controller.signal)
                      const cleanData = normalizeWeatherData(rawData)
                      console.log(rawData)
                        setWeatherData(cleanData)
                } catch (error) {
                      if(error.name === 'AbortError'){
                        setErr(error);
                      }
                }finally{
                    setLoader(false)
                }
            }
            fetchWeatherData()
            return () => controller.abort()
        },[])
    if(loader)( <CloudLoader/>)
    if(err)(<p>{err}</p>)
    if (!weatherData) return null

    const countries = [
        {
            id: 1,
            name: 'Tokyo',
            color: 'bg-green-500'
        },
        {
            id: 2,
            name: 'Singapore',
            color: 'bg-gray-500'
        },
        {
            id: 3,
            name: 'Abu Dhabi',
            color: 'bg-yellow-500'
        }

    ]

    const weather = {
        cityName: weatherData.cityName,
        lat: weatherData.lat,
        lon:weatherData.lon,
        country: weatherData.country,
        celsius: weatherData.celsius,
        fahrenheit: weatherData.fahrenheit,
        condition:weatherData.condition
    }

    const weatherElements = [
        {
            id: 1,
            icon: Droplet,
            temp: 23,
            title: weatherData.humidity
        },
        {
            id: 2,
            icon: Wind,
            temp: 12,
            title: weatherData.wind

        },
        {
            id: 3,
            icon: Gauge,
            temp: 997,
            title: weatherData.pressure

        },
        {
            id: 4,
            icon: SunMedium,
            temp: 1,
            title: 'UV index'

        }
    ]


 
    return (
        <>
            <div className="w-screen  h-screen flex flex-col lg:flex-row gap-6  bg-gray-900 px-3 py-4 md:p-7 lg:p-10">

                <div className="flex 
             flex-col gap-5">
                    <Title />

                    <div className="space-y-3">
                        <SearchBar />
                        <div className="text-gray-400 space-y-1">
                            <p>Recent searches</p>
                            <div className="flex justify-baseline gap-2 items-center flex-wrap lg:flex-col lg:items-baseline  ">
                                {countries.map(country =>
                                (
                                    <Cities
                                        key={country.id}
                                        title={country.name}
                                        color={country.color} />
                                )
                                )}
                            </div>
                        </div>
                    </div>

                </div>

                <div className="w-full md:flex-1  h-fit space-y-3">
                    <WeatherCard 
                   {...weather}
                     />
                    <div className=" gap-2 grid grid-cols-2 ">
                        {weatherElements.map(el => {
                            return (
                                <WeatherDetails
                                    key={el.id}
                                    icon={el.icon}
                                    temp={el.temp}
                                    title={el.title}
                                />
                            )
                        })}
                    </div>

                </div>

            </div >

        </>
    )
}


export default App;