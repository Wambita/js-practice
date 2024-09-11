
//deepCopy that copies objects and arrays recursively.
function deepCopy(value) {
    if (value === null || typeof value !== 'object') {
        return value
    }
    if (typeof value === 'function') {
        return value.bind({});
    }
    if (value instanceof RegExp) {
        return new RegExp(value.source, value.flags);
    }
    
    if (Array.isArray(value)) {
        return value.map(deepCopy)
    }
    
    const copObject = {}
    for (const key in value) {
        if (value.hasOwnProperty(key)) {
            copObject[key] = deepCopy(value[key])
        }
    }
    
    return copObject
}