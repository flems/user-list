<template>
    <div class="user-detail" v-if="userData">
        <table>
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
                <tr>
                    <td>{{ userData.id }}</td>
                    <td>{{ userData.firstName }}</td>
                    <td>{{ userData.lastName }}</td>
                    <td>{{ userData.email }}</td>
                    <td>{{ userData.phone }}</td>
                </tr>
            </tbody>
        </table>
        <button @click="reset">Clear</button>
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
            this.setCurrentUser(null)
            updateUrl(this.params)
        }
    }
}
</script>

<style lang="scss">
.user-detail {
    border: 1px solid #eee;
    padding: 24px;
    display: inline-block;
    margin: 24px 0;
}
</style>
