const person1 = {
    name:  "spongebob",
    favFood: "hamburger",
    sayHello: function(){console.log(`Hi I am ${this.name} and i love ${this.favFood}`)}
}

const person2 = {
    name:  "patrick",
    favFood: "pizza",
    sayHello: function(){console.log(`Hi I am ${this.name} and i love ${this.favFood}`)}
}


person1.sayHello()
person2.sayHello()