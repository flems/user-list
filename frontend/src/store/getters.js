const getters = {
    count: state => {
        return state.userList.pagination.perPage * state.userList.pagination.currentPage
    },
    total: (state, getters) => {
        return state.userList.list.length
    }
}

export default getters
