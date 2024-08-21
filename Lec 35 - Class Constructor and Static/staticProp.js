class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }

  static CreateUserID() {
    return `123`;
  }
}

const megh = new User("Megh");
console.log(megh.logMe());
// console.log(megh.CreateUserID())

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const android = new Teacher("android", "android@phone.com");

android.logMe();
// console.log(android.CreateUserID())
