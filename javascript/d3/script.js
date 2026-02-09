let user = {
  fname: "rar",
  age: 15,
  address: {
    house: 18,
    street: 3,
    soc: "co op house soc",
    city: "surat",
  },
  pets: {
    dog: "wol",
    owner: this.fname,
  },
};
let {
  fname: names,
  address: { house: houseno },
} = user;
console.log("user", houseno);

// let obj = new Object({
//     fname:"object using new keyword"

// })

// user["last name"]="lorem"

// console.log('pets owner ',user.pets.owner);
// console.log('user',user);

let person = {
  fname: "john",
  lname: "wick",
  id: 98,
  fullname: function () {
    return this.fname + this.lname;
  },
};
// console.log("fullname", Object.values(person));

// for (let i in person) {
//   if (typeof person[i] != "function") {
//     console.log("person", person[i]);
//   }else{
//     console.log('person',person[i]());
//   }
// }

let text = JSON.stringify(person);

// console.log("text", JSON.parse(text));

const obj = {
  firstName: "John",
  lastName: "Doe",
  language: "",
  set lang(lang) {
    this.language = lang;
  },
};

// Set an object property using a setter:
obj.lang = "en";
console.log("obj lang ", obj.language);

// Use 'let' so we can update the array when deleting
let users = [
  { id: 1, fname: "rar", age: 19 },
  { id: 2, fname: "Alice", age: 25 },
  { id: 3, fname: "Bob", age: 16 },
];

const myForm = document.querySelector("#myForm");
const usernameInput = document.getElementById("username"); // Renamed for clarity
const data_container = document.getElementById("data-container");

function addUser() {
  const nameValue = usernameInput.value.trim();
  if (!nameValue) return; // Don't add empty names

  const newUser = {
    id: Date.now(),
    fname: nameValue,
    age: Math.floor(Math.random() * 50) + 18, // Random age between 18-68
  };

  // Update array and re-render
  users = [...users, newUser];
  renderUser();
  usernameInput.value = ""; // Clear input
}

function deleteUser(id) {
  // Filter out the specific record by ID
  users = users.filter((user) => user.id !== id);
  renderUser();
}

function renderUser() {
  data_container.innerHTML = ""; // Clear existing list

  users.forEach((user) => {
    const li = document.createElement("li");
    li.className = "flex justify-between items-center p-2 border-b";
    li.textContent = `${user.fname} (Age: ${user.age})`;

    const btn = document.createElement("button");
    btn.className = "bg-red-500 text-white px-2 py-1 rounded ml-4";
    btn.textContent = "delete";

    // Add delete functionality to each button
    btn.onclick = () => deleteUser(user.id);

    li.appendChild(btn);
    data_container.appendChild(li);
  });
}

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addUser();
});

// Initial render to show default data
renderUser();
