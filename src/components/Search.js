import magnify from '../assets/magnifying-glass.svg'

const Search = () => {

    return (
        <>
            <div className="search-container">
                <div className="search__box">
                    <img className="search__img" src={magnify} alt="magnifying-glass"/>
                    <input className="search__input" type="text" placeholder="input address"/>
                </div>
            </div>
        </>
    );
}

export default Search