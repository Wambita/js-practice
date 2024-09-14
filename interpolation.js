function interpolation(step, start, end , callback, duration){
    let distance = (end - start) / step;
    const interval = duration / step;
    let res = []

    for (let i = 0; i < step; i++) {
        setTimeout(()=>{
            const x = start + (distance * i);
            const y = interval * (i+1)
            res.push([x, y])
            callback([x, y])

            if (i === step - 1) {
                callback(res)
            }
        }, interval * i);
}
}

// interpolation(
//     5,
//     0,
//     1,
//      ([x, y]) => console.log(` $|{y.toFixed(2)}, - ${y}`),
//     10
// );