const promiseOne = new Promise(function (resolve, reject) {
  //* Do an async task
  // * DB Calls, cyptrography, network

  setTimeout(function () {
    console.log("Async task is completed");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed!");
});

new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async task 2 completed");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Promise 2 consumed!");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "megh", email: "meghbari18@gmail.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "megh", password: "1234" });
    } else {
      reject("ERROR: Something went wrong!");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("The promise is either resolve or rejected");
  });

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Javascript", password: "Javascript123" });
    } else {
      reject("ERROR: Javascript went wrong!");
    }
  }, 1000);
});

async function consumePromise() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

consumePromise();

// * try and catch

// async function getAllUserData() {
//   try {
//     const response = await fetch("https://jsonplaceholder.org/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("E:", error);
//   }
// }

// getAllUserData();

// * .then .catch

fetch("https://api.github.com/users/megh-bari")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.error("E:", e);
  });
