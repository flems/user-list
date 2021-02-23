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
            limit: 5,
            page: 1,
            'user-id': undefined,
            sort: {
                key: undefined,
                type: 'asc'
            }
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
        sortData: throttle(500, false, (state) => {
            const key = state.params.sort.key
            const type = state.params.sort.type

            let result = state.list
                .sort(function (a, b) {
                    let result = 0

                    if (a[key] > b[key]) {
                        if (type === 'asc') {
                            result = 1
                        } else {
                            result = -1
                        }
                    }

                    if (a[key] < b[key]) {
                        if (type === 'asc') {
                            result = -1
                        } else {
                            result = 1
                        }
                    }

                    return result
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
            const sortKey = params['sort-by'] ? params['sort-by'] : null
            const sortType = params['sort-type'] ? params['sort-type'] : 'asc'
            delete params['sort-type']
            delete params['sort-by']

            params.sort = {
                key: sortKey,
                type: sortType
            }

            state.params = {...state.params, ...params}
        },
        setSortParams (state, key) {
            if (state.params.sort.key === key) {
                state.params.sort.type === 'asc' ? state.params.sort.type = 'desc' : state.params.sort.type = 'asc'
            } else {
                state.params.sort.key = key
                state.params.sort.type = 'asc'
            }
        }
    },
    actions: {
        getData ({ commit, state }) {
            return fetch(state.options.apiUrl)
                .then(
                    response => {
                        if (response.ok) {
                            return response.json()
                        }
                        throw new Error('Request failed!')
                    },
                    networkError => {
                        throw new Error(networkError.message)
                    }
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
