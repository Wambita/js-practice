function get(src, path) {
    const paths = path.split('.')
    let res = src 

    for (let i = 0; i < paths.length; i++) {
        if (res === undefined || res === null  ) {
        return undefined
    }
    res = res[paths[i]]
}
return res
}