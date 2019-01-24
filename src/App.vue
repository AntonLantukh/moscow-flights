<template>
  <div id="app">
    <main-header></main-header>
    <router-view></router-view>
    <main-footer></main-footer>
  </div>
</template>

<script>
    import mainHeader from './components/Header';
    import mainFooter from './components/Footer';

    export default {
        name: 'app',
        components: {
            mainHeader,
            mainFooter,
        }
    }
</script>

<style>

</style>
