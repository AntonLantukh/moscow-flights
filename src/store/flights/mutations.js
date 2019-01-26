const sortDataFlight = (data, state, type) => {
    const station = data.station.code;
    const total = data.pagination.total;
    const date = data.date;
    const flights = [];

    data.schedule.forEach((item) => {
        let flight = {};

        flight[type] = item[type];
        flight.target = item.thread.title;
        flight.target = item.thread.title;
        flight.carrier = item.thread.carrier.title;
        flight.vehice = item.thread.vehicle;
        flight.number = item.thread.number;

        flights.push(flight);
        flight = {};
    });

    if (!state[type][station]) {
        state[type][station] = {};
    }

    if (!state[type][station][date]) {
        state[type][station][date] = {};
    }

    state[type][station][date].schedule = flights;
    state[type][station][date].total = total;
};

export default {
    SET_DEPARTURE_FLIGHTS: (state, { data }) => {
        sortDataFlight(data, state, 'departure');
    },

    SET_ARRIVAL_FLIGHTS: (state, { data }) => {
        sortDataFlight(data, state, 'arrival');
    },

    SET_IS_FETCHING: (state) => {
        state.isFetching = true;
    },

    SET_IS_FETCHED: (state) => {
        state.isFetching = false;
    },
};
