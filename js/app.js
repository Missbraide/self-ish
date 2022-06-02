function findRecipes() {
    let name = prompt("What is your name?");
    let number = prompt("How many emails would you like to receive weekly?");
    if (number >= 1) {
      alert(
        "Hey " +
          name +
          "!" +
          " " +
          `Delicious recipes 🥘 are on their way to you!`
      );
    } else {
      alert("Please a number greater than 0");
    }
  }
  let input = document.querySelector("sign");
 input.addEventListener("click", findRecipes);