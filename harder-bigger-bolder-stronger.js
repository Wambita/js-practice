//monoyers chart
 export  function generateLetters(){
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const ttlLetters =120
    const minFontSize = 11
    const maxFontSize = 130
    const weight1 = 300
    const weight2 = 400
    const weight3 = 600

    for (let i=0; i<ttlLetters; i++) {
        //create a div for each letter
        const letterDiv = document.createElement('div')

        //set random  letter
        const randomLetter = letters[Math.floor(Math.random() * letters.length)]

        //set letter as div content
        letterDiv.textContent = randomLetter

        //set random font size between min and max
       const fontSize =minFontSize + (maxFontSize - minFontSize) * (i/ttlLetters)
       letterDiv.style.fontSize = `${fontSize}px`

        //set random font weight
      if(i <ttlLetters/3) {
        letterDiv.style.fontWeight =  weight1
      } else if (i < 2 * ttlLetters/3) {
        letterDiv.style.fontWeight = weight2
      } else {
        letterDiv.style.fontWeight = weight3
      }

        //add div to the document body
        document.body.appendChild(letterDiv)
    
}
 }