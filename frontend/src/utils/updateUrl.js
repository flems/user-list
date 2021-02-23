function updateUrl (params) {
    let url = `?`

    for (let key in params) {
        if (params.hasOwnProperty(key) ) {
            switch (key) {
                case 'page':
                    if (Number(params[key]) !== 1) {
                        url += `${key}=${params[key]}&`
                    }
                    break;
                case 'q':
                    if (params[key]) {
                        url += `${key}=${params[key]}&`
                    }
                    break;
                case 'user-id':
                    if (params[key]) {
                        url += `${key}=${params[key]}&`
                    }
                    break;
                default:
                    break
            }

        }
    }

    url = url.slice(0, url.length - 1);
    if (url === '') {
        url = location.pathname
    }

    if (history.pushState) {
        try {
            history.pushState({}, '', url)
            return
        } catch (err) {
            console.error('Error in queryString!')
        }
    } else {
        document.location.href = url
    }
}

export default updateUrl
