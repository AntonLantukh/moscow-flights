<template>
    <div
        class="filter-select"
        ref="dropdown"
    >
        <button
            class="filter-select__title"
            @click="onSelectClickHandler"
        >
            {{ selectedItem || selectPlaceholder }}
        </button>
        <ul
            class="filter-select__list"
            v-show="showSelect"
        >
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

            selectPlaceholder: {
                type: String,
                default: '',
            }
        },

        data() {
            return {
                showSelect: false,
                selectedItem: '',
            }
        },

        methods: {
            onSelectClickHandler() {
              this.showSelect = !this.showSelect;
            },

            onListItemClickHandler(value) {
                this.selectedItem = this.items[value];
                this.$emit('option-selected', value)
            },

            documentClick(e){
                let el = this.$refs.dropdown;
                let target = e.target;
                if (el !== target && !el.contains(target)) {
                  this.showSelect=false;
                }
            },
        },

        created () {
            document.addEventListener('click', this.documentClick)
        },

        destroyed () {
            document.removeEventListener('click', this.documentClick)
        },
    }
</script>

<style lang="scss">
    .filter-select {
        width: 200px;
        font-size: 14px;
        display: inline-block;
        position: relative;

        &__title {
            width: 230px;
            height: 20px;
            padding: 18px;
            box-sizing: border-box;
            font-family: 'Roboto Regular', 'Arial', sans-serif;
            font-size: 14px;
            color: rgba(0, 0, 0, 0.6);
            line-height: 0;
            text-align: left;
            border: 1px dashed black;
            background: white;
            cursor: pointer;
        }

        &__list {
            position: absolute;
            list-style: none;
            margin: 0;
            padding: 0;
            z-index: 1000;
            background: white;
            width: 230px;
            border-right: 1px dashed black;
            border-left: 1px dashed black;
            border-bottom: 1px dashed black;
            box-sizing: border-box;
        }

        &__item {
            padding: 18px;
            font-size: 14px;
            line-height: 0;
            cursor: pointer;

            &:nth-child(even) {
                background-color: rgba(69, 69, 69, 0.1);
            }

            &:hover {
                background-color: rgba(69, 69, 69, 0.3);
            }
        }
    }
</style>
