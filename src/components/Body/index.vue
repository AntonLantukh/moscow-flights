<template>
  <div class="page-body">
      <div :class="['page-body__wrapper', {'page-body__wrapper-loading': isFetching}]">
          <div class="page-body__container">
              <filters
                    :selectTypePlaceholder="selectTypePlaceholder"
                    :selectDaysPlaceholder="selectDaysPlaceholder"
                    :selectAirportPlaceholder="selectAirportPlaceholder"
                    :selectTypeLabel="selectTypeLabel"
                    :selectDaysLabel="selectDaysLabel"
                    :selectAirportLabel="selectAirportLabel"
                    :selectFlightTypeData="selectFlightTypeData"
                    :selectAirportData="selectAirportData"
                    :selectDaysData="selectDaysData"
                    @type-change="onTypeChangeHandler"
                    @airport-change="onAirportChangeHandler"
                    @day-change="onDayChangeHandler"
                    @fetch-request="onFetchRequest"
              />
              <div :class="['page-body__search', {'page-body__search-disable': !items.length}]">
                  <span class="page-body__label">
                      Поиск
                  </span>
                  <filter-search
                      :searchPlaceholder="inputSearchPlaceholder"
                      @search-input="onSearchChangeHandler"
                  />
              </div>
          </div>
      </div>
      <flights
          :flightType="selectedType"
          :selectedAirport="selectedAirport"
          :selectedDay="selectedDay"
          :searchInput="searchInput"
          :items="items"
      />
      <button
          :class="['page-body__button', 'page-body__button_early', {'page-body__button-loading': isFetching}]"
          v-show="earlyButtonAvailable"
          @click="onAddEarlyFetchRequest"
      >
          Раньше
      </button>
      <button
          :class="['page-body__button', 'page-body__button_late', {'page-body__button-loading': isFetching}]"
          v-show="lateButtonAvailable"
          @click="onAddLateFetchRequest"
      >
          Позже
      </button>
  </div>
</template>

<script>
    import Flights from '../Flights';
    import Filters from '../Filters';
    import FilterSearch from '../Filters/FilterSearch';
    import { mapActions, mapState } from 'vuex'
    import moment from 'moment';

    export default {
        name: 'Body',

        components: {
            Flights,
            FilterSearch,
            Filters,
        },

        data() {
            return {
                selectTypePlaceholder: 'Укажите тип рейса',
                selectDaysPlaceholder: 'Укажите дату',
                selectAirportPlaceholder: 'Укажите аэропорт',
                inputSearchPlaceholder: 'Поиск по номеру рейса, городу и авиакомпании',
                selectTypeLabel: 'Тип рейса',
                selectAirportLabel: 'Аэропорт',
                selectDaysLabel: 'Дата',
                selectFlightTypeData: {
                    departure: 'Вылет',
                    arrival: 'Прилет',
                },
                selectAirportData: {
                    s9600213: 'Шереметьево',
                    s9600216: 'Домодедово',
                    s9600215: 'Внуково',
                    s9850865: 'Жуковский',
                },
                selectedType: '',
                selectedAirport: '',
                selectedDay: '',
                searchInput: '',
                items: [],
            }
        },

        computed: {
            ...mapState({
                flights: 'flights',
                isFetching: 'isFetching',
            }),

            selectDaysData() {
                return {
                    yesterday: moment().add(-1, 'day').endOf('day').format('YYYY-MM-DD'),
                    today: moment().endOf('day').format('YYYY-MM-DD'),
                    tomorrow: moment().add(1, 'day').endOf('day').format('YYYY-MM-DD'),
               }
            },

            earlyButtonAvailable() {
                if (!this.items.length) {
                    return false
                }

                const offset =
                    this.flights[this.selectedType] &&
                    this.flights[this.selectedType][this.selectedAirport] &&
                    this.flights[this.selectedType][this.selectedAirport][this.selectedDay] ?
                     this.flights[this.selectedType][this.selectedAirport][this.selectedDay].offset : 0;

                return offset > 0;
            },

            lateButtonAvailable() {
                if (!this.items.length) {
                    return false
                }

                const offset = this.flights[this.selectedType][this.selectedAirport][this.selectedDay].offset;
                const total = this.flights[this.selectedType][this.selectedAirport][this.selectedDay].total;
                const diff = total - offset;

                return diff > 50;
            },
        },

        methods: {
            ...mapActions({
                fetchFlights: 'FETCH_FLIGHTS'
            }),

            onTypeChangeHandler(evt) {
                this.selectedType = evt;
            },

            onAirportChangeHandler(evt) {
                this.selectedAirport = evt;
            },

            onDayChangeHandler(evt) {
                this.selectedDay = this.selectDaysData[evt];
            },

            onSearchChangeHandler(evt) {
                this.searchInput = evt;
            },

            onFetchRequest() {
                if (this.flights[this.selectedType][this.selectedAirport] &&
                    this.flights[this.selectedType][this.selectedAirport][this.selectedDay] &&
                    this.flights[this.selectedType][this.selectedAirport][this.selectedDay].schedule.length > 0) {
                    this.items = this.flights[this.selectedType][this.selectedAirport][this.selectedDay].schedule;
                    return;
                }

                this.fetchFlights({ type: this.selectedType, airport: this.selectedAirport, date: this.selectedDay })
                    .then(() => this.items = this.flights[this.selectedType][this.selectedAirport][this.selectedDay].schedule );
            },

            onAddEarlyFetchRequest() {
                const offset = this.flights[this.selectedType][this.selectedAirport][this.selectedDay].offset;
                let newOffset;

                if (offset < 50) {
                    return;
                } else {
                    newOffset = offset - 50;
                }

                this.fetchFlights({ type: this.selectedType, airport: this.selectedAirport, date: this.selectedDay, offset: newOffset })
                    .then(() => this.items = this.flights[this.selectedType][this.selectedAirport][this.selectedDay].schedule );
            },

            onAddLateFetchRequest() {
                const offset = this.flights[this.selectedType][this.selectedAirport][this.selectedDay].offset;
                const total = this.flights[this.selectedType][this.selectedAirport][this.selectedDay].total;
                const diff = total - offset;
                let newOffset;

                if (diff <= 50) {
                    return;
                } else {
                    newOffset = offset + 50;
                }

                this.fetchFlights({ type: this.selectedType, airport: this.selectedAirport, date: this.selectedDay, offset: newOffset })
                    .then(() => this.items = this.flights[this.selectedType][this.selectedAirport][this.selectedDay].schedule );
            },
        },
    }
