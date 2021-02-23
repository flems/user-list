<template>
    <div class="pagination" v-show="isShown">
        <button @click="showMore">Показать еще</button>
    </div>
</template>

<script>
export default {
    name: 'pagination',
    props: {
        total: {
            type: Number,
            defaul: 0
        },
        currentPage: {
            type: Number,
            default: 1
        },
        perPage: {
            type: Number,
            default: 10
        },
        count: {
            type: Number,
            default: 0
        }
    },
    computed: {
        isShown () {
            return this.count < this.total
        }
    },
    methods: {
        showMore () {
            this.$emit('showMore')
        }
    }
}
</script>

<style lang="scss">
</style>
