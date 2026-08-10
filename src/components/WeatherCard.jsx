import { useState } from "react";
import { Snowflake } from "lucide-react";

const WeatherCard = ({ cityName,lon,lat, country, celsius, fahrenheit, condition }) => {
   const [isCelsius, setIsCelsius] = useState(true)
   const toggle = () => {
      setIsCelsius((prev) => !prev)
   }
   return (
      <div className=" bg-linear-to-tr from-blue-950 to-black rounded-2xl space-y-3 py-2 px-3 md:space-y-8 w-full md:max-h-5xl h-fit">
         <div className="flex items-center justify-between">
            <div className="space-y-1">
               <h1 className="text-white font-bold text-2xl md:text-4xl">{cityName}</h1>
               <h2 className="text-gray-300 tracking-wider font-light text-xs md:text-sm">{lat} <span>·</span>{lon} {country}</h2>
            </div>
            <div>
               <button type="button" className={`w-14 h-8 rounded-full md:w-15 md:h-10 inline-flex items-center relative cursor-pointer p-1 py-3 ${isCelsius ? 'bg-blue-800' : 'bg-orange-800'}`} onClick={toggle}>
                  <span className={` absolute rounded-full h-6 w-6 md:h-7 md:w-7 bg-white text-sm  transition-all duration-200 flex justify-center  items-center font-medium
                            ${isCelsius ? 'left-1' : 'left-7'}
                            `}> {isCelsius ? "°C" : "°F"}</span>
               </button>

            </div>
         </div>

         <div className="space-y-1">
            <div className="flex items-center gap-3">
               <Snowflake
                  color="white"
                  size={60}
                  strokeWidth={1}
               />

               <div >
                  <h3 className="text-7xl font-bold text-white md:text-8xl ">{isCelsius ? celsius : fahrenheit}</h3>
               </div>
            </div>
            <div>
               <p className="text-gray-400 text-sm" >Condition : <span className="text-white font-medium">{condition}</span></p>
            </div>
         </div>
      </div>
   )
}

export default WeatherCard;