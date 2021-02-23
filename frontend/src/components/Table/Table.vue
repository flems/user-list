<template>
    <div class="table-vue">
        <table class="table-vue__table" v-if="data && data.length">
            <thead class="table-vue__head">
                <tr>
                    <th class="table-vue__cell table-vue__cell--head" @click="sort('id')">id</th>
                    <th class="table-vue__cell table-vue__cell--head" @click="sort('firstName')">firstName</th>
                    <th class="table-vue__cell table-vue__cell--head" @click="sort('lastName')">lastName</th>
                    <th class="table-vue__cell table-vue__cell--head" @click="sort('email')">email</th>
                    <th class="table-vue__cell table-vue__cell--head" @click="sort('phone')">phone</th>
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
        },
        sort (key) {
            this.$emit('sort', key)
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
        position: relative;

        &--head {
            cursor: pointer;

            &:hover {
                background: #ccc;
            }

            &:after,
            &:before {
                content: '';
                width: 0;
                height: 0;
                border-style: solid;
                position: absolute;
                right: 16px;
                top: 40%;
                opacity: 0.1;
            }

            &:before {
                border-color: transparent transparent #000 transparent;
                border-width: 0 6px 6px 6px;
                transform: translateY(-80%);
            }

            &:after {
                border-width: 6px 6px 0 6px;
                border-color: #000 transparent transparent transparent;
                transform: translateY(80%);
            }
        }
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
