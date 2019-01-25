<template>
    <div>
        <filter-select></filter-select>
        <filter-select></filter-select>
        <filter-search></filter-search>
    </div>
</template>

<script>
    import FilterSelect from '../FilterSelect';
    import FilterSearch from '../FilterSearch';

    export default {
        name: "Filters",

        components: {
            FilterSelect,
        },
    }
</script>

<style scoped>

</style>
