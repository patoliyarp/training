let user = [
  {
    id: 1,
    fname: "rar",
    email: "ravi@adf.com",
    age: 19,
  },
  {
    id: 2,
    fname: "Alice",
    email: "ravi@adf.com",
    age: 25,
  },
  {
    id: 3,
    fname: "Bob",
    email: "fod@fdd.com",
    age: 16,
  },
];

//get elements
const myForm = document.querySelector("#myForm");
const username = document.getElementById("username");
const age = document.getElementById("age");
const email = document.getElementById("email");
const data_container = document.getElementById("data-container");

console.log("user", user);

//add user object to arr
function addUser() {
  const id = Date.now();
  let newUser = username.value;
  let newAge = age.value;
  let newEmail = email.value;

  //validation for empty field
  if (newUser === "" || newAge === "" || newEmail === "") {
    // alert("Please fill all fields");
    document.getElementById("ageErr").textContent = "all fields are required";
    return;
  } else {
    document.getElementById("ageErr").textContent = "all fields are required";
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
  user = [...user, { id, fname: newUser, age: newAge, email: newEmail }];
  console.log("user user", user);
  //clean up input fields
  username.value = "";
  age.value = "";
  email.value = "";
}

//delete user by id
function deleteUser(id) {
  user = user.filter((data) => data.id != id);
  renderUser();
}

//function for display user
function renderUser() {
  data_container.innerHTML = "";

  for (let i = user.length - 1; i >= 0; i--) {
    const li = document.createElement("li");
    li.className =
      "p-4 bg-gray-700 border border-gray-600 rounded-lg flex justify-between items-center transition-transform duration-300 hover:scale-[1.02] ";
    // li.textContent = `${user[i].fname} (age :${user[i].age})`;
    li.innerHTML = `
      <div>
        <p class="text-gray-100">
          <strong>Name:</strong>${user[i].fname}
        </p>
        <p class="text-gray-300">
          <strong>Age:</strong>${user[i].age}
        </p>
        <p class"text-gray-400">
          <strong>Email:</strong>${user[i].email}
        </p>
      </div>
    `;
    // li.innerHTML = `
    //                 <span><strong>${user[i].fname}</strong> - ${user[i].email} (${user[i].age} years old)</span>
    //               `;
    if (user[i].age > 19) {
      li.classList.add("bg-gray-500");
    }
    const btn = document.createElement("button");
    btn.className =
      "text-red-500 hover:text-red-700 bg-gray-700 py-2 px-3 rounded-lg hover:bg-gray-600";
    btn.textContent = "delete";
    btn.onclick = () => deleteUser(user[i].id);
    li.appendChild(btn);

    data_container.appendChild(li);
  }
}

console.log("form instance", myForm);

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("this is form");
  addUser();
  renderUser();
});
renderUser();

// username.addEventListener("input", (e) => {
//   const currVal = e.target.value;
//   console.log("currVal", currVal);
// });
