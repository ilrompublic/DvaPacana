<template>
    <div class="other-basket">
        <div>
            <Thing v-for="item in computedList" :key="item.id" :onSelect="onSelect" :item="item"></Thing>
        </div>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
import Thing from './Thing';

export default {
    name: "OtherBasket",
    components: {
        Thing,
    },
    computed: {
        ...mapState({
            list: state => state.other.list,
            selected: state => state.other.selected,
            count: state => state.other.count,
        }),
        computedList () {
            return this.list.filter(item => this.selected.includes(item.id));
        },
    },
    methods: {
        ...mapActions({
            selectOther: 'selectOther',
        }),
        onSelect (id) {
            this.selectOther(id);
        },
    },
}
</script>

<style lang="scss" scoped>
    .other-basket {
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