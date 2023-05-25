const numbers = document.querySelectorAll(".number button");
const display = document.getElementById("display");
const result = document.querySelector(".result");
const methodForNumbers = document.querySelectorAll(".method button");

let outcome = 0;

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
    }
  });
});

function Method() {
  firstVar = Number(temp);
  display.textContent = 0;
  temp = 0;
}

result.addEventListener("click", () => {
  secondVar = Number(temp);
  switch (choice) {
    case 0:
      break;
    case 1:
      outcome = firstVar + secondVar;
      finalResult();
      break;
    case 2:
      outcome = firstVar - secondVar;
      finalResult();
      break;
    case 3:
      outcome = firstVar * secondVar;
      finalResult();
      break;
    case 4:
      outcome = firstVar / secondVar;
      finalResult();
      break;
  }
});

function finalResult() {
  display.textContent = outcome;
  flag = false;
  choice = 0;
}
