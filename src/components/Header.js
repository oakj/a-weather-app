import cloudSun from '../assets/cloud-sun.svg'
import '../styles/Header.scss'

const Header = () => {
    return (
        <>
            <div className="container">
                <img src={cloudSun} alt="weather-logo"/>
                <h1>a weather app</h1>
            </div>
        </>
    );
}

export default Header