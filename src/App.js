import { queryAllByAltText } from "@testing-library/dom";
import react, {useState} from "react";



import { fetchWeather } from "./api/fetchWeather";
import './App.css'

const App = () => {
    const [query, setQuery] = useState('')
    const [weather, setweather] = useState({})

    const search = async (e) => {
        if(e.key === 'Enter') {
            const data = await fetchWeather(query)

            setweather(data)
            setQuery('')
        }
    }

    return (
        <div className="main-container" >
            <input type="text" className="search" placeholder="Search.." value={query} onChange={(e)=> setQuery(e.target.value)} onKeyPress={search}/>
            {weather.main && (
                <div className="city">
                    <h2 className="city-name">
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                </div>
            )}
        </div>
    )
}

export default App;