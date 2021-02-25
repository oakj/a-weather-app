import Search from './Search'
import WeatherBlock from './WeatherBlock'

const Body = () => {

    return (
        <>
            <div className="body-container">
                <Search/>
                <WeatherBlock/>
            </div>
        </>
    );
}

export default Body