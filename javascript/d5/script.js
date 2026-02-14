// // // Whole-script strict mode syntax
// // "use strict";
// // const v = "Hi! I'm a strict mode script!";
// // console.log("v", v);

// // const user = {
// //   name: "hello",
// //   age: 15,
// //   address: {
// //     street: 3,
// //     flat: 325,
// //     apt: "om kar",
// //     city: {
// //       name: "surat",
// //       pin: "3950--",
// //     },
// //   },
// // };

// // const newuser = {
// //   address: { ...user.address },
// // };
// // console.log("newuser", newuser);

// // const {
// //   name,
// //   address: {
// //     street: sheri,
// //     city: { name: cityn },
// //   },
// // } = user;
// // console.log("user data:", name, sheri, cityn);
// // const nestedArray = [1, [2, 3], 4];

// // const [a, [b, c], d] = nestedArray;

// // console.log(a); // 1
// // console.log(b); // 2
// // console.log(c); // 3
// // console.log(d); // 4

// // function sum(...arg) {
// //   console.log("arg length:", arg.length);
// // }

// // sum(1,2,5,46,4)

// class myClass {
//   name;
//   age;
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   getters() {
//     console.log("name is:", this.name);
//     console.log("age is:", this.age);
//   }
// }

// // const firstClass = new myClass("ravi", 15);

// // console.log("firstClass.name", firstClass.name);

// class professor extends myClass {
//   constructor(name, teacher) {
//     super(name);
//     this.teacher = teacher;
//   }
//   getter() {
//     console.log("name", this.name, this.teacher);
//   }
//   grade(paper) {
//     const grade = Math.floor(Math.random() * (5 - 1) + 1);
//     console.log(grade);
//   }
// }

// // const myProff = new professor("Pat sir", "maths");

// // myProff.getters();
// // // console.log("my professor", myProff.getter());

// class Student extends myClass {
//   #year;

//   constructor(name, year) {
//     super(name);
//     this.#year = year;
//   }

//   introduceSelf() {
//     console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
//   }

//   canStudyArchery() {
//     return this.#year > 1;
//   }
// }

// // const myStudent = new Student("ravi", 1980);

// // myStudent.introduceSelf();
// // myStudent.getters();
// // console.log("true", myStudent.canStudyArchery());

// // class Example {
// //   somePublicMethod() {
// //     this.#somePrivateMethod();
// //   }

// //   #somePrivateMethod() {
// //     console.log("You called me?");
// //   }
// // }

// // // const myExample = new Example();

// // const map = new Map();
// // map.set(11, { name: "name", age: 18 });

// // console.log('map val',map.get(11));

// const prompt = require("prompt-sync")({ sigint: true }); // Allows exiting with Ctrl+C

// // const name = prompt("What is your name? ");
// // console.log(`Hello, ${name}!`);

// // // Input is always read as a string, convert to a number if needed
// // const age = prompt("How old are you? ");
// // console.log(`You are ${Number(age)} years old.`);

// class User {
//   constructor(id, name, email, age) {
//     this.id = id;
//     this.name = name;
//     this.email = email;
//     this.age = age;
//   }
//   isAdult() {
//     return this.age >= 18;
//   }
//   getEmailDomain() {
//     const emailDomain = this.email.split("@")[1];
//     return emailDomain;
//   }
// }

// // createClassObj();

// function createClassObj() {
//   const usersClassObj = [];

//   mergedUser.forEach(({ id, name, email, age }) => {
//     usersClassObj.push(new User(id, name, email, age));
//   });

//   const usersMap = new Map();

//   usersClassObj.forEach((userObj) => {
//     usersMap.set(userObj.id, userObj);
//   });

//   const getAllEmail = usersClassObj.map((classObj) => {
//     return classObj.getEmailDomain();
//   });

//   const uniqueEmail = new Set(getAllEmail);

//   const uniqueEmailEle = document.querySelector("#uniqueEmailEle");

//   uniqueEmailEle.textContent = `Unique Email Domains: ${uniqueEmail.size}`;
//   console.log(uniqueEmail.size);
// }

// // Persistent User Dashboard

// // function saveUserInLocalStorage(users) {
// //   const stringifyUsers = JSON.stringify(users);
// //   localStorage.setItem("users", stringifyUsers);
// //   const message = "User Saved Successfully";
// //   return message;
// // }

// // function getUserFromLocalStorage() {
// //   const data = localStorage.getItem("users");
// //   const parsed = dataParseToJSON(data);
// //   return parsed;
// // }

// // parse error handle

// // function dataParseToJSON(data) {
// //   try {
// //     if (data === null) {
// //       throw new Error("no data to parse");
// //     }
// //     const parsedData = JSON.parse(data);

// //     return parsedData;
// //   } catch (error) {
// //     console.log(error.message || "unknown error while parsing");
// //   }
// // }

// // updateUser in LocalStorage

// // function updateUserInLocalStorage(updatedData) {
// //   const stringify = JSON.stringify(updatedData);
// //   localStorage.setItem("users", stringify);
// //   const message = "data updated in localstorage";
// //   return message;
// // }
// class Users {
//   id;
//   name;
//   email;
//   age;

//   constructor(id, name, email, age) {
//     this.id = id;
//     this.name = name;
//     this.email = email;
//     this.age = age;
//   }

//   getter() {
//     const { id, name, email, age } = this;
//     // const userObj = { id };
//     return { id, name, email, age };
//   }

//   isAdult() {
//     return this.age >= 18;
//   }

//   getEmailDomain() {
//     return this.email.split(".")[1];
//   }
// }

// // const users = new Map(); // Key: userId, Value: User object
// // const uniqueEmails = new Set(); // To prevent duplicate emails

// // function addUser(id, name, email, age) {
// //   // Check if ID already exists
// //   if (users.has(id)) {
// //     console.log(`Error: User with ID ${id} already exists.`);
// //     return;
// //   }

// //   // Check if Email already exists
// //   if (uniqueEmails.has(email)) {
// //     console.log(`Error: Email ${email} is already in use.`);
// //     return;
// //   }

// //   // Create and Store
// //   const newUser = new User(id, name, email, age);
// //   users.set(id, newUser);
// //   uniqueEmails.add(email);

// //   console.log(`User ${name} added successfully!`);
// // }

// const newuser = new Users(11, "om", "this@email.com", 19);

// console.log("adult", newuser);
// console.log("email domain", newuser.getEmailDomain());

// console.log("getter", newuser.getter());

