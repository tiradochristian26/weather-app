const WeatherCard = ({
  temperature,
  city,
  humidity,
  humidityText,
  windSpeed,
  windText,
}) => {
  return (
    <div className="my-2 mx-4 space-y-4 shadow-lg py-2 rounded-lg bg-gradient-to-b from-blue-500 to-purple-600 md:space-y-8 ">
      <div className=" flex flex-col justify-center items-center md:space-y-2">
        <img
          src="../src/assets/WeatherIcons/clear-day.svg"
          alt="temperature icon"
          className="w-30 "
        />
        <h1 className="font-bold text-3xl text-white md:text-5xl">
          {" "}
          {temperature}
        </h1>
        <h2 className="font-medium text-gray-300 md:text-2xl">{city}</h2>
      </div>


      <div className="flex justify-center items-center  md:p-2">
        <div className="flex items-center md:justify-center w-full p-2">
          <img
            src="../src/assets/WeatherIcons/humidity.svg"
            alt="humidity icon"
            className="w-10 md:w-20"
          />
          <div >
            <p className="font-medium xs: text-sm text-white md:text-2xl"> {humidity}</p>
            <p className="text-sm text-white md:text-lg"> {humidityText}</p>
          </div>
        </div>

        <div className="flex items-center md:justify-center   w-full p-2">
          <img
            src="../src/assets/WeatherIcons/wind.svg"
            alt=""
            className="w-10 md:w-20"
          />
          <div>
            <p className="font-medium xs: text-sm text-white md:text-2xl ">{windSpeed}</p>
            <p className="text-sm text-white md:text-lg ">{windText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
