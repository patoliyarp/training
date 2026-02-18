function hello(name: string): string {
  return `hello${name}`;
}

console.log("fn", hello("rar"));

const active: boolean = false;
let hasPermission = "false";

let age: number = 18;
let height: number = 189.5;
let hex: number = 0xf54e;
let octal: number = 0o736;
let binary: number = 0b0101;

// const uniqueKey: symbol = Symbol("ok");
// const obj = {
//   [uniqueKey]: "this is unique sys",
// };

// console.log("sym", obj[uniqueKey]);
// let myAny: any = "hello";
// console.log(myAny.toUpperCase());
// myAny = 123;
// console.log(myAny.toUpperCase());

let data: unknown = "hello";

if (typeof data === "string") {
  console.log("data", data);
}

function errorMsg(msg: string): never {
  throw new Error(msg);
}

// console.log("err", errorMsg("error"));

let script: string[] = ["npm", "i"];
let color: [number, number] = [40.7128, -74.006];
let maybe: undefined | string = undefined;

let outTuple: [number, boolean, string];
outTuple = [3, false, "df"];

// const car = {
//   model: "bmw",
// };
const cars: { model: string } = {
  model: "benz",
};

enum user {
  customer,
  admin,
  superAdmin,
}

console.log("enum", user.superAdmin);

type CarYear = number;
type CarModel = string;

type Car = {
  year: CarYear;
  model: CarModel;
};

const carYear: CarYear = 2011;
const carModel: CarModel = "benz";

const car: Car = {
  year: carYear,
  model: carModel,
};

type animal = { name: string };
type Bear = animal & { honey: boolean };
const bear: Bear = { name: "omni", honey: true };

type status = "success" | "error";
let res: status = "success";

console.log("res", res);

interface rectangle {
  height: number;
  width: number;
}

const rect: rectangle = {
  height: 20,
  width: 65,
};

interface animals {
  name: string;
}
interface animals {
  age: number;
}
const dog: animals = { name: "dog", age: 15 };

interface User {
  name: string;
  id: number;
}

class UserAcc {
  name: string;
  id: number;
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

interface types {
  res: status;
}

type objs = {
  name: string;
};

let users: objs = { name: "Sdf" };

function statusCode(code: string | number) {
  console.log("this is code", code);
}
statusCode(434);

function gettime(): unknown {
  return 34;
}

function add(a: number, b: number, c?: number) {
  return a + b + (c || 0);
}
console.log("gettime", add(2, 3, 10));

let x: unknown = "hello";

console.log("x", (x as status).toUpperCase());

console.log("x", (<string>x).length);

let val = "this represent current context";
console.log("val typecast", <unknown>val);

console.log("type", typeof val);

// class Person {
//   name: string;
// }

// const person = new Person();
// person.name = "Jane";
// console.log("person name", person.name);

function sum(a: number, c: number, b?: number) {
  return a + c;
}

const myName: string[] = ["dfd"];

type obj = {
  readonly x: string;
};
const cara: obj = { x: "this is readonly" };
console.log("cara", cara.x);
// console.log('cara',cara.x="jfd");

function createPair<S, T>(val1: S, val2: T): [S, T] {
  return [val1, val2];
}
console.log("this is", createPair<string, number>("hello", 45));

function generics<T>(args: T): T {
  console.log("args", args);
  return args;
}

generics<string>("this is generics");
generics<number>(3435464564564545);

function def(a: number = 10, b: number = 6) {
  // console.log("def", def());
  return a + b;
}
def();

const greet = (name: string = "salman"): string => `hi${name}`;
console.log("greet", greet());
greet();

type mapper = (s: string) => string;

const upper: mapper = (s) => s.toUpperCase();

console.log("upper", upper("this is upper"));

type ID = string | number;

// const userId: ID = 43;

// type animal = { name: string };
// type Bear = animal & { honey: boolean };
// const bear: Bear = { name: "omni", honey: true };

type Users = { name: string };

type Admin = Users & { role: "admin" };

const use: Admin = {
  name: "dfd",
  role: "admin",
};

console.log("user", use);

class myClass<T> {
  private _value: T | undefined;

  constructor(private name: string) {}

  public setValue(value: T) {
    this._value = value;
  }

  public getValue(): T | undefined {
    return this._value;
  }
}

let value = new myClass<number>("raa");
console.log("get val", value.setValue(54), value.getValue());

interface Person {
  name: string;
  age: number;
}

function printPersonProperty(persons: Person, property: keyof Person) {
  console.log(`Printing person property ${property}: "${persons[property]}"`);
}
let persons = {
  name: "Max",
  age: 27,
};
printPersonProperty(persons, "name");

// function PrintPerson()
interface box<T> {
  value: T;
}
let num: box<number> = { value: 1245 };

// class Storage<T> {
//   private data: T[] = [];

//   addItem(item: T): void {
//     this.data.push(item);
//   }

//   getItems(): T[] {
//     return this.data;
//   }
// }

let arr: number[] = [1, 4, 7, 8, 5];

// const classObj = new Storage<number>();
// classObj.addItem(10);

interface point {
  x: number;
  y: number;
}

let pointpart: Partial<point> = {};
pointpart.x = 10;

const nameAge: Record<string, number> = {
  alice: 21,
  bob: 25,
};

interface person {
  name: string;
  age: number;
}
const bob: Omit<person, "age"> = {
  name: "bob",
};

interface person {}
const boBu: Pick<person, "name"> = {
  name: "boBu",
};

// type Foo<T> = T extends X ? A : B;

type PointGenerator = () => { x: number; y: number };
const point: ReturnType<PointGenerator> = {
  x: 10,
  y: 20,
};

const persona: Readonly<person> = {
  //   x: 10,
  name: "this",
  age: 54,
};

type persona = { name: string; age: number };

//that make all property  optional
type partialperson = {
  [P in keyof persona]?: persona[P];
};

// this is use of mapped datatype
const partialPerson: partialperson = {
  name: "json",
};

type readonlyperons = {
  readonly [p in keyof persona]: persona[p];
};
// let name = "Alice"; // type: string

// Const assertion (narrows to literal type)
const nameConst = "Alice" as const; // type: "Alice"

// With objects
const userRar = {
  id: 1,
  name: "Alice",
  roles: ["admin", "user"] as const,
} as const;

let names = "Rar";
// const name

namespace validation {}
