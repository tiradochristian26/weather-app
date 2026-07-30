
import React from "react";
import { useState } from "react";
import { GetWeather } from "./services/getWeather";

const App = () => {
    
    const [count, setCount] = useState(0)

    return (
        <> <GetWeather/></>
    )
}

export default App;