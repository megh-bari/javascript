let heros = ["spiderman", "ironman"];
console.log(heros);

function multiply(num) {
  return num * 5;
}

console.log(multiply(5));
console.log((multiply().power = 2));
console.log(multiply.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
};

createUser.prototype.printMe = function () {
  console.log(`Score: ${this.score}`);
};

const user1 = new createUser("megh", 30);
const user2 = new createUser("hey", 100);

user1.printMe();
user2.printMe();

//* Here's what happens behind the scenes when the new keyword is used:

//* A new object is created: The new keyword initiates the creation of new javascript Object.

//* A prototype is linked: The newly created object gets linked to the prototype of  the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

//* The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit returns value is specified from the constructor, Javascript assumes this, the newly created objects, to be the intended return value.

//* The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (Object, array, function, etc), the newly created object is returned.
