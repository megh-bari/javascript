const userEmail = "megh.ai";
// const userEmail = "" //* try this also

if (userEmail) {
  console.log("got user email");
} else {
  console.log("don't have user email");
}

// * falsy value : false, 0, -0, bigInt 0n, "", null, undefined, Nan

// * truthy value : "0", 'false', " ", [], {}, function(){}

const arr = [];
if (arr.length === 0) {
  console.log("Empty Array");
}

const obj = {};
if (Object.keys(obj).length === 0) {
  console.log("empty obj");
}

// ! Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 18
// val1 = undefined ?? 23

val1 = null ?? 20 ?? 40

console.log(val1);


// !!! Terniary Operator:

// ** condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <=80 ? console.log("Less than 80") : console.log("More than 80");