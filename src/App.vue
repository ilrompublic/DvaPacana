<template>
    <div class="app">
        <div class="app__selected">
            <SelfBasket></SelfBasket>
            <OtherBasket></OtherBasket>
        </div>
        <div class="app__lists">
            <Self></Self>
            <Other></Other>
        </div>
    </div>
</template>

<script>
    import Self from './components/Self';
    import SelfBasket from './components/SelfBasket';
    import Other from './components/Other';
    import OtherBasket from "./components/OtherBasket";

    export default {
        name: 'App',
        components: {
            Self,
            SelfBasket,
            Other,
            OtherBasket,
        },
    };
</script>

<style lang="scss" scoped>
    @import "./styles/main";

    .app {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        gap: 20px;

        &__selected {
            display: flex;
            justify-content: space-between;
            gap: 20px;
        }

        &__lists {
            flex:1;
            display: flex;
            gap: 20px;

            & > * {
                width: 50%;
            }
        }
    }
</style>
