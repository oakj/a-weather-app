import dayjs from 'dayjs'
import { useState, useEffect } from 'react'

import clearNight from '../assets/weather-descriptions/clear-night.svg'
import cloudyDay from '../assets/weather-descriptions/cloudy-day-3.svg'
import cloudyNight from '../assets/weather-descriptions/cloudy-night-3.svg'
import rainy from '../assets/weather-descriptions/rainy-6.svg'
import snowy from '../assets/weather-descriptions/snowy-6.svg'
import sunnyDay from '../assets/weather-descriptions/sunny-day.svg'
import thunder from '../assets/weather-descriptions/thunder.svg'

const WeatherBlock = ({ search }) => {
    console.log('WeatherBlock.js render')
    // fetch forecast data from weather stack api
    const [forecast, setForecast] = useState({data:null, loading:true})
    const unit = 'f'
    const url = `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER_STACK_KEY}&query=${search}&units=${unit}`

    const fetchWeather = async (url) => {
        const response = await fetch(url)
        const json = await response.json()
        setForecast({ data:json, loading:false })
    }

    useEffect(() => { // useEffect with search as a dependency so that it only runs when search changes
        if (search !== '') { // if statement so that this fetchWeather(url) does not run on initial render (this results in a failed API call because search query === '')
            fetchWeather(url)
        }
    }, [search])

    // toggle more info
    const [toggleinfo, setToggleInfo] = useState(false)
    
    return (
        <>
            {
                search === '' ? null :
                (forecast.loading && !forecast.data) ? <div className="loading">Loading...</div> :
                <div className="weatherblock">
                    <div className="box-1">
                        <div className="name">{forecast.data.location.name}</div>
                        <div className="region">{forecast.data.location.region}</div>
                        <div className="country">{forecast.data.location.country}</div>
                        <div className="date">{dayjs().format('dddd MMMM DD, YYYY')}</div>
                        <div className="time">Your local time: {dayjs().format('h:mm a')}</div>
                        <div className="info-save-container">
                            <div className="toggleinfo" onClick={() => setToggleInfo(!toggleinfo)}>more info</div>
                            <div className="save" onClick={() => setToggleInfo(!toggleinfo)}>save</div>
                        </div>
                    </div>
                    <div className="box-2">
                        <img className="icon" src={sunnyDay} alt="weather_icon"/>
                        <div className="description">{forecast.data.current.weather_descriptions[0]}</div>
                    </div>
                    <div className="box-3">
                        <div className="temperature">{forecast.data.current.temperature}</div>
                        <div className="feelslike">feels like: {forecast.data.current.feelslike}</div>
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
                            <div className="humidity">humidity: {forecast.data.current.humidity}</div>
                            <div className="precip">chance of precipitation: {forecast.data.current.precip}</div>
                            <div className="windspeed">wind speed: {forecast.data.current.wind_speed}</div>
                            <div className="winddirection">wind direction: {forecast.data.current.wind_dir}</div>
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