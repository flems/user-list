import Vue from 'vue'
import App from './App'
import store from './store/'

/* Components */
import UserList from '@/components/UserList/UserList.vue'
import UserDetail from '@/components/UserDetail/UserDetail.vue'

/* Components */
Vue.component('user-list', UserList)
Vue.component('user-detail', UserDetail)


new Vue({
    el: '#app',
    store,
    components: {
        App
    }
})
