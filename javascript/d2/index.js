// //basics of functions

// function sayhello() {
//   return "hello!";
// }
// console.log("fun call:", sayhello());
// // rest parameters
// function sumAll(...numbers) {
//   return numbers.reduce((accumulator, current) => accumulator + current, 0);
// }

// console.log(sumAll(1, 2, 3, 4)); // Output: 10
// console.log(sumAll(5, 10)); // Output: 15

// //ary methods

// const arr = ["Banana", "Orange", "Apple", "Mango"];

// let newarr = arr.toString();
// console.log("arr", arr);
// console.log("newarr", newarr);

// const myGirls = ["el", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];

// const myChildren = myGirls.concat(myBoys);
// console.log("contact arr", myChildren);

// const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// fruits.copyWithin(2, 0, 2);
// console.log("fruits", fruits);

// const persons = [
//   { firstname: "Malcom", lastname: "Reynolds" },
//   { firstname: "Kaylee", lastname: "Frye" },
//   { firstname: "Jayne", lastname: "Cobb" },
// ];

// function getFullName(item) {
//   return [item.firstname, item.lastname].join(" ");
// }

// const fullname = persons.map(getFullName);
// console.log('fullaname',fullname);

const arr = [21, 54, 3];

const adult = arr.find((prev) => prev >= 18);
console.log("adult", adult);

const ages = [38, 89, 18, 20];

const newage = ages.some((age) => {
  return age > 18;
});
console.log("newage", newage);

const everyage = ages.every((age) => age > 17);
console.log("every age is greater than 17", everyage);

//rest and spread operators


