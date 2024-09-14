function interpolation({ step, start, end, callback, duration }) {
    const interval = duration / step; // Time between each callback execution
    const distance = (end - start) / step; // Distance between each step
    let currentStep = 0;

    function interpolateStep() {
        if (currentStep < step) {
            const x = start + distance * currentStep; // Interpolated x position
            const y = interval * (currentStep + 1); // Interpolated y position (time point)
            callback([x, y]);

            currentStep++;
            setTimeout(interpolateStep, interval); // Schedule next step
        }
    }

    // Start the first interpolation step
    setTimeout(interpolateStep, interval);
}


// interpolation(
//     5,
//     0,
//     1,
//      ([x, y]) => console.log(` $|{y.toFixed(2)}, - ${y}`),
//     10
// );