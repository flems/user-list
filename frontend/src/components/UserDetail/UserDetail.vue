<template>
    <div class="user-detail" v-if="userData">
        <div class="user-detail__container">
            <h2 class="user-detail__title">Detail info</h2>
            <ul class="user-detail__list">
                <li class="user-detail__item">
                    <span class="user-detail__prop">Id:</span>
                    <span class="user-detail__val">{{ userData.id }}</span>
                </li>
                <li class="user-detail__item">
                    <span class="user-detail__prop">First name:</span>
                    <span class="user-detail__val">{{ userData.firstName }}</span>
                </li>
                <li class="user-detail__item">
                    <span class="user-detail__prop">Last name:</span>
                    <span class="user-detail__val">{{ userData.lastName }}</span>
                </li>
                <li class="user-detail__item">
                    <span class="user-detail__prop">Email:</span>
                    <span class="user-detail__val">{{ userData.email }}</span>
                </li>
                <li class="user-detail__item">
                    <span class="user-detail__prop">Phone:</span>
                    <span class="user-detail__val">{{ userData.phone }}</span>
                </li>
            </ul>
            <button class="user-detail__close" @click="reset">
                <span>+</span>
            </button>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
import { updateUrl } from '@/utils/index.js'

export default {
    name: 'user-detail',
    computed: {
        ...mapGetters([
            'userData'
        ]),
        ...mapState({
            params: state => state.userList.params
        })
    },
    methods: {
        ...mapMutations([
            'setCurrentUser'
        ]),
        reset () {
            document.querySelector('body').style.overflow = ''
            this.setCurrentUser(null)
            updateUrl(this.params)
        }
    }
}
</script>

<style lang="scss">
.user-detail {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    text-align: center;
    background: rgba(0,0,0, 0.3);

    &:before {
        content: '';
        display: inline-block;
        height: 100%;
        vertical-align: middle;
    }

    &__container {
        background: #fff;
        box-shadow: 0px 2px 50px 0px rgba(0, 0, 0, 0.3);
        display: inline-block;
        padding: 32px;
        vertical-align: middle;
        text-align: left;
        position: relative;
        width: 500px;
        max-width: 100%;
    }

    &__close {
        font-weight: 400;
        font-size: 28px;
        background: none;
        border: none;
        cursor: pointer;
        outline: none;
        padding: 0;
        line-height: 1;
        color: #b7b5b5;
        position: absolute;
        top: 8px;
        right: 16px;
        transition: color 0.2s ease-in;

        &:hover {
            color: #525252;
        }

        span {
            display: block;
            transform: rotate(45deg);
        }
    }

    &__title {
        margin: 0;
        color: #525252;
        text-align: center;
        margin-bottom: 32px;
        font-size: 24px;
    }

    &__list {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    &__item {
        margin-bottom: 16px;
        color: #525252;
        display: flex;
        border-bottom: 1px solid #eee;
        padding-bottom: 16px;
        align-items: flex-end;

        &:last-child {
            margin-bottom: 0;
            border-bottom: 0;
        }
    }

    &__prop {
        width: 120px;
        font-weight: 700;
        display: block;
        flex-shrink: 0;
        font-size: 14px;
    }
}
</style>
