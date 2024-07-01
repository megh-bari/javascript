// Part 2 

const marvelHeros = ["IronMan", "Spiderman", "Thor"]
const dcHeros = ["Batman", "Superman", "flash"]
const theBoysHero = ["Homelander", "Deep", "A-Train"]

// marvelHeros.push(dcHeros)

// console.log(marvelHeros);
// console.log(marvelHeros[3][2]);


// marvelHeros.concat(dcHeros)
// console.log(marvelHeros);


// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros);

// or 

// spread
const allNewHeros = [...marvelHeros, ...dcHeros, ...theBoysHero]
// console.log(allNewHeros);


const anotherArr = [1,2,3, [4,5,6], 7, [6,7, [4,5]]]

const realArr = anotherArr.flat(Infinity)

// console.log(realArr);


// console.log(Array.isArray("Megh"))

console.log(Array.from("Megh"))

console.log(Array.from({name: "Megh",
    surname: "Bari"
})) // intersting 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));