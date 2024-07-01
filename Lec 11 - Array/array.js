// Array

const myArr = [1,2,3,4,5]
const myHero = ["Homelander", "Ironman", "Spiderman"]

// console.log(myArr[0]);

// console.log(myHero[0]);

// array method

// myArr.push(6) // value in end
// myArr.push(7)
// myArr.pop() // remove last value

// myArr.unshift(9) // value in start
// myArr.shift()

// console.log(myArr.includes(2));
// console.log(myArr.indexOf(5));

// const newArr = myArr.join()

// console.log(myArr); 
// console.log(newArr);  // type - string


// slice or splice 

console.log("A", myArr);
const myn1 =  myArr.slice(1,3)

console.log(myn1);
console.log("B", myArr)


const myn2 =  myArr.splice(1,3)
console.log("C", myArr);
console.log(myn2);
