function interpolation(step, start, end , callback, duration){
    let distance = (end - start) / step;
    const interval = duration / step;

    for (let i = 0; i < step; i++) {
        setTimeout(()=>{
            const x = start + (distance * i);
            const y = interval * (i+1)
            callback([x, y])
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