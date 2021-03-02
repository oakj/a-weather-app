import { useState } from 'react'
import magnify from '../assets/magnifying-glass.svg'

const Search = ({ setSearch }) => {
    const [input, setInput] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        setSearch(input)
    }

    return (
        <>
            <div className="search-container">
                <div className="search__box">
                    <img className="search__img" src={magnify} alt="magnifying-glass"/>
                    <form onSubmit={handleSubmit}>
                        <input className="search__input" value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="input an address"/>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Search