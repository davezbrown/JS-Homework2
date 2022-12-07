//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function favFoods(object){
    console.log("Person3's Favorite Foods:")
    for (let i =0; i < Object.keys(object).length -1; i++){
        console.log(`Favorite ${Object.keys(object)[i]}: ${Object.values(object)[i]}`)
    }
}

console.log(favFoods(person3))


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age){
    this.name = name;
    this.age = age;

    Person.prototype.printInfo = () => {
        console.log("Name: " + this.name + ", Age: " + this.age);
    }
    Person.prototype.incrementAge = () => {
        this.age++;
    }
}

var john = new Person("John", 25)
john.printInfo()

var david = new Person("David", 26)

david.printInfo()
david.incrementAge()
david.incrementAge()
david.incrementAge()
david.printInfo()




// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten, console log "Big word". 
    If the length of the string is less than 10, console log "Small Number"
*/

function checkStringLength(str) {
    return new Promise((resolve, reject) => {
      if (str.length > 10) {
        resolve("Big word");
      } else {
        reject("Small number");
      }
    });
  }

checkStringLength("Hello world")
  .then(result => console.log(result))
  .catch(error => console.log(error));

checkStringLength("Hello")
  .then(result => console.log(result))
  .catch(error => console.log(error));