/*
 * Filter
 */

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNum = myNums.filter((num) => {
//   return num > 4;
// });
// console.log(newNum);

const newNums = [];
myNums.forEach((num) => {
  if (num > 4) {
    newNums.push(num);
  }
});

// console.log(newNums);

// ! Exercise
const book = [
  {
    title: "Book One",
    genre: "Friction",
    publish: 1981,
    edition: 2004,
  },
  {
    title: "Book Two",
    genre: "Non - Friction",
    publish: 1992,
    edition: 2008,
  },
  {
    title: "Book Three",
    genre: "History",
    publish: 1999,
    edition: 2007,
  },
  {
    title: "Book Four",
    genre: "Science",
    publish: 2009,
    edition: 2014,
  },
  {
    title: "Book Five",
    genre: "Friction",
    publish: 1987,
    edition: 2010,
  },
  {
    title: "Book Six",
    genre: "History",
    publish: 1986,
    edition: 2005,
  },
  {
    title: "Book Seven",
    genre: "Science",
    publish: 1981,
    edition: 2015,
  },
];

let userBooksScience = book.filter((book) => book.genre === "Science");

console.log("Science Books:", userBooksScience);

let userBooksAfter2000 = book.filter((book) => {
  return book.publish >= 1995 && book.genre === "History";
});

console.log("Books published after or in 1995:", userBooksAfter2000);
