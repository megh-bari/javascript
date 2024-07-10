// For Loops - Iterations

for (let i = 1; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    // console.log("5 is best number")
  }
  // console.log(element)
}

for (let i = 1; i <= 10; i++) {
  //   console.log(`OuterLoop ${i}`);
  //   console.log("**********");

  for (let j = 1; j <= 10; j++) {
    // console.log(`this is inner loop ${j} and outer ${i}`);
    // console.log(i + "*" + j + "=" + i * j);
  }
}


let myArr = ["flash", "batman", "superman"];
// console.log(myArr.length);


for (let i = 0; i < myArr.length; i++) {
  const element = myArr[i];
//   console.log(element);
}


// ** break and continue 

for (let i = 1; i <=20; i++) {

    if (i==5) {
        // console.log(`Detected 5`)
        break
    }

    // console.log(`value of i is: ${i}`)
    
}


for (let i = 1; i <=10; i++) {

    if (i==5) {
        console.log(`Detected 5`)
      continue
    }

    console.log(`value of i is: ${i}`)
}