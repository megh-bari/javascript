// const can not be changed
const account_Id = 17853

let account_Email = "abc@google.com"
var account_Passowrd = "1823"
account_City = "Mumbai"

// account_Id = 2  // not allowed

account_Email = "xyx@gmail.com"
account_Passowrd = "123456"
account_City = "Pune"
let account_state;



console.log(account_Id);

/*
Prefer not to use var 
because of issue in block scope and fuctional scope
*/


console.table([account_Id, account_Email, account_Passowrd, account_City, account_state])