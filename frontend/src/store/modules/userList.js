import { throttle } from 'throttle-debounce'

const userList = {
    state: {
        data: [],
        list: [],
        options: {
            apiUrl: 'http://localhost:3000/data/'
        },
        pagination: {
            perPage: 3,
            currentPage: 1
        }
    },
    mutations: {
        filterData: throttle(500, false, (state, params) => {
            let result = state.data
                .filter(item => {
                    return (
                        item.firstName.toLowerCase().indexOf(params.q) !== -1 ||
                        item.lastName.toLowerCase().indexOf(params.q) !== -1 ||
                        item.email.toLowerCase().indexOf(params.q) !== -1 ||
                        String(item.phone).indexOf(params.q) !== -1 ||
                        String(item.id).indexOf(params.q) !== -1
                    )
                })

            state.list = result
        }),
        setData (state, data) {
            state.data = data
            state.list = data
        },
        setCurrentPage (state, pageNumber) {
            state.pagination.currentPage = pageNumber
        }
    },
    actions: {
        getData({ commit, state }) {
            fetch(state.options.apiUrl)
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
            if (state.pagination.currentPage < getters.total) {
                const page = state.pagination.currentPage + 1
                commit('setCurrentPage', page)
            }
        }

    }
}

export default userList
