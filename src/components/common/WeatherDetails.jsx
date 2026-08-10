
const WeatherDetails = ({ icon: Icon, temp, title }) => {

    return (

        <div className="flex items-center w-full justify-center bg-gray-700/90 gap-5 rounded-lg  px-1 py-2">
            <div>
                <Icon size={32} color={'white'} />
            </div>
            <div>
                <p className="text-gray-400 uppercase font-light">{title}</p>
                <p className="text-white text-lg">{temp}</p>

            </div>
        </div >

    )
}


export default WeatherDetails