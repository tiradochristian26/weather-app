import { useState } from "react";
import { Cloud } from "lucide-react";
const WeatherCard = ({CityName, coordinates,country}) => {
    const [isCelsius,setIsCelsius] = useState(true)

    const toggle = () =>{
        setIsCelsius((prev) =>!prev)
    }

    return (
        <div className="border border-white">
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                <h1 className="text-white font-bold text-2xl">{CityName}</h1>
                <h2 className="text-gray-300 tracking-wider font-light text-xs">{coordinates} <span>·</span> {country}</h2>
                </div>
                <div>
                        <button type="button" className= {`w-14 h-8 rounded-full inline-flex items-center relative cursor-pointer p-1 py-3 ${isCelsius ? 'bg-blue-800' : 'bg-orange-800' }`}   onClick={toggle}>
                        <span className = {` absolute rounded-full h-6 w-6 bg-white text-sm  transition-all duration-200 flex justify-center  items-center font-medium
                            ${isCelsius ? 'left-1' : 'left-7'}
                            `}> {isCelsius ? '°C' : '°F'}</span>
                        </button>
                </div>
            </div>

            <div>
                <Cloud 
                color="white"
                size={120} />
            </div>
        </div>
    )
}

export default WeatherCard;