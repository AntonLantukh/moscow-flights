<template>
  <div class="header">
      <div class="header__container">
          <h1 class="header__title">Яндекс Москва. Полёты</h1>
          <div>
              <img class="header__logo" :src="pathLogo" alt="logo">
          </div>
          <nav class="header__navigation">
              <ul class="header__navigation_wrapper">
                  <li class="header__navigation_item" @click="onClickHandler">
                      Вылеты
                  </li>
                  <li class="header__navigation_item">
                      Прилеты
                  </li>
              </ul>
          </nav>
      </div>
  </div>
</template>

<script>
    export default {
    name: 'Main-Header',

    data() {
        return {
            pathLogo: './img/logo.png',
        }
    },
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

      &__title {
          font-family: 'Roboto Regular', sans-serif;
      }

      &__navigation {
          height: 80px;
          box-sizing: border-box;

          &_wrapper {
              display: flex;
              padding: 0;
              list-style: none;
          }

          &_item {
              padding: 20px 0;
              margin: 0 20px;
              font-size: 32px;
              line-height: 17px;
              cursor: pointer;

              &:nth-child(1) {
                  position: relative;
                  margin-right: 25px;

                  &::after {
                      position: absolute;
                      top: -6px;
                      right: -24px;
                      content: '';
                      height: 70px;
                      width: 1px;
                      background-color: black;
                  }
              }

              &:hover {
                  border-bottom: 1px dashed black;
              }
          }
      }

      &__logo {
          width: 120px;
          height: 60px;
      }
  }
</style>
