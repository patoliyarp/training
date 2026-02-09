// const prompt = require("prompt-sync")({ sigint: true }); // Add { sigint: true } to allow Ctrl+C to exit

// const name = prompt("What is your name? ");

// if (typeof name != "string") {
//   console.log("tyepe", typeof name);
//   console.log("enter valid name");
//   return;
// } else {
//   console.log("typ", typeof name);
//   console.log(`Hello, ${name}!`);
// }

// const age = prompt("enter the age");
// console.log("age is :", age);
// const email = prompt("enter the email");
// console.log("email is ", email);

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name! :", (name) => {
  if (!isNaN(name) || !/^[a-zA-Z][a-zA-Z0-9_]{2,15}$/.test(name)) {
    console.log("please enter valid name");
    rl.close();
    return;
  }
  rl.question("enter your age! :", (age) => {
    age = parseInt(age);
    if (isNaN(age) || !(age >= 1 && age <= 120) || !/^\d{1,3}$/.test(age)) {
      console.log("please enter valid age");
      rl.close();
      return;
    }
    rl.question("please enter your email! :", (email) => {
      if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        console.log("please enter valid email");
        rl.close();
        return;
      }
      console.log("-------------------------");
      console.log("user id is :", Math.floor(Math.random() * 100));
      console.log("username is :", name.toLocaleUpperCase());
      console.log("age is :", age);
      console.log("email is :", email);

      rl.close();
    });
  });
});

// rl.on("close", () => {
//   console.log("BYE BYE !!!");
//   process.exit(0);
// });
