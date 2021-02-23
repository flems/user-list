const getters = {
    count: state => {
        return state.userList.params.limit * state.userList.params.page
    },
    total: (state, getters) => {
        return state.userList.list.length
    },
    userData: state => {
        let result = state.userList.list.filter(item => {
            return item.id === Number(state.userList.params['user-id'])
        })

        return result[0]
    }
}

export default getters
