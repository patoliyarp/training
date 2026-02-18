function hello(name) {
    return "hello".concat(name);
}
console.log("fn", hello("rar"));
var active = false;
var hasPermission = "false";
var age = 18;
var height = 189.5;
var hex = 0xf54e;
var octal = 478;
var binary = 5;
// const uniqueKey: symbol = Symbol("ok");
// const obj = {
//   [uniqueKey]: "this is unique sys",
// };
// console.log("sym", obj[uniqueKey]);
// let myAny: any = "hello";
// console.log(myAny.toUpperCase());
// myAny = 123;
// console.log(myAny.toUpperCase());
var data = "hello";
if (typeof data === "string") {
    console.log("data", data);
}
function errorMsg(msg) {
    throw new Error(msg);
}
// console.log("err", errorMsg("error"));
var script = ["npm", "i"];
var color = [40.7128, -74.006];
var maybe = undefined;
var outTuple;
outTuple = [3, false, "df"];
// const car = {
//   model: "bmw",
// };
var cars = {
    model: "benz",
};
var user;
(function (user) {
    user[user["customer"] = 0] = "customer";
    user[user["admin"] = 1] = "admin";
    user[user["superAdmin"] = 2] = "superAdmin";
})(user || (user = {}));
console.log("enum", user.superAdmin);
var carYear = 2011;
var carModel = "benz";
var car = {
    year: carYear,
    model: carModel,
};
var bear = { name: "omni", honey: true };
var res = "success";
console.log("res", res);
var rect = {
    height: 20,
    width: 65,
};
var dog = { name: "dog", age: 15 };
var UserAcc = /** @class */ (function () {
    function UserAcc(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAcc;
}());
var users = { name: "Sdf" };
function statusCode(code) {
    console.log("this is code", code);
}
statusCode(434);
function gettime() {
    return 34;
}
function add(a, b, c) {
    return a + b + (c || 0);
}
console.log("gettime", add(2, 3, 10));
var x = "hello";
console.log("x", x.toUpperCase());
console.log("x", x.length);
var val = "this represent current context";
console.log("val typecast", val);
console.log("type", typeof val);
// class Person {
//   name: string;
// }
// const person = new Person();
// person.name = "Jane";
// console.log("person name", person.name);
function sum(a, c, b) {
    return a + c;
}
var myName = ["dfd"];
var cara = { x: "this is readonly" };
console.log("cara", cara.x);
// console.log('cara',cara.x="jfd");
function createPair(val1, val2) {
    return [val1, val2];
}
console.log("this is", createPair("hello", 45));
function generics(args) {
    console.log("args", args);
    return args;
}
generics("this is generics");
generics(3435464564564545);
function def(a, b) {
    if (a === void 0) { a = 10; }
    if (b === void 0) { b = 6; }
    // console.log("def", def());
    return a + b;
}
def();
var greet = function (name) {
    if (name === void 0) { name = "salman"; }
    return "hi".concat(name);
};
console.log("greet", greet());
greet();
var upper = function (s) { return s.toUpperCase(); };
console.log("upper", upper("this is upper"));
var use = {
    name: "dfd",
    role: "admin",
};
console.log("user", use);
var myClass = /** @class */ (function () {
    function myClass(name) {
        this.name = name;
    }
    myClass.prototype.setValue = function (value) {
        this._value = value;
    };
    myClass.prototype.getValue = function () {
        return this._value;
    };
    return myClass;
}());
var value = new myClass("raa");
console.log("get val", value.setValue(54), value.getValue());
function printPersonProperty(persons, property) {
    console.log("Printing person property ".concat(property, ": \"").concat(persons[property], "\""));
}
var persons = {
    name: "Max",
    age: 27,
};
printPersonProperty(persons, "name");
var num = { value: 1245 };
// class Storage<T> {
//   private data: T[] = [];
//   addItem(item: T): void {
//     this.data.push(item);
//   }
//   getItems(): T[] {
//     return this.data;
//   }
// }
var arr = [1, 4, 7, 8, 5];
var pointpart = {};
pointpart.x = 10;
var nameAge = {
    alice: 21,
    bob: 25,
};
var bob = {
    name: "bob",
};
var boBu = {
    name: "boBu",
};
var point = {
    x: 10,
    y: 20,
};
var persona = {
    //   x: 10,
    name: "this",
    age: 54,
};
// this is use of mapped datatype
var partialPerson = {
    name: "json",
};
// let name = "Alice"; // type: string
// Const assertion (narrows to literal type)
var nameConst = "Alice"; // type: "Alice"
// With objects
var userRar = {
    id: 1,
    name: "Alice",
    roles: ["admin", "user"],
};
var names = "Rar";
