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
        width: 200px;
        font-size: 14px;
        display: flex;
        align-items: center;

        &__input {
            width: 230px;
            height: 20px;
            padding: 18px;
            font-family: 'Roboto Regular', 'Arial', sans-serif;
            font-size: 14px;
            line-height: 0;
            box-sizing: border-box;
            border: 1px dashed black;
            background: white;
            cursor: pointer;
            text-align: left;
        }

        &__button {
            padding: 12px;
            width: 100px;
            margin-left: 15px;
            font-family: 'Roboto Regular', 'Arial', sans-serif;
            background-color: rgba(0, 0, 0, 0.1);
            border: 1px dashed black;
            cursor: pointer;
        }
    }
</style>
