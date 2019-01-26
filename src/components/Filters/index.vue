<template>
    <div class="filters">
        <div class="filters__container">
            <filter-select
                :items="selectAirportData"
                :selectPlaceholder="selectAirportPlaceholder"
                @option-selected="onAirportSelectHandler"
            />
            <filter-select
                :items="selectDaysData"
                :selectPlaceholder="selectDaysPlaceholder"
                @option-selected="onDaysSelectHandler"
            />
            <filter-search
                :searchPlaceholder="inputSearchPlaceholder"
                @search-input="onItemSearchHandler"
            />
        </div>
    </div>
</template>

<script>
    import FilterSelect from './FilterSelect';
    import FilterSearch from './FilterSearch';

    export default {
        name: 'Filters',

        components: {
            FilterSelect,
            FilterSearch,
        },

        props: {
            selectDaysPlaceholder: {
                type: String,
                default: '',
            },

            selectAirportPlaceholder: {
                type: String,
                default: '',
            },

            inputSearchPlaceholder: {
                type: String,
                default: '',
            },

            selectAirportData: {
                type: Object,
                default: () => {},
            },

            selectDaysData: {
                type: Object,
                default: () => {},
            },
        },

        methods: {
            onAirportSelectHandler(evt) {
                this.$emit('airport-change', evt)
            },

            onDaysSelectHandler(evt) {
                this.$emit('day-change', evt)
            },

            onItemSearchHandler(evt) {
                this.$emit('search-change', evt)
            },
        },
    }
</script>

<style lang="scss">
    .filters {
        width: 100%;
        margin-bottom: 30px;

        &__container {
            display: flex;
            justify-content: space-between;
            width: 800px;
            margin: 0 auto;
        }

    }
</style>
