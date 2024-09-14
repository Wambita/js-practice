//series that takes an array of async functions. It must execute them in series and return the results in order.

async function series(afuncs) {
    let results = []
    if (!afuncs.length) return []
    results[0] = await afuncs[0]()
    for (let i = 1; i < afuncs.length; i ++) {
        Promise.resolve(results[i] = await afuncs[i]())
    }
    return results
}