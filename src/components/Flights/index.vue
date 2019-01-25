<template>
  <div class="page-body">
    <div class="page-body__container">
        <filters></filters>
        <flight-info></flight-info>
    </div>
  </div>
</template>

<script>
    import FlightInfo from '../FlightInfo';
    import Filters from '../Filters';
    import moment from 'moment';

    export default {
        name: 'Flights',
        components: {
            FlightInfo,
        },
        computed: {
            selectDaysData() {
                return {
                    yesterday: moment(new Date()).add(-1, 'days'),
                    today: moment(new Date()),
                    tomorrow: moment(new Date()).add(1,'days'),
               }
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
  }
</style>
