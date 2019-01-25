<template>
  <div id="app">
    <main-header></main-header>
    <router-view></router-view>
    <main-footer></main-footer>
  </div>
</template>

<script>
    import MainHeader from './components/Header';
    import MainFooter from './components/Footer';

    export default {
        name: 'app',
        components: {
            MainHeader,
            MainFooter,
        }
    }
</script>

<style>

</style>
