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
.search {
    &__form {
        display: flex;
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
