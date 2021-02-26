const weather = (address, unit) => {
    // unit can be 'f' for farenheit or 'm' for metric
    const url = `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER_STACK_KEY}&query=${address}&units=${unit}`

    const response = fetch(url)
    const data = response.json()
    return data
}

export default weather