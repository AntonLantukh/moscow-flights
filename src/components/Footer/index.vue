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
        border-top: 1px solid rgb(221, 220, 218);

        &__container {
            width: 500px;
            margin: 0 0 0 auto;
            padding: 20px;
            vertical-align: center;

            @media (max-width: 400px) {
                width: 100%;
                padding: 20px 16px;
                box-sizing: border-box;
            }

            p {
                font-size: 14px;
                line-height: 24px;
            }
        }
  }
</style>
