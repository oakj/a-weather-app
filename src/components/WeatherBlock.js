import { useState, useEffect } from 'react'

import clearNight from '../assets/weather-descriptions/clear-night.svg'
import cloudyDay from '../assets/weather-descriptions/cloudy-day-3.svg'
import cloudyNight from '../assets/weather-descriptions/cloudy-night-3.svg'
import rainy from '../assets/weather-descriptions/rainy-6.svg'
import snowy from '../assets/weather-descriptions/snowy-6.svg'
import sunnyDay from '../assets/weather-descriptions/sunny-day.svg'
import thunder from '../assets/weather-descriptions/thunder.svg'

const WeatherBlock = () => {
    // fetch forecast data from weather stack api
    const [loading, setLoading] = useState(false)
    const address = 'los angeles'
    const unit = 'f'
    const url = `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER_STACK_KEY}&query=${address}&units=${unit}`
    useEffect( async () => { //useEffect so that the api doesn't get fetched on every render
        const response = await fetch(url)
        const { current, location, request } = await response.json()
        console.log('useEffect():', current)
        console.log('useEffect():', location)
        console.log('useEffect():', request)
    }, [])

    // toggle more info
    const [toggleinfo, setToggleInfo] = useState(false)
    
    return (
        <>
            {
                loading ?
                    <div className="loading">Fetching weather data...</div>
                :
                    <div className="weatherblock">
                        <div className="box-1">
                            <div className="name">Los Angeles, CA</div>
                            <div className="region-country">California, United State of America</div>
                            <div className="date">date: Sunday January 21, 2021</div>
                            <div className="time">time: 5:59pm</div>
                            <div className="save">save</div>
                            <div className="toggleinfo" onClick={() => setToggleInfo(!toggleinfo)}>toggle more info</div>
                        </div>
                        <div className="box-2">
                            <img className="icon" src={sunnyDay} alt="weather_icon"/>
                            <div className="description">Sunny</div>
                        </div>
                        <div className="box-3">
                            <div className="temperature">68</div>
                            <div className="feelslike">feels like: 68</div>
                        </div>
                        <div className="box-4">
                            <div className="unit">unit</div>
                            <div className="f">F</div>
                            <div className="c">C</div>
                        </div>
                    </div>
            }

            {
                toggleinfo ?
                    <div className="weatherblock__moreinfo">
                        <div className="box-1">
                            <div className="humidity">humidity: 24</div>
                            <div className="precip">chance of precipitation: 0</div>
                            <div className="windspeed">wind speed: 0</div>
                            <div className="winddirection">wind direction: W</div>
                        </div>
                    </div>
                :
                    null
            }

        </>
    );
}

export default WeatherBlock

/* weather stack api weather_descriptions:
https://www.amcharts.com/free-animated-svg-weather-icons/
day condition:
Sunny
Partly cloudy
Cloudy
Overcast
Mist
Patchy rain possible
Patchy snow possible
Patchy sleet possible
Patchy freezing drizzle possible
Thundery outbreaks possible
Blowing snow
Blizzard
Fog
Freezing fog
Patchy light drizzle
Light drizzle
Freezing drizzle
Heavy freezing drizzle
Patchy light rain
Light rain
Moderate rain at times
Moderate rain
Heavy rain at times
Heavy rain
Light freezing rain

night condition:
Clear
Partly cloudy
Cloudy
Overcast
Mist
Patchy rain possible
Patchy snow possible
Patchy sleet possible
Patchy freezing drizzle possible
Thundery outbreaks possible
Blowing snow
Blizzard
Fog
Freezing fog
Patchy light drizzle
Light drizzle
Freezing drizzle
Heavy freezing drizzle
Patchy light rain
Light rain
Moderate rain at times
Moderate rain
Heavy rain at times
Heavy rain
Light freezing rain */