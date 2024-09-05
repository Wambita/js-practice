//hasCity that takes a string called country and an array of strings, which are cities of that country, which returns a new function.
function hasCity(country, arrCities) {
    return function(city){
        return arrCities.includes(city) ?
        `${city} is a city from ${country}` :
        `${city} is not a city from ${country}`
    }
}

// //Example usage:
// const isCity = hasCity("Kenya", ['Nairobi', 'Kisumu', 'Nakuru']);
// console.log(isCity('Nairobi')); 
// console.log(isCity('Mombasa')); 
