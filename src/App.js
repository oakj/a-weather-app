import { useState } from 'react'
import './styles/App.scss'
import Header from './components/Header'
import Body from './components/Body'

function App() {
    const [search, setSearch] = useState('')

    return (
        <div>
            <Header/>
            <Body 
                search={search} 
                setSearch={setSearch}
            />
        </div>
    );
}

export default App;