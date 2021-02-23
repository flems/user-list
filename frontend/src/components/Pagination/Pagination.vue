<template>
    <div class="pagination" v-show="isShown">
        <button @click="showMore">Показать еще</button>
    </div>
</template>

<script>
import { updateUrl } from '@/utils/index.js'
import { mapState } from 'vuex'

export default {
    name: 'pagination',
    props: {
        total: {
            type: Number,
            defaul: 0
        },
        count: {
            type: Number,
            default: 0
        }
    },
    computed: {
        isShown () {
            return this.count < this.total
        },
        ...mapState({
            params: state => state.userList.params,
        })
    },
    methods: {
        showMore () {
            this.$emit('showMore')
            updateUrl(this.params)
        }
    }
}
</script>

<style lang="scss">
</style>
