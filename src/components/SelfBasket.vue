<template>
    <div class="self-basket">
        <div>
            <Thing v-for="item in computedList" :key="item.id" :onSelect="onSelect" :item="item"></Thing>
        </div>
        <div>
            selected: {{selected.length}} / {{count}}
        </div>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
import Thing from './Thing';

export default {
    name: "SelfBasket",
    components: {
        Thing,
    },
    computed: {
        ...mapState({
            list: state => state.self.list,
            selected: state => state.self.selected,
            count: state => state.self.count,
        }),
        computedList () {
            return this.list.filter(item => this.selected.includes(item.id));
        },
    },
    methods: {
        ...mapActions({
            selectSelf: 'selectSelf',
        }),
        onSelect (id) {
            this.selectSelf(id);
        },
    },
}
</script>

<style lang="scss" scoped>
    .self-basket {
        border: 1px solid black;
        padding: 0 20px 20px 0;
        max-width: calc(50% - 20px);
        min-width: 190px;
        display: flex;
        flex-direction: column;
        gap:20px;

        & > *:last-child {
            text-align: right;
        }
    }
</style>