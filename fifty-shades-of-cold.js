import  { colors } from  './fifty-shades-of-cold.data.js'

/*generateClasses function. It creates a <style> tag inside the <head>. 
It should generate one class for each color in the colors array, 
which sets the background attribute like so:
.blue {
  background: blue;
}
*/
export function generateClasses() {
    const head =  document.getElementByTagName("head")[0]
    const  style = document.createElement("style")
    colors.forEach((color) =>{
        style.innerHTML += `.${color} { background: ${color} }`
    })
    console.log(style.innerHTML)
    head.appendChild(style)
} 

/*generateColdShades function which creates a <div> for each color of the colors array, 
whose name contains aqua, blue, turquoise, green, cyan, navy or purple.
 Each <div> must have the corresponding generated class and display the name of the color, like following:
<div class="blue">blue</div>
*/
export function generateColdShades(){
    const body = document.getElementsByTagName("body")[0]
    colors.forEach((color) =>{
        if (
        color.match(/(aqua|blue|turquoise|green|cyan|navy|purple)/) !== null 
    ) {
        const div = document.createElement("div")
        div.classList.add(color)
        div.innerHTML = color
        body.appendChild(div)
    }
    })
}


/*
choseShade is triggered when clicking on a div. 
It accepts the shade of the clicked element as an argument, 
and replaces all the classes of all the other elements by the chosen shade.
*/
export function  choseShade(shade) {
    document.querySelectorAll("div").forEach((div) => {
        div.className = shade
    })
}