let submitForm  = document.querySelector("#quoteSub");

submitForm.addEventListener("submit", checkboxClick);

function checkboxClick(e) {
console.log("Button was clicked");
  const quote = document.getElementById("quote").value;
  document.getElementById("output-box").innerHTML += `<li style="color: white;">${quote}</li>`;
  e.preventDefault();
}