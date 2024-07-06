// {}// {} called scope
// var c = 300; 

let a = 300 // global scope

if (true) {
  let a = 10;
  const b = 20;
//   console.log("Inner",a) // block scope
}

// if ke andar ka content is block scope

// console.log(a);
// console.log(b);
// console.log(c);


// nested structure scope

function funcOne() {
    const userName = "Megh"

    function funcTwo() {
        const website = "Youtube"
        console.log(userName)
    }
    // console.log(website)

    funcTwo()
}

// funcOne()

if (true) {
   const userName = "megh" 
   if (userName === "megh") {
    const website = " Youtube"
    // console.log(userName + website)
   }
//    console.log(website)
} 

// console.log(userName)


// ++++++++++++++++++++++++++++++ intersting +++++++++++++++++++++++++++

console.log(addOne(5))
function addOne(num) {
    return num +1
}



//  Or

console.log(addTwo(5))
const addTwo = function(num) {
    return num +2
}


