// * Call

function setUserName(username) {
  // *  complex DB calls
  this.username = username;
  console.log("function called");
}

function createUser(username, email, password) {
  setUserName.call(this, username);

  this.email = email;
  this.password = password;
}

const megh = new createUser("megh", "meghbari@gmail.com", "123");

console.log(megh);
