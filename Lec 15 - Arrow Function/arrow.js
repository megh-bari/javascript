const user = {
  username: "Megh",
  age: 18,
  price: 999,

  welcomemsg: function () {
    console.log(`${this.username} , welcome to website`);
    // console.log(this)
    // this => current context ko refer krta hai!
  },
};

// user.welcomemsg()
// user.username = "Sam"
// user.welcomemsg()

// console.log(this)

// function ke ander this use nhi hota
// function code() {
//     let username = "Megh"
//     console.log(this.username)
// }

// code()

//  arrow function ke ander this use nhi hota
const newUser = () => {
    let username = "Megh";
    console.log(this);
  };
  
//   newUser();
  

// *************** Arrow Function *************

const addTwo = (num1, num2) => {
    return num1+num2
}
// console.log(addTwo(1,2))

// implicit return 

// const sum = (n1,n2) =>  n1+n2
// const sum = (n1,n2) =>  (n1+n2)

// const sum = (n1,n2) => ( {user: "megh"})

console.log(sum(2,2))

