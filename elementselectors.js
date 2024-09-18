const myHeading = document.getElementById("my-heading")
myHeading.style.backgroundColor= "yellow"
myHeading.style.textAlign = "center"

const fruits = document.getElementsByClassName("fruits")
fruits[0].style.backgroundColor = "yellow"

for(let fruit of fruits) {
    fruit.style.backgroundColor = "red"
}

console.log(myHeading)
console.log(fruits)
