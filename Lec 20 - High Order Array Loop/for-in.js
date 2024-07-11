// ** for in loop

// ! Object

const lang = {
  js: "Javascript",
  ts: "Typescript",
  cpp: "C++",
};

for (const key in lang) {
//   console.log(`${key} shortcut for - ${lang[key]}`);c
}


// ! Array

const programming = ['js', 'rb', 'py', 'java', 'cpp']

for (const key in programming) {
    // console.log(`${key} : ${programming[key]}`)
}

// ! Map
// ** map is not iteratable
const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('FR', 'France')

for (const key in map) {
//    console.log(`${key}`)
}