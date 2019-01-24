<template>
  <div class="page-body">
    <div class="page-body__container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Main-body',
  }
</script>

<style scoped>
  .page-body {
    width: 100%;
    margin-bottom: 30px;
    background-color: rgb(187, 225, 255);
  }

  .page-body__container {
    margin: 0 auto 0 auto;
    vertical-align: center;
  }
</style>
