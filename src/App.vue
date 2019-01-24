<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
    import mainHeader from './components/Header';
    import mainFooter from './components/Footer';
    import mainBody from './components/Body';

    export default {
        name: 'app',
        components: {
            mainHeader,
            mainFooter,
            mainBody
        }
    }
</script>

<style>

</style>
