//* for of loop

// ! for of in array
const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  // console.log(num)
}

// ! for of in str
const str = "Namaste Duniya!";

for (const greet of str) {
//   console.log(greet);
}

// ! Maps

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('FR', 'France')

// console.log(map)

for (const [key, value] of map) {

    // console.log(key , `:- ${value}`)
    
}

// ! Object
//** Object is not iteratable */

const user ={
    'name':'megh',
    'id': '104',
    'age': '18'
}

for (const [key, value] of user) {
    console.log(key, `: ${value}`)
}