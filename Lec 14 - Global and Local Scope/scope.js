// {}// {} called scope
// var c = 300; 

let a = 300 // global scope

if (true) {
  let a = 10;
  const b = 20;
  console.log("Inner",a) // block scope
}

// if ke andar ka content is block scope

console.log(a);
// console.log(b);
// console.log(c);
