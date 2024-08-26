const orbitalPeriod = {
    earth : 1.0,
    mercury : 0.2408467,
    venus : 0.61519726,
    mars : 1.8808158,
    jupiter : 11.862615,
    saturn : 29.447498,
    uranus :84.016846,
    neptune: 164.79132,
}


function dogYears(planet,  age)   {

    const  secondsInYear = 31557600
    planet = planet.toLowerCase()
    let planetYear;

    if (orbitalPeriod.hasOwnProperty(planet)) {
        planetYear = ((age / secondsInYear) / orbitalPeriod[planet] )* 7
       return parseFloat(planetYear.toFixed(2))
    } else {
        return "Invalid planet name"
    }
}

console.log(dogYears("earth", 1000000000));   // Expected output: Earth years, rounded
console.log(dogYears("mercury", 2000000)); // Expected output: Mercury years, rounded
console.log(dogYears("neptune", 2000000)); // Expected output: Neptune years, rounded
console.log(dogYears("pluto", 2000000)); 