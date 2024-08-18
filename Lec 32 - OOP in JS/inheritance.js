// ! Inheritance : where a class can inherit from more than one class

class Animal {
  eat() {
    console.log("Eating...");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Barking...");
  }
}

let myDog = new Dog();
myDog.eat();
myDog.bark();

// * This means that the Dog class includes all of the members of the Animal class, as well as any extra members defined by it. The Dog class defines an additional member method called bark() in this situation.
