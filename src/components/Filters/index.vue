<template>
    <div class="filters">
        <div class="filters__container">
            <filter-select
                    class="filters__filter"
                    :items="selectFlightTypeData"
                    :selectPlaceholder="selectTypePlaceholder"
                    :selectLabel="selectTypeLabel"
                    @option-selected="onTypeSelectHandler"
            />
            <filter-select
                    class="filters__filter"
                    :items="selectAirportData"
                    :selectPlaceholder="selectAirportPlaceholder"
                    :selectLabel="selectAirportLabel"
                    @option-selected="onAirportSelectHandler"
            />
            <filter-select
                    class="filters__filter"
                    :items="selectDaysData"
                    :selectPlaceholder="selectDaysPlaceholder"
                    :selectLabel="selectDaysLabel"
                    @option-selected="onDaysSelectHandler"
            />
            <button
                    class="filters__search-button"
                    @click="onGlobalSearchClickHandler"
            >
                Найти
            </button>
        </div>
    </div>
</template>

<script>
    import FilterSelect from './FilterSelect';

    export default {
        name: 'Filters',

        components: {
            FilterSelect,
        },

        props: {
            selectTypePlaceholder: {
                type: String,
                default: '',
            },

            selectDaysPlaceholder: {
                type: String,
                default: '',
            },

            selectAirportPlaceholder: {
                type: String,
                default: '',
            },

            selectTypeLabel: {
                type: String,
                default: '',
            },

            selectDaysLabel: {
                type: String,
                default: '',
            },

            selectAirportLabel: {
                type: String,
                default: '',
            },

            selectFlightTypeData: {
                type: Object,
                default: () => {
                },
            },

            selectAirportData: {
                type: Object,
                default: () => {
                },
            },

            selectDaysData: {
                type: Object,
                default: () => {
                },
            },
        },

        methods: {
            onTypeSelectHandler(evt) {
                this.$emit('type-change', evt)
            },

            onAirportSelectHandler(evt) {
                this.$emit('airport-change', evt)
            },

            onDaysSelectHandler(evt) {
                this.$emit('day-change', evt)
            },

            onGlobalSearchClickHandler() {
                this.$emit('fetch-request')
            }
        },
    }
</script>

<style lang="scss">
    .filters {
        margin-bottom: 15px;

        &__filter {
            margin-right: 20px;

            @media (max-width: 400px) {
                margin-right: 0;
                margin-bottom: 20px;
            }
        }

        &__container {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: flex-end;

            @media (max-width: 400px) {
                flex-direction: column;
            }
        }

        &__search-button {
            display: block;
            width: 150px;
            margin-top: 10px;
            padding: 10px 40px;
            font-family: 'Roboto Regular', 'Arial', sans-serif;
            font-size: 14px;
            background-color: rgb(255, 219, 77);
            border: none;
            border-radius: 2px;
            cursor: pointer;

            @media (max-width: 400px) {
                width: 100%;
            }
        }

    }
</style>
