let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());


// const myCreatedDate = new Date(2024,0,18)
// console.log(myCreatedDate.toDateString());

// const myCreatedDate = new Date(2024,0,18, 5,10)
const myCreatedDate = new Date("01-18-2024")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000)); //second

let newDate = new Date()
// console.log(newDate.getDate());
// console.log(newDate.getDay()); 
// console.log(newDate.getMonth()); 
// console.log(newDate.getFullYear());


newDate.toLocaleString('default',{
    weekday: 'long',
    day: '2-digit'
})
