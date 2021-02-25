import cloudSun from '../assets/cloud-sun.svg'

const Header = () => {
    
    return (
        <>
            <header className="header__container">
                <img className="header__img" src={cloudSun} alt="weather-logo"/>
                <h1>a weather app</h1>
            </header>
        </>
    );
}

export default Header