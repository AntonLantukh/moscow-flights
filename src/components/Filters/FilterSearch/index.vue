<template>
    <div class="filter-search">
        <input
            type="text"
            class="filter-search__input"
            :placeholder="searchPlaceholder"
            ref="input"
        >
        <button
            class="filter-search__button"
            @click="onInputSearchHandler"
        >
          Искать
        </button>
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
            onInputSearchHandler() {
                this.$emit('search-input', this.$refs.input.value)
            }
        }
    }
</script>

<style lang="scss">
    .filter-search {
        font-size: 14px;
        display: flex;
        align-items: baseline;

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
        }

        &__button {
            display: block;
            width: 150px;
            margin-left: 15px;
            padding: 10px 40px;
            font-family: 'Roboto Regular', 'Arial', sans-serif;
            font-size: 14px;
            background-color: rgb(255, 219, 77);
            border: none;
            border-radius: 2px;
            cursor: pointer;
        }
    }
</style>
