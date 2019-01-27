import moment from 'moment';

const sortDataFlight = (data, state, type) => {
    const station = data.station.code;
    const total = data.pagination.total;
    const offset = data.pagination.offset;
    const date = data.date;
    const flights = [];

    data.schedule.forEach((item) => {
        let flight = {};

        moment.locale('ru');
        flight.time = moment(item[type]).format('LT');
        flight.target = item.thread.title;
        flight.carrier = item.thread.carrier.title;
        flight.vehicle = item.thread.vehicle;
        flight.number = item.thread.number;

        flights.push(flight);
        flight = {};
    });

    if (!state.flights[type][station]) {
        state.flights[type][station] = {};
    }

    if (!state.flights[type][station][date]) {
        state.flights[type][station][date] = {};
    }

    state.flights[type][station][date].schedule = flights;
    state.flights[type][station][date].total = total;
    state.flights[type][station][date].offset = offset;
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
