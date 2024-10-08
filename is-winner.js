/*isWinner which accepts a string representing the name of a country. 
It should use the winners "API" to return a resolved Promise with an appropriate string */

async function isWinner(country){
    let err = false
    const winningCountries = await db.getWinner(country).catch(() => err = true)
    if(err) return `${country} never was a winner`
    if(!winningCountries) return `${country} never was a winner`
    if(winningCountries.continent !== 'Europe') return `${country} is not what we are looking for because of the continent`
    const winRes = await db.getResults(winningCountries.id)
    if(winRes.length < 3) return `${country} is not what we are looking for because of the number of times it was champion`
    let years = ""
    let res = ""
    for (const result of winRes) {
        years += `${result.year}, `
        res += `${result.score}, `
    }
    return `${country} won the FIFA World Cup in ${years.slice(0, -2)} winning by ${res.slice(0, -2)}`
}