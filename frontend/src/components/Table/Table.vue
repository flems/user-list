<template>
    <div class="table-vue">
        <table class="table-vue__table" v-if="data && data.length">
            <thead class="table-vue__head">
                <tr>
                    <th
                        :class="[
                            'table-vue__cell table-vue__cell--head',
                            getClass(item.key)
                        ]"
                        @click="sort(item.key)"
                        v-for="(item, index) in columns"
                        :key="index"
                        :style="`width: ${item.width}`"
                    >
                        <span>{{ item.name }}</span>
                    </th>
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
        <div v-else class="table-vue__empty-result">По вашему запросу ничего не найдено</div>
    </div>
</template>

<script>
export default {
    name: 'table-vue',
    props: {
        data: Array,
        count: Number,
        sortParams: Object
    },
    data () {
        return {
            columns: [
                {
                    name: 'id',
                    key: 'id',
                    width: '2%'
                },
                {
                    name: 'firstName',
                    key: 'firstName',
                    width: '10%'
                },
                {
                    name: 'lastName',
                    key: 'lastName',
                    width: '10%'
                },
                {
                    name: 'email',
                    key: 'email',
                    width: '20%'
                },
                {
                    name: 'phone',
                    key: 'phone',
                    width: '20%'
                }
            ]
        }
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
        },
        getClass (key) {
            if (this.sortParams.key !== key) return ''
            return `table-vue__cell--sorted-${this.sortParams.type}`
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
        border: 1px solid #eee;
    }

    &__cell {
        padding: 24px;
        position: relative;

        &--head {
            cursor: pointer;
            transition: color 0.2s ease-in;
            color: #525252;

            &:hover {
                color: #000;

                span {
                    &:after {
                        border-color: #000 transparent transparent transparent;
                    }
                }
            }

            span {
                position: relative;
                display: inline-block;
                padding-right: 32px;

                &:after{
                    content: '';
                    width: 0;
                    height: 0;
                    border-style: solid;
                    position: absolute;
                    right: 0;
                    top: 50%;
                    border-width: 6px 6px 0 6px;
                    border-color: #d6d6d6 transparent transparent transparent;
                    transform: translateY(-50%);
                    transition: transform 0.2s ease-in, border-color 0.2s ease-in;
                }
            }

        }

        &--sorted-asc,
        &--sorted-desc {
            color: #000;

            span {
                &:after {
                    border-color: #6cc16c transparent transparent transparent;
                }
            }

            &:hover {
                span {
                    &:after {
                        border-color: #6cc16c transparent transparent transparent;
                    }
                }
            }
        }

        &--sorted-desc {
            span {
                &:after {
                    transform: translateY(-50%) scale(1, -1);
                }
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

    &__empty-result {
        padding: 32px 0;
    }
}
</style>
