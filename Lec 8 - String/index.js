// String

const name = "Megh";
const repoCount = 20;

// console.log(name+  repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("MeghBari");

console.log(gameName[0]);

// console.log(gameName.__proto__); // we don't use

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));

console.log(gameName.indexOf('B'));

const newString = gameName.substring(0, 2)
console.log(newString);

const anotherString = gameName.slice(0,5) // negative value allowed
console.log(anotherString);

const userName = "  Namaste Duniya"
console.log(userName);
console.log(userName.trim());

const url = "https://megh%20bari.com/projects"
console.log(url.replace('%20', '-'));
console.log(url.includes("megh")); // true
console.log(url.includes("hey")); // false

const nobody = "megh-bari"
console.log(nobody.split('-'));