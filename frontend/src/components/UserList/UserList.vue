<template>
    <div class="user-list">
        <custom-table></custom-table>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'user-list',
    components: {
        Search,
        CustomTable
    },
    methods: {
        ...mapActions([
            'getData'
        ])
    },
    created () {
        this.getData()
    }
}
</script>

<style lang="scss">
</style>
