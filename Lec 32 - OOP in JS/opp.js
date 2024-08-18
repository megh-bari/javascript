// * Object Literal

const user = {
  username: "megh",
  loginCount: 8,
  signedIn: true,
  getUserDetails: function () {
    // console.log("Got user details from database")
    // console.log(`Username:${this.username}`)
    console.log(this);
  },
};

// console.log(user.username);
// console.log(user.getUserDetails())
// console.log(this)

// * Constructor Function - New instance milta hai

function User(username, password, isLoggedIn) {
  this.username = username;
  //*  variable name = passed value

  this.isLoggedIn = isLoggedIn;
  this.password = password;
  this.greeting = function(){
    console.log(`Welcome ${this.username}`)
  }
  return this;
}

const userOne = new User("megh", "123456", true);
const userTwo = new User("sam", "1230", false);
console.log(userOne.constructor);
console.log(userTwo.greeting());

//? new keyword - empty object means instance
// ? step 1: new object created
// ? step 2: constructor function call hota hai
// ? step 3: all arguments injected in this keyword
// ? step 4: we got all data
