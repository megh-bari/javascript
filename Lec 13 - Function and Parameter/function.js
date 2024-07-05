// Functions

// basic
// function sayMyName() {
//   console.log("Megh");
// }

// sayMyName();

function addNum(a, b) {
  //    let result = a+b
  //    return result
  return a + b;
}

const result = addNum(3, 5);
// console.log("Result:", result)

    function logInUserMsg(username) {
if (username=== undefined) {
    console.log("Please enter a username")
    return
} 

        return `${username} , Just Logged In`
    
}

const loggedUser = logInUserMsg("Megh")
console.log(loggedUser)