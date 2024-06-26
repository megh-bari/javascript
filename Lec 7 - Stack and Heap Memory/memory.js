// memories: stack and heap

// stack (primitive)
// heap (non-primitive)


// stack
let myName = "Megh Bari"

let anotherName = myName
anotherName = "meghhhhhh"

console.log(anotherName);
console.log(myName);



// heap
let userOne = {
    email: "user@gmail.com",
    upi : "user@sbi1234",
}

let userTwo = userOne
userTwo.email = "megh@google.com"

console.log(userOne.email);
console.log(userTwo.email);
