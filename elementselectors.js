//Element selectors
//id
const myHeading = document.getElementById("my-heading")
myHeading.style.backgroundColor= "yellow"
myHeading.style.textAlign = "center"


//class
const fruits = document.getElementsByClassName("fruits")
// fruits[0].style.backgroundColor = "yellow"

// for(let fruit of fruits) {
//     fruit.style.backgroundColor = "red"
// }

Array.from(fruits).forEach( fruit => {
    fruit.style.backgroundColor = "green"
})

//tags
const h4Elements = document.getElementsByTagName("h4"); 
const liElements = document.getElementsByTagName("li"); 
Array.from(h4Elements).forEach( element => {
    element.style.backgroundColor = "purple"
})
Array.from(liElements).forEach( lielement => {
    lielement.style.backgroundColor = "lightgreen"
})
// for (let h4Element of h4Elements) {
//     h4Element.style.backgroundColor = "blue"
// }

//Queryselector
const element = document.querySelector(".fruits")
element.style.backgroundColor = "orange"

const head = document.querySelector("h1")
head.style.fontSize = "4rem"
head.style.color = "blue"

const title = document.querySelector("h4")
title.style.fontSize = "2rem"

const list = document.querySelector("li")
list.style.color = "teal"

const lists= document.querySelector("ul")
lists.style.color = "brown"

const food = document.querySelectorAll(".fruits")
const foods = document.querySelectorAll("ul")
food[0].style.fontSize= "20px"
foods[0].style.fontSize= "16px"
foods.forEach(foo =>{
    foo.style.fontSize= "20px"
})
console.log(myHeading)
console.log(fruits)

