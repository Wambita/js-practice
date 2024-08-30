function get(src, path) {
    const path = path.split('.')
    let res = src 

    for (let i = 0; i < path.length; i++) {
        if (res === undefined || res === null  ) {
        return undefined
    }
    res = res[path[i]]
}
return res
}