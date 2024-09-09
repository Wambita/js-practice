import  {colors} from  './fifty-shades-of-cold.data.js'


export function generateClasses() {
    const head =  document.getElementByTagName("head")[0]
    const  style = document.createElement("style")
    colors.forEach((color) =>{
        style.innerHTML += `.${color}{background: $color};}`
    })
    console.log(style.innerHTML)
    head.appendChild(style)
} 

export function  choseShade(shade) {
    document.querySelectorAll("div").forEach((div) => {
        div.className = shade
    })
}