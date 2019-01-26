<template>
    <div class="flight-info">
        <div class="flight-info__container">
            <div class="flight-info__wrapper">
                 <p>00:05 26 января</p>
                 <p>Орск</p>
                 <p>EO 563</p>
            </div>
            <div class="flight-info__wrapper">
                <p>00:05 26 января</p>
                <p>Орск</p>
                <p>EO 563</p>
            </div>
            <div class="flight-info__wrapper">
                <p>00:05 26 января</p>
                <p>Орск</p>
                <p>EO 563</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FlightInfo',
    }
</script>

<style lang="scss">
    .flight-info {
        width: 100%;
        margin-bottom: 30px;

        &__container {
            display: flex;
            flex-direction: column;
        }

        &__wrapper {
            width: 700px;
            height: 50px;
            margin: 0 auto 10px auto;
            padding: 0 50px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border: 1px solid black;
            vertical-align: center;

            p {
                font-size: 18px;
                line-height: 22px;
            }
        }
    }
</style>
