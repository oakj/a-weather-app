// time and date control
import dayjs from 'dayjs'
// following dayjs modules are used to convert timezone
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
dayjs.extend(utc)
dayjs.extend(timezone)

// React imports
import { useState, useEffect } from 'react'

// SVG imports
import clearNight from '../assets/weather-descriptions/clear-night.svg'
import cloudy from '../assets/weather-descriptions/cloudy.svg'
import rainy from '../assets/weather-descriptions/rainy-6.svg'
import snowy from '../assets/weather-descriptions/snowy-6.svg'
import sunnyDay from '../assets/weather-descriptions/sunny-day.svg'
import thunder from '../assets/weather-descriptions/thunder.svg'

const WeatherBlock = ({ search }) => {
    console.log('WeatherBlock.js render')
    // fetch forecast data from weather stack api
    const [forecast, setForecast] = useState({data:null, loading:true})
    const [unit, setUnit] = useState('f')
    const url = `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER_STACK_KEY}&query=${search}&units=${unit}`

    const fetchWeather = async (url) => {
        const response = await fetch(url)
        const json = await response.json()
        setForecast({ data:json, loading:false })
        //console.log(forecast)
    }

    // function to match weather icon svg to weather description
    const weatherIcon = (weatherDescription) => {
        let icon
        switch(weatherDescription) {
            case 'Sunny':
                icon = sunnyDay
                break;
            case 'Clear':
                icon = clearNight
                break;
            case 'Partly cloudy':
                icon = cloudy
                break;
            case 'Cloudy':
            case 'Overcast':
            case 'Fog':
                icon = cloudy
                break;
            case 'Thundery outbreaks possible':
                icon = thunder
                break;
            case 'Mist':
            case 'Patchy rain possible':
            case 'Patchy freezing drizzle possible':
            case 'Patchy light drizzle':
            case 'Light drizzle':
            case 'Freezing drizzle':
            case 'Heavy freezing drizzle':
            case 'Patchy light rain':
            case 'Light rain':
            case 'Moderate rain at times':
            case 'Moderate rain':
            case 'Heavy rain at times':
            case 'Heavy rain':
            case 'Light freezing rain':
                icon = rainy
                break;
            case 'Patchy snow possible':
            case 'Patchy sleet possible':
            case 'Blowing snow':
            case 'Blizzard':
            case 'Freezing fog':
                icon = snowy
                break;
        }
        return icon
    }

    // handlers to change units
    const handleUnits = (x) => {
        setUnit(x)

        if ( x === 'f' ) {
            document.getElementById("f").classList.add("selected")
            document.getElementById("c").classList.remove("selected")
        }
        if ( x === 'm' ) {
            document.getElementById("c").classList.add("selected")
            document.getElementById("f").classList.remove("selected")
        }
    }

    useEffect(() => { // useEffect with search as a dependency so that it only runs when search changes
        if (search !== '') { // if statement so that this fetchWeather(url) does not run on initial render (this results in a failed API call because search query === '')
            console.log(url)
            fetchWeather(url)
        }
    }, [search, unit])

    // toggle more info
    const [toggleinfo, setToggleInfo] = useState(false)
    
    return (
        <>
            {
                search === '' ? null :
                (forecast.loading && !forecast.data) ? <div className="loading">Loading...</div> :
                forecast.data.success === false ? <div className="error">{`WeatherStack Error ${forecast.data.error.code}:\n${forecast.data.error.info}`}</div> :
                <div className="weatherblock">
                    <div className="box-1">
                        <div className="name">{forecast.data.location.name}</div>
                        <div className="region">{forecast.data.location.region}</div>
                        <div className="country">{forecast.data.location.country}</div>
                        <div className="date">{dayjs().format('dddd MMMM DD, YYYY')}</div>
                        <div className="time">{dayjs().tz(forecast.data.location.timezone_id).format('h:mm a')}</div>
                        <div className="info-save-container">
                            <div className="toggleinfo" onClick={() => setToggleInfo(!toggleinfo)}>more info</div>
                            <div className="save" onClick={() => setToggleInfo(!toggleinfo)}>save</div>
                        </div>
                    </div>
                    <div className="box-2">
                        <img className="icon" alt="weather_icon" src={weatherIcon(forecast.data.current.weather_descriptions[0])}/>
                        <div className="description">{forecast.data.current.weather_descriptions[0]}</div>
                    </div>
                    <div className="box-3">
                        <div className="temperature">{forecast.data.current.temperature}</div>
                        <div className="feelslike">feels like: {forecast.data.current.feelslike}</div>
                    </div>
                    <div className="box-4">
                        <div className="unit">unit</div>
                        <div className="f selected" id="f" onClick={() => handleUnits('f')}>F</div>
                        <div className="c" id="c" onClick={() => handleUnits('m')}>C</div>
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