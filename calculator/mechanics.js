const numbers = document.querySelectorAll(".number button");
const display = document.getElementById("display");
const result = document.querySelector(".result");
const methodForNumbers = document.querySelectorAll(".method button");

var flag = true;

let firstVar = 0;
let secondVar = 0;
let temp = 0;

let choice = 0;

numbers.forEach((element) => {
  element.addEventListener("click", () => {
    if (display.textContent == "0" || !flag) {
      display.textContent = "";
      flag = true;
    }
    display.textContent += element.textContent;
    temp = display.textContent;
  });
});

methodForNumbers.forEach((element) => {
  element.addEventListener("click", () => {
    switch (element.textContent) {
      case "+":
        choice = 1;
        Method();
        break;

      case "-":
        choice = 2;
        Method();
        break;

      case "*":
        choice = 3;
        Method();
        break;

      case "/":
        choice = 4;
        Method();
        break;
      case "C":
        Method();
        firstVar = 0;
        secondVar = 0;
        choice = 0;
        break;
      case "CE":
        console.log("CE");
        break;
      case ",":
        console.log(",");
        break;
      case "+/-":
        console.log("+/-");
        break;
    } 
  });
});

window.addEventListener("keydown", (event) =>{
  console.log(event.code);
})

function Method() {
  firstVar = Number(temp);
  display.textContent = 0;
  temp = 0;
}

result.addEventListener("click", () => {
  let outcome = 0;
  secondVar = Number(temp);
  switch (choice) {
    case 0:
      break;
    case 1:
      outcome = firstVar + secondVar;
      finalResult(outcome);
      firstVar = outcome;
      break;
    case 2:
      outcome = firstVar - secondVar;
      finalResult(outcome);
      firstVar = outcome;
      break;
    case 3:
      outcome = firstVar * secondVar;
      finalResult(outcome);
      firstVar = outcome;
      break;
    case 4:
      outcome = firstVar / secondVar;
      finalResult(outcome);
      firstVar = outcome;
      break;
  }
});

function finalResult(finalNumber) {
  display.textContent = finalNumber;
  flag = false;
}
