// ! Abstarction : Abstraction is the concept of hiding the complex implementation details of a system and exposing only the necessary parts

class Car {
  startEngine() {
    console.log("Engine Started");
  }

  drive() {
    console.log("Driving the car");
  }

  stopEngine() {
    console.log("Engine Stopped!");
  }
}

let myCar = new Car()
myCar.startEngine()
myCar.drive()
myCar.stopEngine()


// * Your car is a great example of abstraction. You can start a car by turning the key or pressing the start button. You don't need to know how the engine is getting started, what all components your car has. The car internal implementation and complex logic is completely hidden from the user.