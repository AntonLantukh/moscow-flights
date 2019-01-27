<template>
    <div class="flights">
        <flight-info
            v-for="(item, key) in filteredData"
            :item="item"
            :key="key"
        />
    </div>
</template>

<script>
    import FlightInfo from './FlightInfo';

    export default {
        name: 'Flights',

        props: {
            flightType: {
                type: String,
                default: '',
            },

            selectedAirport: {
                type: String,
                default: '',
            },

            selectedDay: {
                type: String,
                default: '',
            },

            searchInput: {
                type: String,
                default: '',
            },

            items: {
                type: Array,
                default: () => [],
            }
        },

        components: {
            FlightInfo,
        },

        computed: {
            filteredData() {
                const searchingValue = this.searchInput;

                if (!searchingValue) {
                    return this.items;
                }

                return this.items.filter((item) => {
                    return item.time.toLowerCase().includes((searchingValue).toLowerCase()) ||
                           item.target.toLowerCase().includes((searchingValue).toLowerCase()) ||
                           item.number.toLowerCase().includes((searchingValue).toLowerCase());
                });
            }
        }
    }
</script>

<style lang="scss">
    .flights {
        @media (max-width: 400px) {
            width: 100%;
            padding: 0 16px;
            box-sizing: border-box;
        }
    }
</style>
