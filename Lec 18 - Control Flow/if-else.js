// Logic or control flow

// if
// >,<, >=, <=, ==, !=, ====
// const isUserLoggedIn = !false

// if (isUserLoggedIn) {
//     console.log("Yes")
// } else {
//     console.log("no")
// }

// if (2 === 2) {
//     console.log("executed")
// }

// else{
//     console.log("error")
// }

// const score = 100

// if (score > 100) {
//     const power = "fly"
//     console.log(`User Power: ${power}`);
// }

// const balance = 1000
// // shorthand
// // if (balance > 500 ) (console.log("Yes"))
// // else (console.log("No"))

// if (balance > 500) {
//     console.log("You're balance is more than 500")
// }

// else if (balance < 100){
//     console.log("less than 100")
// }

// else{
//     console.log("nothing match")
// }

const userLoggedIn = true;
const debitcard = true;
const upi = true;

const userLoggedInFromGoogel = true;
const userLoggedInFromEmail = false;

if (userLoggedIn && debitcard && upi) {
  console.log("Allowed to buy cource");
}
if (userLoggedInFromEmail || userLoggedInFromGoogel) {
  console.log("User Loged In");
} else {
  console.log("Sorry, You can't buy cource without this option");
}