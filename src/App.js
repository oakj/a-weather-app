import Header from './components/Header'
import weather from './utils/weather'
import './styles/App.scss'

function App() {
    console.log('weather\n', weather)
    console.log('los angeles weather\n', weather('los angeles'))

    return (
        <div>
            <Header/>
            Hello World
        </div>
    );
}

export default App;