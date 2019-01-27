<template>
    <div class="filter-search">
        <input
            type="text"
            class="filter-search__input"
            :placeholder="searchPlaceholder"
            @input="onInputSearchHandler($event)"
        >
    </div>
</template>

<script>
    export default {
        name: "FilterSearch",

        props: {
            searchPlaceholder: {
                type: String,
                default: '',
            }
        },

        data() {
            return {
                showSelect: false,
            }
        },

        methods: {
            onInputSearchHandler(evt) {
                this.$emit('search-input', evt.target.value)
            }
        }
    }
</script>

<style lang="scss">
    .filter-search {
        font-size: 14px;
        display: flex;
        align-items: baseline;

        @media (max-width: 400px) {
            flex-direction: column;
        }

        &__input {
            min-width: 360px;
            height: 20px;
            padding: 18px;
            font-family: 'Roboto Regular', 'Arial', sans-serif;
            font-size: 14px;
            line-height: 0;
            box-sizing: border-box;
            border: 1px solid rgb(255, 219, 77);
            background: white;
            cursor: pointer;
            text-align: left;

            @media (max-width: 400px) {
                min-width: 100%;
                margin-bottom: 20px;
            }
        }
    }
</style>
