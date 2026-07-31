import { Clock } from "lucide-react"
import Cities from "./common/CityCard";
import SearchBar from "./Searchbar";

const WeatherCard = () => {

    return (
        <div className=" h-screen w-screen bg-gray-900 px-3 py-4 ">
           <div className="flex  flex-col gap-4 ">
             <div  className="flex justify-baseline items-center-safe gap-3  ">
                <Clock color="#FFBF00"  size={32}/> 
                <h1 className="text-white font-medium text-2xl">Glass</h1>
                <h2 className="text-gray-500 uppercase text-xs ">Weather Station</h2>
             </div>

                <div>
                        <SearchBar/>
                </div>
                <div className="flex justify-baseline gap-2 items-center flex-wrap lg:flex-col lg:items-baseline">
                <Cities title={"Tokyo"}  color="bg-green-500" />
                <Cities title={"Japan"}  color="bg-blue-500" />
                <Cities title={"Singapore"}  color="bg-gray-500" />
                <Cities title={"Abu Dhabi"}  color="bg-yellow-500" />
                </div>
           </div>
            

        </div>

    )
}

export default WeatherCard;