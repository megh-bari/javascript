// * ES6

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  encryptPassword() {
    return `${this.password}abc`;
  }
  changedUserName() {
    return `${this.username.toUpperCase()}`;
  }
}

const megh = new User("meghbari", "meghbari@gmail.com", "123");

console.log(megh.encryptPassword());
console.log(megh.changedUserName());

//* behind the scene

// function User(username, email, password) {
//   this.username = username;
//   this.email = email;
//   this.password = password;
// }

// User.prototype.encryptPassword = function () {
//   return `${this.password}1234`;
// };

// User.prototype.changedUserName = function(){
//     return `${this.username.toUpperCase()}`;
// }

// const hey_megh = new User("megh","meghbari@gmail.com", "abcd" )

// console.log(hey_megh.encryptPassword())
// console.log(hey_megh.changedUserName())