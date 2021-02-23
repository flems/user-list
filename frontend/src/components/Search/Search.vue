<template>
    <div class="search">
        <form class="search__form" @submit.prevent="search">
            <input
                type="text"
                class="search__field"
                placeholder="Поиск..."
                v-model="params.q"
                @input="search"
                @change="search"
            >
            <button type="submit">Отправить</button>
        </form>
    </div>
</template>

<script>
import { updateUrl } from '@/utils/index.js'
import { mapMutations, mapState } from 'vuex'

export default {
    name: 'search',
    computed: {
        ...mapState({
            params: state => state.userList.params
        })
    },
    methods: {
        ...mapMutations([
            'sortData',
            'filterData',
            'setCurrentPage'
        ]),
        search () {
            this.setCurrentPage(1)
            this.filterData()
            this.sortData()
            updateUrl(this.params)
        }
    }
}
</script>

<style lang="scss">
</style>
