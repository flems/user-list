<template>
    <div class="table-vue">
        <table v-if="data && data.length">
            <thead>
                <tr>
                    <th>id</th>
                    <th>firstName</th>
                    <th>lastName</th>
                    <th>email</th>
                    <th>phone</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="(item, index) in data">
                    <tr :key="item.id" v-if="index < rowsNumber">
                        <td>{{ item.id }}</td>
                        <td>{{ item.firstName }}</td>
                        <td>{{ item.lastName }}</td>
                        <td>{{ item.email }}</td>
                        <td>{{ item.phone }}</td>
                    </tr>
                </template>
            </tbody>
        </table>
        <div v-else>Ничего не найдено</div>
    </div>
</template>

<script>
export default {
    name: 'table-vue',
    props: {
        data: Array,
        count: Number
    },
    computed: {
        rowsNumber () {
            if (this.count) {
                return this.count
            }

            return this.data.length
        }
    }
}
</script>

<style lang="scss">

</style>
