// ... rest or spread operator

function calculateCartPrice(val1, val2, ...num) {
    return num
}

// console.log(calculateCartPrice(200,400,500,1000,2400))

const user ={
    username:"megh",
    age: 18
}

function handleObject(anyobject) {
    console.log(`Usrername is ${anyobject.username}, and age is ${anyobject.age}`)
}

// handleObject(user)
handleObject({
    username: "Sam",
    age: 18
})


const myArr = [100,400,300,500]

function returnSecondValue(getArray) {
    return getArray[2]
}

console.log(returnSecondValue(myArr))