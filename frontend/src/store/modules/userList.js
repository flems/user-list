import { throttle } from 'throttle-debounce'

const userList = {
    state: {
        data: [],
        list: [],
        options: {
            apiUrl: 'http://localhost:3000/data/'
        },
        params: {
            q: '',
            limit: 3,
            page: 1,
            "user-id": undefined
        }
    },
    mutations: {
        filterData: throttle(500, false, (state) => {
            let result = state.data
                .filter(item => {
                    return (
                        item.firstName.toLowerCase().indexOf(state.params.q) !== -1 ||
                        item.lastName.toLowerCase().indexOf(state.params.q) !== -1 ||
                        item.email.toLowerCase().indexOf(state.params.q) !== -1 ||
                        String(item.phone).indexOf(state.params.q) !== -1 ||
                        String(item.id).indexOf(state.params.q) !== -1
                    )
                })

            state.list = result
        }),
        setData (state, data) {
            state.data = data
            state.list = data
        },
        setCurrentPage (state, pageNumber) {
            state.params.page = pageNumber
        },
        setCurrentUser (state, userId) {
            state.params['user-id'] = userId
        },
        setParams (state, params) {
            state.params  = {...state.params, ...params}
        }
    },
    actions: {
        getData({ commit, state }) {
            return fetch(state.options.apiUrl)
                .then(
                    response => {
                        if (response.ok) {
                            return response.json();
                        }
                        throw new Error('Request failed!');
                    },
                    networkError => console.log(networkError.message)
                )
                .then(
                    jsonResponse => {
                        commit('setData', jsonResponse)
                    }
                )
        },
        showMore ({state, commit, getters}) {
            const currentPage = Number(state.params.page)
            if (currentPage < getters.total) {
                const page = currentPage + 1
                commit('setCurrentPage', page)
            }
        }

    }
}

export default userList
