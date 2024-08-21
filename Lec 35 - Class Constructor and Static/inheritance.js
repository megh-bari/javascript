class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    return `Username is ${this.username}`;
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
  addCourses() {
    return `A new course was added by ${this.username}`;
  }
}

const userOne = new Teacher("Megh", "meghbari@google.com", "123456");

console.log(userOne.addCourses());
console.log(userOne.logMe());

const userTwo = new User("hey_megh");
console.log(userTwo.logMe());

console.log(userOne === userTwo); //* False
console.log(userOne instanceof Teacher); //* True
console.log(userOne instanceof User); //* True
