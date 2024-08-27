function dogYears(planet,  age)  { 

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
 const  secondsInYear = 31557600
 const  dogYearsPerYear= 7
 let planetAge;

   planetAge= (age /secondsInYear) /orbitalPeriod[planet]* dogYearsPerYear
   return parseFloat(planetAge.toFixed(2))
//return Number(planetAge.toFixed(2))
 
 }

