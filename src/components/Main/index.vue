<template>
  <div class="page-body">
    <div class="page-body__container">
      <table>
          <thead>
              <tr>
                  <td>Время</td>
                  <td>Рейс</td>
                  <td>Вылет</td>
                  <td>Прилет</td>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>11:20:30</td>
                  <td>SU9898</td>
                  <td>Сейчас</td>
                  <td>Потом</td>
              </tr>
          </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Main',
  }
</script>

<style lang="scss">
    .page-body {
        width: 100%;
        margin-bottom: 30px;

        &__container {
            width: 520px;
            margin: 0 auto 0 auto;
            vertical-align: center;
        }
  }
</style>
