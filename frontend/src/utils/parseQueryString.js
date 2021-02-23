function parseQueryString (query) {
    let result = {}
    const arrParams = query.split('&')

    for (let i = 0; i < arrParams.length; i++) {
        let value
        const pair = arrParams[i].split('=')
        const key = decodeURIComponent(pair[0])
        if (pair[1]) value = decodeURIComponent(pair[1])

        if (typeof value === 'undefined') continue
        result[key] = decodeURIComponent(value)
    }

    return result
}

export default parseQueryString
