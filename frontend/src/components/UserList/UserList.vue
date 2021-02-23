<template>
    <div class="user-list">
        <search class="mb-4" />
        <custom-table
            :data="list"
            :count="count"
            @selectRow="selectUser"
            @sort="sort"
            :sortParams="params.sort"
        />
        <pagination
            class="mt-4"
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
import { parseQueryString, updateUrl } from '@/utils/index.js'

export default {
    name: 'user-list',
    components: {
        Search,
        CustomTable,
        Pagination
    },
    computed: {
        ...mapState({
            list: state => state.userList.list,
            params: state => state.userList.params
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
            'setCurrentUser',
            'setParams',
            'filterData',
            'sortData',
            'setSortParams'
        ]),
        selectUser (user) {
            document.querySelector('body').style.overflow = 'hidden'
            this.setCurrentUser(user.id)
            updateUrl(this.params)
        },
        sort (key) {
            this.setSortParams(key)
            this.sortData()
            updateUrl(this.params)
        }
    },
    async created () {
        await this.getData()
        const query = window.location.search.substring(1)
        const params = parseQueryString(query)
        this.setParams(params)
        this.filterData()
        this.sortData()
    }
}
</script>

<style lang="scss">
</style>
