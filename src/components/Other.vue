<template>
    <div class="other">
        <Thing v-for="item in computedList" :key="item.id" :onSelect="onSelect" :item="item"></Thing>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
import Thing from './Thing';

export default {
    name: "Other",
    components: {
        Thing,
    },
    computed: {
        ...mapState({
            list: state => state.other.list,
            selected: state => state.other.selected,
        }),
        computedList () {
            return this.list.filter(item => !this.selected.includes(item.id));
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
    .other {
        border: 1px solid black;
        padding: 0 20px 20px 0;
    }
</style>