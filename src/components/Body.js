import Search from './Search'
import WeatherBlock from './WeatherBlock'

const Body = ({ search, setSearch }) => {

    return (
        <>
            <div className="body-container">
                <Search 
                    setSearch={setSearch}
                />
                <WeatherBlock 
                    search={search}
                />
            </div>
        </>
    );
}

export default Body