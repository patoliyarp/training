let user = JSON.parse(localStorage.getItem("localUser")) || [
  {
    id: 11,
    name: "rar",
    email: "ravi@adf.com",
    age: 19,
    type: "local",
  },
  {
    id: 12,
    name: "Alice",
    email: "ravi@adf.com",
    age: 25,
    type: "local",
  },
  {
    id: 13,
    name: "Bob",
    email: "fod@fdd.com",
    age: 16,
    type: "local",
  },
];
let DummyApiUser = [];
let mergedUser = [];

//get elements
const myForm = document.querySelector("#myForm");
const username = document.getElementById("username");
const age = document.getElementById("age");
const email = document.getElementById("email");
const data_container = document.getElementById("data-container");

//merge both api and local user
function mergeUser() {
  mergedUser = [...DummyApiUser, ...user];
}

//save data to local storage
function saveLocal() {
  try {
    const saveToLocal = localStorage.setItem("localUser", JSON.stringify(user));
    // console.log("data saved to local", JSON.parse(saveToLocal));
  } catch (error) {
    console.log("error while add data to local", error);
  }
}

//fetch api data
async function fetchUser() {
  try {
    //spin animation
    document.getElementById("Refresh-spin").classList.add("animate-spin");

    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    DummyApiUser = data.map((obj) => ({ ...obj, type: "api" }));

    //stop animation
    document.getElementById("Refresh-spin").classList.remove("animate-spin");
    document.getElementById("apiErr").textContent = "";

    mergeUser();
    console.log("merge", mergedUser);
    renderUser();

    return data;
  } catch (error) {
    console.log("error while fetch user", error);
    //add local user if api fails
    mergedUser = [...user];
    renderUser();

    //display error if fail and stop spin animation
    document.getElementById("apiErr").textContent =
      "Error while fetch user info";
    document.getElementById("Refresh-spin").classList.remove("animate-spin");
  }
}
fetchUser();

//add user object to arr
function addUser() {
  const id = Date.now();
  let newUser = username.value;
  let newAge = age.value;
  let newEmail = email.value;

  //validation for empty field
  if (newUser === "" || newAge === "" || newEmail === "") {
    document.getElementById("ageErr").textContent = "all fields are required";
    return;
  } else {
    document.getElementById("ageErr").textContent = "";
  }
  //validation for user name
  if (!isNaN(newUser) || !/^[a-zA-Z][a-zA-Z0-9_]{2,15}$/.test(newUser)) {
    document.getElementById("nameErr").textContent = "please enter valid name";
    return;
  } else {
    document.getElementById("nameErr").textContent = "";
  }
  //validation for email
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(newEmail)) {
    document.getElementById("emailErr").textContent =
      "please enter valid email address";
    return;
  } else {
    document.getElementById("emailErr").textContent = "";
  }
  //validation fro age
  if (
    isNaN(newAge) ||
    !(newAge >= 1 && newAge <= 120) ||
    !/^\d{1,3}$/.test(newAge)
  ) {
    document.getElementById("ageErr").textContent = "please enter valid age";
    return;
  } else {
    document.getElementById("ageErr").textContent = "";
  }

  //add user to arr of object
  // localUser = [
  //   ...localUser,
  //   { id, name: newUser, age: newAge, email: newEmail },
  // ];
  // saveLocal();
  const newUserObj = {
    id: Date.now(),
    name: newUser,
    age: newAge,
    email: newEmail,
    type: "local",
  };
  // mergedUser = [...mergedUser, newUserObj];
  user = [...user, newUserObj];

  // Push to the active list
  // mergedUser.push(newUserObj);
  // user = [...user, { id, name: newUser, age: newAge, email: newEmail }];
  console.log("user user", user);
  saveLocal();
  mergeUser();
  renderUser();

  //clean up input fields
  username.value = "";
  age.value = "";
  email.value = "";
}

