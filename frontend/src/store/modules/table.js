import { throttle } from 'throttle-debounce'

const userList = {
    state: {
        data: [],
        filteredData: [],
        isSearching: false,
        options: {
            apiUrl: 'http://localhost:3000/data/'
        }
    },
    mutations: {
    },
    actions: {
    }
}

export default userList
