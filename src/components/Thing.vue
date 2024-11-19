<template>
    <div class="thing" @click="onSelect(item.id)">
        <span>{{item.name}}</span>
    </div>
</template>

<script>
export default {
    name: "Thing",
    props: [
        'item',
        'onSelect',
    ],
}
</script>

<style lang="scss" scoped>
    .thing {
        width: 75px;
        height: 75px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 1px solid black;
        margin: 20px 0 0 20px;
        cursor: pointer;
    }
</style>