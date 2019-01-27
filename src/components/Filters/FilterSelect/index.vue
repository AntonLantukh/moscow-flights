<template>
    <div
        class="filter-select"
    >
        <span class="filter-select__label">
            {{ selectLabel }}
        </span>
        <button
            class="filter-select__title"
            ref="dropdown"
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

            selectLabel: {
                type: String,
                default: '',
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
        display: flex;
        flex-direction: column;
        position: relative;

        &__label {
            margin-bottom: 5px;
            font-size: 16px;
        }

        &__title {
            width: 200px;
            height: 20px;
            padding: 18px;
            box-sizing: border-box;
            font-family: 'Roboto Regular', 'Arial', sans-serif;
            font-size: 14px;
            line-height: 0;
            text-align: left;
            border: 1px solid rgb(255, 219, 77);
            background: white;
            cursor: pointer;
        }

        &__list {
            position: absolute;
            top: 64px;
            list-style: none;
            margin: 0;
            padding: 0;
            z-index: 5;
            background: white;
            width: 200px;
            border-right: 1px solid rgb(255, 219, 77);
            border-left: 1px solid rgb(255, 219, 77);
            border-bottom: 1px solid rgb(255, 219, 77);
            box-sizing: border-box;
        }

        &__item {
            padding: 18px;
            font-size: 14px;
            line-height: 0;
            cursor: pointer;

            &:nth-child(even) {
                background-color: rgb(250, 248, 242);
            }

            &:hover {
                background-color: rgb(255, 235, 160);
            }
        }
    }
</style>
