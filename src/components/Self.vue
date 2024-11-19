<template>
    <div class="self">
        <Thing v-for="item in computedList" :key="item.id" :onSelect="onSelect" :item="item"></Thing>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
import Thing from './Thing';

export default {
    name: "Self",
    components: {
        Thing,
    },
    computed: {
        ...mapState({
            list: state => state.self.list,
            selected: state => state.self.selected,
        }),
        computedList () {
            return this.list.filter(item => !this.selected.includes(item.id));
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
    .self {
        border: 1px solid black;
        padding: 0 20px 20px 0;
    }
</style>