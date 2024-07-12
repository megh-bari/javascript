// ** Map

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ans = myNumbers.map((num) => {
  return num + 10;
});

// console.log(ans);

// ** chainning

const newNums = myNumbers
  .map((num) => num * 10)
  .map((num) => num + 5)
  .filter((num) => num >= 40);
console.log(newNums);


