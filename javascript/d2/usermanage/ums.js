const prompt = require("prompt-sync")({ sigint: true });
let user = [
  {
    id: 1,
    fname: "rar",
    age: 19,
  },
  { id: 2, fname: "Alice", age: 25 },
  { id: 3, fname: "Bob", age: 16 },
];
//add user in arr
function addUser(oldUser, newUser) {
  return [...oldUser, newUser];
}

function getUserById(allUser, id) {
  return allUser.find((prev) => prev.id == id);
}

function getAdults(allUser) {
  return allUser.filter((data) => data.age >= 18);
}
function getAverageAge(allUser) {
  return allUser.reduce((acc, val) => acc + val.age, 0) / allUser.length;
}
let choice;
do {
  console.log("1 for see existing user");
  console.log("2 for add user");
  console.log("3 for get user by id");
  console.log("4 for get all adults");
  console.log("5 for get average");
  console.log("0 for exit");
  // console.log('enter your choice');
  choice = prompt("enter your choice: ");
  console.log("-----------");
  switch (choice) {
    case "1":
      for (let i = 0; i < user.length; i++) {
        console.log("user id:", user[i].id);
        console.log("user name", user[i].fname);
        console.log("user age", user[i].age);
        console.log("------------");
      }
      break;
    case "2":
      const id = Date.now();
      const name = prompt("enter name: ");
      const age = prompt("enter your age: ");
      // user.push({
      //   id,
      //   fname: name,
      //   age,
      // });
      user = addUser(user, { id, fname: name, age });

      break;
    case "3":
      const uid = prompt("enter id");
      const newUser = getUserById(user, uid);
      console.log("user is:", newUser);
      break;
    case "4":
      const adults = getAdults(user);
      console.log("adults:", adults);
      break;

    case "5":
      const averageAge = getAverageAge(user);
      console.log("average age", averageAge);
      break;
    case 0:
      break;
    // exit;
    default:
  }
} while (choice != 0);
