function chunk(arr , int) {
    let result = []
    let temp = []

    for (var i = 0; i < arr.length; i++) {
        temp.push(arr[i])
        if (temp.length === int) {
            result.push(temp)
            temp = []
        }
}
    if (temp.length >0 ) {
        result.push(temp)
    }
    return result
}

