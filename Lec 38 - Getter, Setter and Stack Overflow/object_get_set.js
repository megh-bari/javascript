const user = {
  _email: "email@email.com",
  _password: "1234",

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    return this._email = value
  },
  get password() {
    return this._email.toUpperCase();
  },

  set password(value) {
    return this._email = value
  },
};


const person = Object.create(User)
console.log(person.email)