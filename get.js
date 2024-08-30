function get(src, path) {
    const path = path.split('.')
    let res = src 

    for (let i = 0; i < path.length; i++) {
        res = res[path[i]]
    }
    return res ? res : undefined
}