//citiesOnly: accepts an array of objects and returns an array of strings from the city key.
function citiesOnly(arr) {
    const city = arr.map(obj=> obj. city)
return city
}

//usage example
// console.log(citiesOnly([
//     {
//       city: 'Los Angeles',
//       temperature: '  101 °F   ',
//     },
//     {
//       city: 'San Francisco',
//       temperature: ' 84 ° F   ',
//     },
//   ]) // -> ['Los Angeles', 'San Francisco']
//   ); 

//upperCasingStates: accepts an array of strings, and returns a new array of strings. The returned array will be the same as the argument, except the first letter of every word must be capitalized.
function upperCasingStates(arr){
    let upp = arr.map((state) => capWords(state))
    return upp
}
function capitalize(str){
    return  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}
//multiple words separated
function capWords(str){
    return str.split(' ').map(word => capitalize(word)).join(' ')
}

//example
//console.log(upperCasingStates(['alabama', 'new jersey']) )// -> ['Alabama', 'New Jersey'])

//fahrenheitToCelsius: accepts an array of fahrenheit temperatures as strings, and returns an array of strings converted to celsius. Round down the result.

function fahrenheitToCelsius(arr){
    //formula (f -32) * 5/9
    const celcuis = arr.map(temp => (fahrenheitToCelsiusFormula(parseInt(temp))))
return celcuis
}

function fahrenheitToCelsiusFormula(num){
return String(Math.floor((num - 32) *(5/9)))+'°C'
}
//usage
//console.log(fahrenheitToCelsius(['68°F', '59°F', '25°F'])) // -> ['20°C', '15°C', '-4°C']

//trimTemp: accepts an array of objects, and returns a new array of objects with the same structure. The temperature strings must have their spaces removed in the new array.

function trimTemp(arr){
 const trimArr = arr.map(obj => ({
    city:obj.city,
    temperature: obj.temperature.replace(/^\s+|\s$/gm, '').replace(/\s+g/, '')
 }))
 return trimArr
}
//usage 
// console.log(trimTemp([
//   { city: 'Los Angeles', temperature: '  101 °F   ' },
//   { city: 'San Francisco', temperature: ' 84 ° F   ' },
// ]) /* -> [
//   { city: 'Los Angeles', temperature: '101°F' },
//   { city: 'San Francisco', temperature: '84°F' },
// ] */
// )


//tempForecasts: accepts an array of objects, and returns an array of formatted strings. See the example below
function tempForecasts(arr) {
    // Extract city names and state names from the array
    const cities = citiesOnly(arr);
    const states = upperCasingStates(arr.map(obj => obj.state));

    // Map over the array to create the formatted strings
    return arr.map((obj, index) => {
        // Trim and convert temperature
        const trimmedTemp = obj.temperature.replace(/^\s+|\s+$/g, '').replace(/\s+/g, '');
        const tempInCelsius = fahrenheitToCelsiusFormula(parseInt(trimmedTemp));

        // Format the final string
        return `${tempInCelsius} in ${cities[index]}, ${states[index]}`;
    });
}




// console.log(tempForecasts([
//     {
//       city: 'Pasadena',
//       temperature: ' 101 °F',
//       state: 'california',
//       region: 'West',
//     },
//   ]) )// -> ['38°Celsius in Pasadena, California']
// //usage