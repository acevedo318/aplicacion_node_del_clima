const axios = require("axios");

const getClima = async (lat ,lng) => {
    
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=e01a8e7bdef15d3cca627ff0f426ed86&units=metric`)
    ;

    
    return await resp.data.main.temp;

}

module.exports = {
    getClima
}