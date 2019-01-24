import axios from 'axios';

const { VUE_APP_KEY } = process.env;

const store = {
    state: {
        isFetching: false,
        isFetched: false,
        departure: [],
        arrivals: [],
    },
    getters: {},
    mutations: {},
    actions: {
        FETCH_DEPARTURE_FLIGHTS(store, { airport, date }) {
            axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.rasp.yandex.net/v3.0/schedule/?lang=ru_RU&apikey=${VUE_APP_KEY}&transport_types=plane&station=${airport}&event=departure&format=json&date=${date}&system=iata&page=1`,)
                .then(response => (console.log(response.data.schedule)))
                .catch(error => console.log(error));


        },

        FETCH_ARRIVAL_FLIGHTS(store, { airport, date }) {
            axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.rasp.yandex.net/v3.0/schedule/?lang=ru_RU&apikey=${VUE_APP_KEY}&transport_types=plane&station=${airport}&event=arrival&format=json&&date=${date}&system=iata&page=1`)
                .then(response => (console.log(response.data.schedule)))
                .catch(error => console.log(error));
        },
    },
};

export default store;
