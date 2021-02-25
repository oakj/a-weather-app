const request = require('postman-request')

const weather = (address) => {
    const unit = 'f'
    const url = `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER_STACK_KEY}&query=${address}&units=${unit}`

    request(url, (error, response) => {
        if (error) {
            return console.log(`Error ${error.code}.\n${error.type}.\n${error.info}`)
        }
        
        const data = response.body
        //console.log(data)
        return data
    })
}

export default weather