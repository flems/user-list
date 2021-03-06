import Vue from 'vue'
import App from './App'
import store from './store/'
import 'whatwg-fetch'

/* Components */
import UserList from '@/components/UserList/UserList.vue'
import UserDetail from '@/components/UserDetail/UserDetail.vue'

/* Components */
Vue.component('user-list', UserList)
Vue.component('user-detail', UserDetail)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    components: {
        App
    }
})
