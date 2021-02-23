<template>
    <div class="pagination" v-show="isShown">
        <button class="pagination__btn" @click="showMore">Показать еще</button>
    </div>
</template>

<script>
import { updateUrl } from '@/utils/index.js'
import { mapState } from 'vuex'

export default {
    name: 'pagination',
    props: {
        total: {
            type: Number,
            defaul: 0
        },
        count: {
            type: Number,
            default: 0
        }
    },
    computed: {
        isShown () {
            return this.count < this.total
        },
        ...mapState({
            params: state => state.userList.params
        })
    },
    methods: {
        showMore () {
            this.$emit('showMore')
            updateUrl(this.params)
        }
    }
}
</script>

<style lang="scss">
.pagination {
    display: flex;
    justify-content: center;

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
