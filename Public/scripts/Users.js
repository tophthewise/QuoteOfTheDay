let submitForm2  = document.querySelector("#loginForm");

submitForm2.addEventListener("submit", displayInput);
function User(firstname, lastname, username, password) {
  this.firstName = firstname;
  this.lastName = lastname;
  this.username = username;
  this.password = password;
}
function displayInput(e) {
console.log("Button was clicked");
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const user = new User(null, null, username, password);
  fetch("/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  }).then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err));
  document.getElementById("displayInfo").innerHTML += `<span style="color: white;"> Username: ${username}, Password: ${password}</span>`;
  e.preventDefault();
}
function displayInput2(e) {
console.log("Button was clicked");
  const firstname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;
    const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
const user = new User(firstname, lastname, username, password);
  fetch("/user/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  }).then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err));  console.log(user);
  document.getElementById("displayInfo2").innerHTML += `<span style="color: white;"> First Name: ${firstname}, Last Name: ${lastname}, Username: ${username}, Password: ${password}</span>`;
  e.preventDefault();
}