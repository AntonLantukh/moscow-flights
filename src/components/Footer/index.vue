<template>
    <div class="footer">
        <div class="footer__container">
            <p>&copy; Данные предоставлены сервисом Яндекс.Расписания</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style lang="scss">
    .footer {
        width: 100%;
        margin-top: 30px;
        border-top: 1px solid black;

        &__container {
            width: 500px;
            margin: 0 0 0 auto;
            padding: 15px;
            vertical-align: center;
        }
  }
</style>
