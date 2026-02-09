// var example
var x = 10;
var x = 20; // Re-declaration allowed
x = 30; // Update allowed
// console.log(x); // Output: 30

// let example
let y = 10;
// let y = 20; // Re-declaration NOT allowed
y = 25; // Update allowed
// console.log(y); // Output: 25

// const example
const z = 10;
// z = 20;     // Re-assignment NOT allowed
// console.log(z); // Output: 10

// Block scope demonstration
// if (true) {
//   var a = 1;
//   let b = 2;
//   const c = 3;
// }

// console.log(a); // Works (var is function/global scoped)
// console.log(b); //  Error (let is block scoped)
// console.log(c); //  Error (const is block scoped)

// console.log("num:", typeof `12`);
// let a = 10,
//   b = "str",
//   c = "str2",
//   d = false,
//   e = null;
// let obj = {
//   name: "ra",
// };
// let arr = [1, 4, e];
// function sum() {}
// const pm = new Promise((resolve, reject) => {
//   resolve();
// });
// console.log("num:", typeof a);
// console.log("str", typeof b);
// console.log("str2", typeof c);
// console.log("bool", typeof d);
// console.log("null", typeof e);
// console.log("obj", typeof pm);

// const names = "Ravi padhiyar";

// console.log("", names.toUpperCase());

// let num = Math.random() * 9;

// let n = `sr`;
// console.log("");

// console.log("random", num);
// console.log("round", Math.floor(num));

// console.log("num", parseInt(n));

// const regexPattern = /^([a-z0-9]{5,})$/; // Matches strings with 5+ alphanumeric chars
// const validString = "abcde123";
// const invalidString = "ab1";

// // Check if the string matches the pattern
// console.log(regexPattern.test(validString)); // Output: true
// console.log(regexPattern.test(invalidString)); // Output: false

// let numregex = /[0-9]/;

// let namew = "ere3";
// console.log("inside", numregex.test(namew));
// if (numregex.test(namew)) {
// }

// let str = "rav6";
// let num = "15";
// // num=parseInt(num)
// console.log("is nan", !isNaN(num));

// console.log("fix", (12.65).toFixed());

// let age = Math.floor(Math.random() * 100);
// console.log("age:", age);
// switch (true) {
//   case age > 18:
//     console.log("you are adult");
//     break;

//   default:
//     console.log("default case is this");
//     break;
// }

// const arr = ["audi", "bmw", "toyota", "tata"];

// const [car] = arr;
// console.log('cars:',car);
// console.log(`outside of global c:${c}`);

// let a = 10;
// const b = 20;
// var c = 30;

// console.log(`outside of global a:${a} ,b:${b},c:${c}`);

// function hello() {
//     const age = 87;
//     let dum = 45;
//   if(true){
//     var height = 77;
//   }
//   console.log(`dum:${dum},age:${age},df:${height}`);
// }
// hello();

// const nm = "Ravi";
// const str = " padhiyar";
// const str2 = String.fromCharCode(100); //d
// console.log("str2", str2);
// let text = "Hello world, welcome to the universe.";
// console.log("index of:", text.indexOf("world"));
// console.log("char:", nm.includes("v"));
// console.log('match:',text.match("orl"));
// let text1 = "ab";
// let text2 = "ab";
// let result = text1.localeCompare(text2);
// console.log('result :',result);

console.log("--------------");
let text = "Hello world!";
let result = text.slice(6);
let splitans = text.split(" ");
console.log("result", splitans);

console.log("replace", text.replaceAll("l", "e"));
console.log('ne',text);
