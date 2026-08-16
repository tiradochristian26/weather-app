import Cities from "./components/common/CityCard";
import Title from "./components/common/Title";
import SearchBar from "./components/Searchbar";
import WeatherCard from "./components/WeatherCard";
import WeatherDetails from "./components/common/WeatherDetails";
import { Droplet } from "lucide-react";
import { Wind } from "lucide-react";
import { Gauge } from "lucide-react";
import { Eye } from "lucide-react";
import { fetchWeather, normalizeWeatherData } from "./components/service/WeatherAPI";
import CloudLoader from "./utils/loader";
import { useEffect, useState } from "react";

const App = () => {
        const [weatherData,setWeatherData] = useState(null);
        const [err,setErr] = useState(null)
        const [loader,setLoader] = useState(false)
        const [city,setCity] = useState('Manila')
        const [recentSearches,setRecentSearches] = useState(['Manila'])
        useEffect(() => {
            const controller = new AbortController()
            const fetchWeatherData =  async () => {
            setLoader(true)
            setErr(null)
                try {
                      const rawData =  await fetchWeather( city, controller.signal)
                      const cleanData = normalizeWeatherData(rawData)
                      setWeatherData(cleanData)

                       setRecentSearches((prev) => {
            const deDupe = prev.filter(
                city =>    city.toLowerCase() !== cleanData.cityName.toLowerCase()
            )
            return [cleanData.cityName, ...deDupe].slice(0,3)
        })
                } catch (error) {
                      if(error.name !== 'AbortError'){
                            setErr(error)
                      }
                }finally{
                    setLoader(false)
                }
            }
            fetchWeatherData()
            return () => controller.abort()
        },[city])

    const handleSearch = (newCity) => {
        setCity(newCity)

       
    }

        

    const countries = [
        {
            id: 1,
            name: 'Bacolod',
            color: 'bg-green-500'
        },
        {
            id: 2,
            name: 'Iloilo',
            color: 'bg-gray-500'
        },
        {
            id: 3,
            name: 'Cebu',
            color: 'bg-yellow-500'
        }

    ]

    const weather = weatherData ?  {
        cityName: weatherData.cityName,
        lat: weatherData.lat,
        lon:weatherData.lon,
        country: weatherData.country,
        celsius: weatherData.celsius,
        fahrenheit: weatherData.fahrenheit,
        condition:weatherData.condition,
    } : null

    const weatherElements =  weatherData ?[ 
        {
            id: 1,
            icon: Droplet,
            temp: weatherData.humidity,
            title: 'Humidity'},
        {
            id: 2,
            icon: Wind,
            temp:  weatherData.wind,
            title:  'Wind speed'

        },
        {
            id: 3,
            icon: Gauge,
            temp: weatherData.pressure,
            title: 'Pressure'

        },
        {
            id: 4,
            icon: Eye,
            temp: weatherData.visibility,
            title: 'Visibility'

        }
    ] : []

    const colors = ['bg-green-500', 'bg-gray-500', 'bg-yellow-500']
    return (
        <>
            <div className="w-screen  h-screen flex flex-col lg:flex-row gap-6  bg-gray-900 px-3 py-4 md:p-7 lg:p-10">
                <div className="flex flex-col gap-5">
                    <Title />
                    <div className="space-y-3">
                        <SearchBar onSearch={handleSearch} />
                        <div className="text-gray-400 space-y-1">
                            <p>Recent searches</p>
                            <div className="flex justify-baseline gap-2 items-center flex-wrap lg:flex-col lg:items-baseline  ">
                                {recentSearches.map((cityName,index) =>
                                (
                                    <Cities
                                        key={cityName}
                                        title={cityName}
                                        color={colors[index % colors.length]}
                                        onSearch={handleSearch}
                                        />
                                )
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full md:flex-1  h-fit space-y-3">
                    {loader && <CloudLoader/> }

                    {!loader && err && (
                         <div className="text-red-400 bg-gray-800 rounded-xl p-4">
                        <p>{err.message}</p>
                    </div>
                    )}
                    {!loader && !err && weatherData && (
                            <>
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
                            </>
                    )}
                   

                </div>

            </div >

        </>
    )
}


export default App;