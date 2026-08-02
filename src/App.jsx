// import WeatherCard from "./components/WeatherCard";
import Cities from "./components/common/CityCard";
import Title from "./components/common/Title";
import SearchBar from "./components/Searchbar";
import WeatherCard from "./components/WeatherCard";
const App = () => {
    return (
        <>  
        <div className="w-screen h-screen  bg-gray-900 px-3 py-4">
            <div className="flex
             flex-col gap-5">
            <Title/>

            <div className="space-y-3">
            <SearchBar/>

            <div className="flex justify-baseline gap-2 items-center flex-wrap lg:flex-col lg:items-baseline">
                <Cities title={"Tokyo"}  color="bg-green-500" />
                <Cities title={"Japan"}  color="bg-blue-500" />
                <Cities title={"Singapore"}  color="bg-gray-500" />
                <Cities title={"Abu Dhabi"}  color="bg-yellow-500" />
            </div>

            </div>

            </div>

                <div>
                    <WeatherCard CityName={'Tokyo'} coordinates={'64.13°N 21.94°W '} country={'Iceland'}/>
                </div>
        </div>
       
        </>
    )
}


export default App;