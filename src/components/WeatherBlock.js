import weather from '../utils/weather'

const WeatherBlock = () => {
    weather('los angeles', 'f')
    weather('los angeles', 'm')

    return (
        <>
        <div className="weatherblock-container">
            <div className="weatherblock">
            </div>
        </div>
        </>
    );
}

export default WeatherBlock

/* location_name: body.location.name,
location_country: body.location.country,
location_region: body.location.region,
time: body.location.localtime,
temperature: body.current.temperature,
weather_icon: body.current.weather_icons,
weather_description: body.current.weather_descriptions,
wind_speed: body.current.wind_speed,
wind_direction: body.current.wind_direction,
humidity: body.current.humidity,
precip: body.current.precip,
feelslike: body.current.feelslike */