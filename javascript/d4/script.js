// console.log("Hi");

// setTimeout(() => {
//   console.log("time");
// }, 1000);

// const pm = new Promise((res, rej) => {
//   setTimeout(() => {
//     console.log("promises");
//     res();
//   }, 1000);
// });

// console.log("End");

// function mycb(name,cb){
//     console.log('hello',name);
//     cb()
// }

// mycb("ravi",sayBye)

// function greet(name, callback) {
//   console.log("Hello, " + name);
//   callback();
// }

// function sayBye() {
//   console.log("Goodbye!");
// }

// greet("Ajay", sayBye);

// Callback function to process user data
// function process(data, callback) {
//   console.log("Processing user data:", data);
//   callback();
// }
// // Function to fetch user data with a callback
// function fetch(callback) {
//   // Simulating an API request
//   const user = { id: 1, name: "Pushkar" };
//   callback(user);
// }

// fetch((data) => {
//   process(data, () => {
//     console.log("user process");
//   });
// });
// // Using the callback
// fetch((data) => {
//   process(data, () => {
//     console.log("User data processed successfully.");
//   });
// });
// function userdata(data, cb) {
//   console.log("userdata", data);
//   cb();
// }

// function fetch(cb) {
//   const user = { id: 3, name: "om" };
//   cb(user);
// }

let mypromise = new Promise((resolve, reject) => {
  let res = true;

  if (res == true) {
    resolve("promise resolved success");
    return { id: 1, name: "joe" };
  } else {
    reject("unsuccess rejected");
    return { err: "something went wrong" };
  }
});

// mypromise
//   .then((data) => console.log("thi is data", data))
//   .catch((er) => console.log("this is err", er));
// mypromise
//   .then((value) => `${value} and bar\n`)
//   .then((value) => `${value} and bar again\n`)
//   .then((value) => `${value} and again\n`)
//   .then((value) => `${value} and again\n`)
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

fetch("https://jsonplaceholder.typicode.com/users")
  .then((data) => data.json())
  .then((data) => {
    console.log("data", data);
  });
