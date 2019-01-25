<template>
    <div class="filter-search">
        <input
            type="text"
            class="filter-search__input"
            :placeholder="searchPlaceholder"
            @input="onInputSearchHandler"
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
                this.$emit('search-input', evt.value)
            }
        }
    }
</script>

<style lang="scss">
    .filter-search {
        width: 200px;
        font-size: 14px;
        display: inline-block;

        &__input {
            height: 20px;
            border: 2px groove #ADD8E6;
            background: white;
            width: 200px;
            box-sizing: border-box;
            padding: 2px;
            line-height: 14px;
            cursor: pointer;
            text-align: left;
        }
    }
</style>
