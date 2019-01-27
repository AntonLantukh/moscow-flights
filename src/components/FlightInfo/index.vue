<template>
    <transition name="fade">>
        <div class="flight-info">
            <div class="flight-info__container">
                <div class="flight-info__wrapper">
                    <p class="flight-info__param flight-info__param_time">{{ item.time }}</p>
                    <p class="flight-info__param flight-info__param_target">{{ item.target }}</p>
                    <p class="flight-info__param flight-info__param_carrier">{{ item.carrier }}</p>
                    <p class="flight-info__param flight-info__param_vehicle">{{ item.vehicle }}</p>
                    <p class="flight-info__param flight-info__param_number">{{ item.number }}</p>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'FlightInfo',

        props: {
            item: {
                type: Object,
                default: () => {},
            },
        },
    }
</script>

<style lang="scss">
    .fade-enter-active, .fade-leave-active {
        transition: opacity 1s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .flight-info {
        width: 100%;
        margin-bottom: 15px;

        &__container {
            display: flex;
            flex-direction: column;
        }

        &__wrapper {
            width: 712px;
            margin: 0 auto 10px auto;
            padding: 20px 50px;
            border: 1px solid rgb(255, 219, 77);
            background-color: rgb(248, 248, 248);
            vertical-align: center;
        }

        &__param {
            display: inline-block;
            vertical-align: middle;
            font-size: 14px;


            &_time {
                width: 100px;
                font-size: 20px;
            }

            &_target {
                width: 200px;
            }

            &_carrier {
                width: 150px;
            }

            &_vehicle {
                width: 170px;
            }

            &_number {
                width: auto;
                font-size: 18px;
            }
        }
    }
</style>
