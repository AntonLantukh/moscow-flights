<template>
  <div class="header">
      <div class="header__container">
          <h1 class="header__title">
              <span class="header__title-red">Я</span>ндекс Москва. Полёты
          </h1>
      </div>
  </div>
</template>

<script>
    export default {
        name: 'Main-Header',
  }
</script>

<style lang="scss">
  .header {
      width: 100%;
      margin-bottom: 15px;

      @media (max-width: 400px) {
          margin-bottom: 5px;
      }

      &__container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 814px;
          padding: 20px 0;
          margin: 0 auto 0 auto;

          @media (max-width: 400px) {
              width: 100%;
              padding: 20px 16px;
              box-sizing: border-box;
          }
      }

      &__title {
          font-size: 34px;
          line-height: 40px;
          font-family: 'Roboto Regular', sans-serif;
          font-weight: 400;

          &-red {
              color: rgb(230, 20, 0);;
          }
      }

      &__logo {
          width: 120px;
          height: 60px;
      }
  }
</style>
