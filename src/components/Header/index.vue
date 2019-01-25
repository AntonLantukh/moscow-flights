<template>
  <div class="header">
      <div class="header__container">
          <h1>Яндекс Москва. Полёты</h1>
          <div>
              <img class="header__logo" :src="pathLogo" alt="logo">
          </div>
          <nav class="header__navigation">
              <ul class="header__navigation_wrapper">
                  <li class="header__navigation_item" @click="onClickHandler"
                  >
                      Вылеты
                  </li>
                  <li class="header__navigation_item">Прилеты</li>
              </ul>
          </nav>
      </div>
  </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
    name: 'Main-header',

    data() {
        return {
            pathLogo: './logo.png',
            airports: {
                Шереметьево: 'SVO',
                Домодедово: 'DME',
                Внуково: 'VKO',
                Жуковский: 'ZIA',
            }
        }
    },

    methods: {
        ...mapActions({
            fetchDepartureFlights: 'FETCH_DEPARTURE_FLIGHTS',
            fetchArrivalFlights: 'FETCH_ARRIVAL_FLIGHTS'
        }),

        onClickHandler() {
            this.fetchDepartureFlights({ airport: 'dme', date: '2019-01-25' })
        }
    }
  }
</script>

<style lang="scss">
  .header {
      width: 100%;
      margin-bottom: 30px;

      &__container {
          display: flex;
          justify-content: space-around;
          align-items: center;
          width: 1136px;
          margin: 0 auto 0 auto;
      }

      &__navigation_wrapper {
          display: flex;
          padding: 0;
          list-style: none;
      }

      &__navigation_item {
          padding: 20px;
          font-size: 32px;
          line-height: 38px;

          &:nth-child(1) {
              position: relative;
              margin-right: 25px;

              &::after {
                  position: absolute;
                  top: 5px;
                  right: -20px;
                  content: '';
                  height: 70px;
                  width: 1px;
                  background-color: black;
              }
          }
      }

      &__logo {
          width: 120px;
          height: 60px;
      }
  }
</style>
