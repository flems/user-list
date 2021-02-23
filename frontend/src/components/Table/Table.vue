<template>
    <div class="table-vue">
        <table class="table-vue__table" v-if="data && data.length">
            <thead class="table-vue__head">
                <tr>
                    <th class="table-vue__cell">id</th>
                    <th class="table-vue__cell">firstName</th>
                    <th class="table-vue__cell">lastName</th>
                    <th class="table-vue__cell">email</th>
                    <th class="table-vue__cell">phone</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="(item, index) in data">
                    <tr
                        class="table-vue__row"
                        :key="item.id"
                        v-if="index < rowsNumber"
                        @click="selectRow(item)"
                    >
                        <td class="table-vue__cell">{{ item.id }}</td>
                        <td class="table-vue__cell">{{ item.firstName }}</td>
                        <td class="table-vue__cell">{{ item.lastName }}</td>
                        <td class="table-vue__cell">{{ item.email }}</td>
                        <td class="table-vue__cell">{{ item.phone }}</td>
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
    },
    methods: {
        selectRow (item) {
            this.$emit('selectRow', item)
        }
    }
}
</script>

<style lang="scss">
.table-vue {
    &__head {
        text-align: left;
        background: #eee;
    }

    &__table {
        width: 100%;
        border-collapse: collapse;
    }

    &__cell {
        padding: 8px 16px;
    }

    &__row {
        cursor: pointer;
        transition: background 0.2s ease-in;

        &:hover {
            background: #f5f5f5;
        }
    }
}
</style>
