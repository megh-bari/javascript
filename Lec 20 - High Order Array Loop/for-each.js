//** for each loop

const coding = ["js", "py", "c", "cpp", "java"];

// coding.forEach(element => {
//     console.log(`${element}`)
// });

coding.forEach((item, index, arr) => {
  // console.log(`item:${item}, index:${index}, Array:${arr}`)
});

// ! object in array
//**  [{},{}]

const myCoding = [
  {
    langName: "javascript",
    fileName: "js",
  },
  {
    langName: "Python",
    fileName: "py",
  },
  {
    langName: "Java",
    fileName: "java",
  },
];

myCoding.forEach((item) => {
  console.log(`${item.langName}`);
});
