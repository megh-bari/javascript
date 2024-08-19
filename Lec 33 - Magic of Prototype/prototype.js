let myHeros = ["spiderman", "thor", "ironman"];

let power = {
  thor: "Hammer",
  spiderman: "sling",
  ironman: "mind",

  getSpidermanPower: function () {
    console.log(`Spidey power is ${this.spiderman}`);
  },
};

Object.prototype.megh = function () {
  console.log(`Megh is present in all objects`);
};

// power.megh()
myHeros.megh();

Array.prototype.arryOfMegh = function () {
  console.log(`Megh says hello`);
};

myHeros.arryOfMegh();
// power.arryOfMegh()

//* inheritance

const user = {
  name: "megh",
  email: "meghbari123@hacker.com",
};

const teacher = {
  makeVideo: true,
};

const teachingSupport = {
  isAvaliable: false,
};

const TASupport = {
  makeAssignement: "JS Assignment",
  fullTime: true,
  __proto__: teachingSupport,
};

teacher: __proto__ = user;

// * modern syntax

Object.setPrototypeOf(teachingSupport, teacher);

let userName = "Megh Bari";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True Length is ${this.trim().length}`);
};

userName.trueLength();


"megh".trueLength()
