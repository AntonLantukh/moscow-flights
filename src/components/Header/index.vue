<template>
  <div class="header">
      <div class="header__container">
          <div>
              <img class="header__logo" :src="pathLogo" alt="logo">
          </div>
          <nav class="header__navigation">
              <ul>
                  <li>Вылеты</li>
                  <li>Прилеты</li>
                  <li>Задержанные рейсы</li>
                  <li>Поиск по рейсу</li>
              </ul>
          </nav>
      </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Main-header',

    data() {
      return {
        pathLogo: './src/assets/logo.png',
      }
    },

    computed: {
      ...mapGetters([
        'getTotalCount', 'getTotalSum'
      ])
    }
  }
</script>

<style scoped>
  .header {
      width: 100%;
      margin-bottom: 30px;
      background-color: rgb(187, 225, 255);
  }

  .header__container {
      margin: 0 auto 0 auto;
      vertical-align: center;
  }

  .header__navigation {
      padding-top: 10px;
  }

  h3 {
      margin: 0;
  }

  .header__logo {
      width: 190px;
      height: 60px;
  }

  span {
      display: block;
      margin-left: 20px;
  }

</style>
