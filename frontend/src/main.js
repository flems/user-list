import Vue from 'vue'
import App from './App'
import store from './store/'

/* Components */
import UserList from '@/components/UserList/UserList.vue'

/* Components */
Vue.component('user-list', UserList)


new Vue({
    el: '#app',
    store,
    components: {
        App
    }
})
