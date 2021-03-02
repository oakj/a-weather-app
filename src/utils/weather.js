import { useEffect } from 'react'

const weather = ( url ) => {
    let data = {}
    useEffect( async () => { //useEffect so that the api doesn't get fetched on every render
        const response = await fetch(url)
        const data = await response.json()
        console.log('weather.js useEffect: ', data)
        return(data)
    }, [])
    return(data)
}

export default weather