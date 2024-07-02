// objects

// singleton

// objects literals

// Object.create  => Constrcutor

const mySymbol = Symbol("key1");

const jsUser = {
  name: "Megh",
  "full name": "Megh Bari",
  [mySymbol]: "my Key",
  age: 18,
  location: "Mumbai",
  email: "meghbari@1gmail.com",
  isLoggedIn: false,
  lastLoggedInDays: ["Monday", "Saturday"],
};

// access the object

// console.log(jsUser.name)
// // or
// console.log(jsUser["location"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySymbol])

// jsUser.email = "meghbari@chatgpt.com"
// Object.freeze(jsUser)
// console.log(jsUser["email"])
// jsUser.email = "meghbari@google.com"
// console.log(jsUser)

// jsUser.greeting = function () {
//   console.log("Namaste JS User");
// };

// console.log(jsUser.greeting());

jsUser.greet = function (params) {
  console.log(`Hello JS Users, ${this.name}
I lived in ${this.location}
for contact ${this.email}`);

};
console.log(jsUser.greet());
