const weather = (address, unit) => {
    const url = `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER_STACK_KEY}&query=${address}&units=${unit}`

    const result = fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(e => e)
    
    return result

}

export default weather