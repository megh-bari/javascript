// ! Polymorphism : Polymorphism allows us to perform a single action in different ways. In other words, polymorphism allows you to define one interface and have multiple implementations. The word “poly” means many and “morphs” means forms, So it means many forms.

class Animal {
  makeSound() {
    console.log("Some generic sound");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Barkkk");
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("Meowww");
  }
}

let animals = [new Dog(), new Cat(), new Animal()];

animals.forEach((animal) => {
  animal.makeSound();
});

// * Behaviour of humans:  Like a person behaves differently with different person. The person can be causal with his friends, professional with his colleagues and seniors. Thus Person which is object here shows different behaviour in different situation.
