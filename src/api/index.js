import axios from 'axios';
const { VUE_APP_KEY } = process.env;

export function fetchFlights(type, airport, date) {
    // Using heroku to cope with cors problem
    return axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.rasp.yandex.net/v3.0/schedule/?lang=ru_RU&apikey=${VUE_APP_KEY}&transport_types=plane&station=${airport}&event=${type}&format=json&date=${date}&system=iata&page=1`)
}
