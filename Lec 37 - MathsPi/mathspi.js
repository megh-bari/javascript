// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI)

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);

const user = {
  name: "megh",
  age: 18,
  openForWork: true,

  hire: function () {
    console.log("code fatt gaya!");
  },
};

console.log(Object.getOwnPropertyDescriptor(user, "name"));

Object.defineProperty(user, "name", {
  //   writable: false,
  enumerable: true,
});

console.log(Object.getOwnPropertyDescriptor(user, "name"));

for (let [key, value] of Object.entries(user)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  } else {
    console.log("code fatt gaya!");
  }
}
