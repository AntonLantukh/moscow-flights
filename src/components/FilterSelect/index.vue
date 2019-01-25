<template>
    <div class="filter-select">
        <button
            class="filter-select__title"
            v-show="showSelect"
            @click="onSelectClickHandler"
        >
            {{ placeholder }}
        </button>
        <ul class="filter-select__list">
            <li
                class="filter-select__item"
                v-for="(item, key, index) in items"
                :key="index"
                @click="onListItemClickHandler(key)"
            >
                {{ item }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "FilterSelect",

        props: {
            items: {
                type: Object,
                default: () => {},
            },

            placeholder: {
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
            onSelectClickHandler() {
              this.showSelect = !this.showSelect;
            },

            onListItemClickHandler(value) {
                this.$emit('option-selected', value)
            }
        }
    }
</script>

<style lang="scss">
    .filter-select {
        width: 200px;
        font-size: 14px;
        display: inline-block;

        &__title {
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

        &__list {
            list-style: none;
            margin: 0;
            padding: 0;
            display: none;
            position: absolute;
            z-index: 1000;
            background: white;
            width: 200px;
            border-bottom: 1px solid #add8e6;
            border-left: 1px solid #add8e6;
            border-right: 1px solid #add8e6;
            box-sizing: border-box;

            &-open {
                display: block;
            }
        }

        &__item {
            padding: 5px;
            cursor: pointer;

            &:nth-child(even) {
                background-color: #f0f8ff;
            }

            &:hover {
                background-color: #7fffd4;
            }
        }
    }
</style>
