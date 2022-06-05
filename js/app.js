
function signUp() {
  let name = prompt("What is your name?");
  if (name.length <= 2) {
    alert(
    
        `Please enter your name?`
    );
  }
  let number = prompt("How many emails would you like to receive weekly?");
  if (number >= 1) {
    alert(
      "Hey " +
        name +
        "!" +
        " " +
        `Thank you for signing up`
    );
  } else {
    alert("Please a number greater than 0");
  }
}
let sign = document.getElementById("mail");
console.log(sign);
sign.addEventListener("click", signUp);
