<template>
  <div class="page-body">
    <div class="page-body__container">
        <filters
            :selectDaysPlaceholder="selectDaysPlaceholder"
            :selectAirportPlaceholder="selectAirportPlaceholder"
            :inputSearchPlaceholder="inputSearchPlaceholder"
            :selectAirportData="selectAirportData"
            :selectDaysData="selectDaysData"
            @airport-change="onAirportChangeHandler"
            @day-change="onDayChangeHandler"
            @search-change="onSearchChangeHandler"
        />
        <button
            class="page-body__search-button"
            @click="onGlobalSearchClickHandler"
        >
            Найти рейсы
        </button>
        <flight-info></flight-info>
    </div>
  </div>
</template>

<script>
    import FlightInfo from '../FlightInfo';
    import Filters from '../Filters';
    import { mapActions } from 'vuex'
    import moment from 'moment';

    export default {
        name: 'Flights',

        components: {
            FlightInfo,
            Filters,
        },

        data() {
            return {
                selectDaysPlaceholder: 'Укажите дату',
                selectAirportPlaceholder: 'Укажите аэропорт',
                inputSearchPlaceholder: 'Поиск по номеру рейса, городу и авиакомпании',
                selectAirportData: {
                    svo: 'Шереметьево',
                    dme: 'Домодедово',
                    vko: 'Внуково',
                    zia: 'Жуковский',
                },
                selectedAirport: '',
                selectedDay: '',
                searchInput: '',
            }
        },

        computed: {
            selectDaysData() {
                return {
                    yesterday: moment().add(-1, 'day').endOf('day').format('YYYY-MM-DD'),
                    today: moment().endOf('day').format('YYYY-MM-DD'),
                    tomorrow: moment().add(1, 'day').endOf('day').format('YYYY-MM-DD'),
               }
            }
        },

        methods: {
            ...mapActions({
                fetchFlights: 'FETCH_FLIGHTS'
            }),

            onAirportChangeHandler(evt) {
                this.selectedAirport = evt;
            },

            onDayChangeHandler(evt) {
                this.selectedDay = evt;
            },

            onSearchChangeHandler(evt) {
                this.searchInput = evt;
            },

            onGlobalSearchClickHandler() {
                this.fetchFlights({ type: 'arrival', airport: this.selectedAirport, date: this.selectedDay })
            }
        }
    }
</script>

<style lang="scss">
    .page-body {
        width: 100%;
        margin-bottom: 30px;

        &__container {
            width: 1136px;
            margin: 0 auto;
        }

        &__search-button {
            display: block;
            width: 200px;
            margin: 0 auto 15px auto;
            padding: 10px 60px;
            font-family: 'Roboto Regular', 'Arial', sans-serif;
            background-color: rgba(0, 0, 0, 0.1);
            border: 1px dashed black;
            cursor: pointer;
        }
  }
</style>
