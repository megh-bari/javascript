// Primitive
// 7 Types: string, number, boolean, null, undefined, symbol, bigInt

const score = 100
const scoreValue = 100.20
const isLoggedIn = false
const outSideTemp = null
const userName = "megh"
let userEmail;
const bigNumber = 123456789101234567891012345678910n

const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id==anotherId);


console.log(typeof(score));
console.log(typeof(scoreValue));
console.log(typeof(isLoggedIn));
console.log(typeof(outSideTemp));
console.log(typeof(userName));
console.log(typeof(userEmail));
console.log(typeof(bigNumber));
console.log(typeof(id));


// Reference (Non-Primitive)

// Array, Objects, Functions

// array:
const heros = ["Spiderman", "Ironman","Thor", "Loki"]
// console.log(heros);

// object:
let women = {
    name: "john",
    age: 22,
}
// console.log(women);

// function
let myFun = function () {
    console.log("Namaste Duniya!");
}


console.log(typeof(heros));
console.log(typeof(women));
console.log(typeof(myFun));