<template>
    <div class="footer">
        <div class="footer__container">
            <p>Данные предоставлены сервисом Яндекс.Расписания</p>
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

        &__container {
            width: 520px;
            margin: 0 auto 0 auto;
            padding: 15px;
            vertical-align: center;
        }
  }
</style>
