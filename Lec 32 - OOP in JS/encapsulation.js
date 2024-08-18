// ! Encapsulation : Encapsulation is the process of bundling data and methods into a single unit, such as a class

class BankAccount {
  #balance = 0; //Private property

  deposite(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: ${amount}`);
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrew: ${amount}`);
    } else {
        console.log('Insufficient funds')
    }
  }
  getBalance(){
    return this.#balance
  }
}

let myAccount = new BankAccount()
myAccount.deposite(100)
myAccount.withdraw(50)
console.log(myAccount.getBalance())



// * As I already mentioned, one of the real world example of encapsulation is Capsule, as capsule binds all it's medicinal materials within it
// * Another real world example can be your school or office bag.