//delete user by id
function deleteUser(id, type) {
  console.log("id and tye", id, type);
  if (type === "local") {
    user = user.filter((data) => data.id != id);
    saveLocal();
  }
  if (type === "api") {
    console.log("inside api", DummyApiUser);
    DummyApiUser = DummyApiUser.filter((data) => data.id != id);
    console.log("after delete", DummyApiUser);
  }
  mergeUser();
  renderUser();
}

//function for display user
function renderUser() {
  data_container.innerHTML = "";

  for (let i = mergedUser.length - 1; i >= 0; i--) {
    const li = document.createElement("li");
    li.className =
      "p-4 bg-gray-700 border border-gray-600 rounded-lg flex justify-between items-center transition-transform duration-300 hover:scale-[1.02] ";
    // li.textContent = `${user[i].fname} (age :${user[i].age})`;
    let randAge = Math.floor(Math.random() * 30) + 10;
    mergedUser[i].age ? console.log("ok") : (mergedUser[i].age = randAge);
    li.innerHTML = `
      <div>
        <p class="text-gray-100">
          <strong>Name:</strong>${mergedUser[i].name}
        </p>
        <p class="text-gray-300">
          <strong>Age:</strong>${mergedUser[i]?.age}
        </p>
        <p class"text-gray-400">
          <strong>Email:</strong>${mergedUser[i].email}
        </p>
      </div>
    `;

    if (mergedUser[i]?.age >= 18) {
      li.classList.add("bg-green-800");
    }
    if (mergedUser[i].age == undefined && randAge > 18) {
      li.classList.add("bg-green-800");
    }
    const btn = document.createElement("button");
    btn.className =
      "text-white hover:text-white-700 bg-red-700 py-2 px-3 rounded-lg hover:bg-red-600";
    btn.textContent = "delete";
    btn.onclick = () => deleteUser(mergedUser[i].id, mergedUser[i].type);
    li.appendChild(btn);

    data_container.appendChild(li);
  }
  createClassObject();
}

// console.log("form instance", myForm);

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("this is form");
  addUser();
});
renderUser();

// username.addEventListener("input", (e) => {
//   const currVal = e.target.value;
//   console.log("currVal", currVal);
// });

class Users {
  constructor(id, name, email, age) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.age = age;
  }

  isAdult() {
    return this.age >= 18;
  }

  getEmailDomain() {
    return this.email.split("@")[1];
  }
  getter() {
    const { id, name, email, age } = this;
    return { id, name, email, age };
  }
}

//function for create user objects
function createClassObject() {
  const userObj = [];
  mergedUser.forEach(({ id, name, email, age }) => {
    userObj.push(new Users(id, name, email, age));
  });

  const userMap = new Map();
  console.log("usermap", userMap);
  userObj.forEach((obj) => {
    userMap.set(obj.id, obj);
  });

  // console.log("user class object", userObj);

  const AllEmail = userObj.map((obj) => {
    return obj.getEmailDomain();
  });

  const uniqueEmail = new Set(AllEmail);

  document.getElementById("Domains-container").innerHTML = "";

  const myArray = [...uniqueEmail];
  for (let i = myArray.length - 1; i >= 0; i--) {
    const li = document.createElement("li");
    li.className =
      "p-4 bg-gray-700 border border-gray-600 rounded-lg flex justify-between items-center transition-transform duration-300 hover:scale-[1.02] ";
    li.innerHTML = `
      <div>
     
        <p class"text-gray-400">
          <strong>Email:</strong>${myArray[i]}
        </p>
      </div>
    `;
    document.getElementById("Domains-container").appendChild(li);
  }
  // const userMap=new Map();

  // fetchUser
}

const UserSec = document.getElementById("UserSec");
UserSec.addEventListener("click", (e) => {
  data_container.classList.remove("hidden");
  document.getElementById("Domains-container").classList.add("hidden");
  data_container.classList.add("block");
});

const DomainSec = document.getElementById("DomainSec");
DomainSec.addEventListener("click", (e) => {
  document.getElementById("Domains-container").classList.remove("hidden");
  data_container.classList.add("hidden");
  document.getElementById("Domains-container").classList.add("block");
});