</script>

<style lang="scss">
    .page-body {
        width: 100%;
        margin-bottom: 30px;

        &__container {
            display: flex;
            flex-direction: column;
            width: 814px;
            margin: 0 auto;
            padding: 20px 0;

            @media (max-width: 400px) {
                width: 100%;
                padding: 20px 16px;
                box-sizing: border-box;
            }
        }

        &__wrapper {
            &-loading {
                position: relative;

                &::before {
                    position: absolute;
                    display: block;
                    width: 100%;
                    height: 100%;
                    content: '';
                    background-color: rgba(255, 255, 255, 0.7);
                    z-index: 10;
                }

                &::after {
                    position: absolute;
                    top: 25%;
                    left: calc(50% - 32px);
                    display: block;
                    width: 64px;
                    height: 64px;
                    margin: 0 auto;
                    content: '';
                    background-image: url('/img/loader.gif');
                    z-index: 20;
                }
            }
        }

        &__search {
            position: relative;
            margin-bottom: 20px;

            &-disable {
                &::before {
                    position: absolute;
                    top: 0;
                    left: 0;
                    display: block;
                    width: 100%;
                    height: 100%;
                    content: '';
                    background-color: rgba(255, 255, 255, 0.7);
                    z-index: 3;
                }
            }
        }

        &__label {
            display: block;
            margin-bottom: 5px;
        }

        &__button {
            position: fixed;
            top: 50%;
            display: block;
            width: 125px;
            margin: 0 auto 15px auto;
            padding: 10px 40px;
            font-family: 'Roboto Regular', 'Arial', sans-serif;
            font-size: 14px;
            background-color: rgb(255, 219, 77);
            border: none;
            border-radius: 2px;
            cursor: pointer;
            z-index: 50;

            @media (max-width: 400px) {
                position: relative;
            }

            &-loading {
                &::before {
                    position: absolute;
                    top: 0;
                    left: 0;
                    display: block;
                    width: 100%;
                    height: 100%;
                    content: '';
                    background-color: rgba(255, 255, 255, 0.7);
                    z-index: 10;
                }
            }

            &_early {
                left: 50px;

                @media (max-width: 400px) {
                    left: 0;
                    margin-bottom: 20px;
                }
            }

            &_late {
                right: 50px;

                @media (max-width: 400px) {
                    right: 0;
                }
            }
        }
  }
</style>
