let submitForm2  = document.querySelector("#loginForm");

submitForm2.addEventListener("submit", displayInput);

function displayInput(e) {
console.log("Button was clicked");
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  document.getElementById("displayInfo").innerHTML += `<span style="color: white;"> Username: ${username}, Password: ${password}</span>`;
  e.preventDefault();
}
function displayInput2(e) {
console.log("Button was clicked");
  const firstname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;
    const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  document.getElementById("displayInfo2").innerHTML += `<span style="color: white;"> First Name: ${firstname}, Last Name: ${lastname}, Username: ${username}, Password: ${password}</span>`;
  e.preventDefault();
}