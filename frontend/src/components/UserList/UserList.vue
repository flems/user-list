<template>
    <div class="user-list">
        <search />
        <custom-table
            :data="list"
            :count="count"
            @selectRow="selectUser"
        />
        <pagination
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
            'filterData'
        ]),
        selectUser (user) {
            this.setCurrentUser(user.id)
            updateUrl(this.params)
        }
    },
    async created () {
        await this.getData()
        const query = window.location.search.substring(1);
        const params = parseQueryString(query)
        this.setParams(params)
        this.filterData()
    }
}
</script>

<style lang="scss">
</style>
