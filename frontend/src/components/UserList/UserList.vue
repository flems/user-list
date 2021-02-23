<template>
    <div class="user-list">
        <search @search="search" />
        <custom-table
            :data="list"
            :count="count"
        />
        <pagination
            :currentPage="currentPage"
            :perPage="perPage"
            :count="count"
            :total="total"
            @showMore="showMore"
        />
    </div>
</template>

<script>
import { mapMutations, mapActions, mapState, mapGetters } from 'vuex'
import Search from '@/components/Search/Search.vue'
import CustomTable from '@/components/Table/Table.vue'
import Pagination from '@/components/Pagination/Pagination.vue'

export default {
    name: 'user-list',
    components: {
        Search,
        CustomTable,
        Pagination
    },
    computed: {
        ...mapState({
            currentPage: state => state.userList.pagination.currentPage,
            perPage: state => state.userList.pagination.perPage,
            list: state => state.userList.list
        }),
        ...mapGetters([
            'count',
            'total'
        ])
    },
    methods: {
        ...mapActions([
            'getData',
            'showMore'
        ]),
        ...mapMutations([
            'filterData',
            'setCurrentPage'
        ]),
        search (params) {
            this.setCurrentPage(1)
            this.filterData(params)
        }
    },
    created () {
        this.getData()
    }
}
</script>

<style lang="scss">
</style>
