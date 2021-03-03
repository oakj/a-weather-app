import { useState } from 'react'
import './styles/App.scss'
import Header from './components/Header'
import Body from './components/Body'

function App() {
    console.log('App.js render')
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