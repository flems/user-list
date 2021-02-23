<template>
    <div class="search">
        <form class="search__form" @submit.prevent="search">
            <div class="search__container">
                <input
                    type="text"
                    class="search__field"
                    v-model="params.q"
                    @input="search"
                    @change="search"
                >
                <span
                    class="search__placeholder"
                    v-if="params.q === ''"
                >
                    Поиск...
                </span>
            </div>
            <button class="search__btn" type="submit">Найти</button>
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
            'setSortParams',
            'filterData',
            'setCurrentPage'
        ]),
        search () {
            this.setCurrentPage(1)
            this.filterData()
            this.setSortParams(null)
            updateUrl(this.params)
        }
    }
}
</script>

<style lang="scss">
.search {
    &__form {
        display: flex;
    }

    &__container {
        position: relative;
    }

    &__placeholder {
        position: absolute;
        bottom: 0;
        height: 100%;
        width: 100%;
        left: 0;
        padding: 12px 16px;
        pointer-events: none;
        color: #525252;
        transition: all 0.2s ease-in;
    }

    &__field {
        border: 1px solid #efefef;
        padding: 12px 16px;
        font-size: 14px;
        outline: none;
        transition: border-color 0.2s ease-in;
        border-right: none;

        &:focus {
            border-color: #f0be48;
            border-color: #dcdde0;

            + .search__placeholder {
                display: none;
            }
        }
    }

    &__btn {
        line-height: 1.5;
        padding: 12px 24px;
        cursor: pointer;
        outline: none;
        background: #efefef;
        border: none;
        color: #4a4a4e;
        font-size: 13px;
        transition: background 0.2s ease-in, color 0.2s ease-in;
        font-weight: 700;
        text-transform: uppercase;

        &:hover {
            background: #f0be48;
            color: #fff;
        }
    }
}
</style>
