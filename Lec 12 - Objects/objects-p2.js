// object singlton or constructor

// const appUser = new Object()

// console.log(appUser)

const app = {};
app.id = "123@abc";
app.name = "Samm";
app.isLoggedIn = false;

// console.log(app)

const regularUser = {
  name: "Megh",
  email: "abc@xyz.com",
  fullname: {
    userFullName: {
      firstName: "megh",
      lastName: "bari",
    },
  },
};

// console.log(regularUser.fullname.userFullName)

const obj1 = {
  1: "a",
  2: "b",
  3: "c",
};

const obj2 = {
  4: "a",
  5: "b",
  6: "c",
};
// const obj3 = {obj1, obj2}

// const obj3  = Object.assign({}, obj1, obj2)

const obj3 = {...obj1,...obj2}
// console.log(obj3)

const users = [

    {
        id : 1,
        email: "abc@xyz.com"
    },
    {
        id : 1,
        email: "abc@xyz.com"
    },
    {
        id : 1,
        email: "abc@xyz.com"
    },
    {
        id : 1,
        email: "abc@xyz.com"
    }
    
]

users[1].email
console.log(app)

console.log(Object.keys(app))
console.log(Object.values(app))
console.log(Object.entries(app))



console.log(app.hasOwnProperty("isLoggedIn"))
console.log(app.hasOwnProperty("isLoggedOut"))