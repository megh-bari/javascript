class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  get email() {
    return this._email.toUpperCase();
  }
  set email(email) {
    this._email = email;
  }
  get password() {
    return `${this._password}megh`;
  }

  set password(value) {
    this._password = value;
  }
}

const userOne = new User("megh", "meghbari@google.com", "abcd1234");
console.log(userOne.password);
console.log(userOne.email);
