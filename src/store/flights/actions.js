import { fetchFlights } from '../../api'

export default {
    FETCH_FLIGHTS: ({ commit }, { type, airport, date }) => {
        commit('SET_IS_FETCHING');
        fetchFlights(type, airport, date)
            .then(response => {
                const data = response.data;

                if (type === 'arrival') {
                    commit('SET_ARRIVAL_FLIGHTS', { data });
                } else if (type === 'departure') {
                    commit('SET_DEPARTURE_FLIGHTS', { data });
                }

                commit('SET_IS_FETCHED');
            })
            .catch(error => console.error(error));
    },
}
