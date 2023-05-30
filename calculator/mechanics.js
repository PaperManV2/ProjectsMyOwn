const numbers = document.querySelectorAll(".number button");
const display = document.getElementById("display");
const result = document.querySelector(".result");
const methodForNumbers = document.querySelectorAll(".method button");
const methodBackspace = document.getElementById("backspace");

var flag = true;

let firstVar = 0;
let secondVar = 0;
let temp = 0;

let blockade = 1;
let choice = 0;

numbers.forEach((element) => {
  element.addEventListener("click", () => {
    if (display.textContent == "0" || !flag) {
      display.textContent = "";
      flag = true;
    }

    if (blockade == 3) {
      blockade = 2;
    }

    if (Number(temp) < 1000000000) {
      display.textContent += element.textContent;
      temp = display.textContent;
    }
  });
});

methodForNumbers.forEach((element) => {
  element.addEventListener("click", () => {
    AllMethods(element);
  });
});

function AllMethods(method) {
  const BS =
    '<img class="backspace" src="pictures/backspace.svg" alt="backspace">';

  switch (method.innerHTML.trim()) {
    case "+":
      blockade = 1;
      choice = 1;
      Method();
      break;

    case "-":
      blockade = 1;
      choice = 2;
      Method();
      break;

    case "*":
      blockade = 1;
      choice = 3;
      Method();
      break;

    case "/":
      blockade = 1;
      choice = 4;
      Method();
      break;

    case "C":
      Method();
      blockade = 1;
      firstVar = 0;
      secondVar = 0;
      choice = 0;
      break;

    case "CE":
      display.textContent = "0";
      temp = 0;
      break;

    case ",":
      if (!display.textContent.includes(".")) {
        display.textContent = display.textContent + ".";
      }
      break;

    case "+/-":
      if (Number(display.textContent) != 0) {
        if (Number(display.textContent) > 0) {
          display.textContent = "-" + display.textContent;
          temp = Number(display.textContent);
        } else {
          display.textContent = display.textContent.slice(1);
          temp = Number(display.textContent);
        }
      }
      break;

    case BS:
      if (display.textContent != "0" && display.textContent != "Error") {
        console.log("potato");
        display.textContent = display.textContent.slice(0, -1);
        temp = temp.toString();
        temp = temp.slice(0, -1);
      }

      if (
        display.textContent == "" ||
        display.textContent == "-" ||
        display.textContent == "Error"
      ) {
        display.textContent = 0;
        temp = display.textContent;
      }
      break;
  }
}

window.addEventListener("keydown", (event) => {
  console.log(event.code);
});

function Method() {
  temp = display.textContent;
  firstVar = Number(temp);
  display.textContent = 0;
  temp = 0;
}

result.addEventListener("click", () => {
  let outcome = 0;

  // if (!blockade) {
  //   secondVar = Number(temp);
  //   blockade = true;
  // } else {
  //   firstVar = Number(temp);
  // }

  switch (blockade) {
    case 1:
      secondVar = Number(temp);
      blockade = 3;
      break;
    case 2:
      firstVar = Number(temp);
      blockade = 3;
      break;
    case 3:
      break;
  }

  switch (choice) {
    case 0:
      break;
    case 1:
      outcome = firstVar + secondVar;
      outcome = Number(outcome.toFixed(6));
      finalResult(outcome);
      firstVar = outcome;
      break;
    case 2:
      outcome = firstVar - secondVar;
      outcome = Number(outcome.toFixed(6));
      finalResult(outcome);
      firstVar = outcome;
      break;
    case 3:
      outcome = firstVar * secondVar;
      outcome = Number(outcome.toFixed(6));
      finalResult(outcome);
      firstVar = outcome;
      break;
    case 4:
      outcome = firstVar / secondVar;
      outcome = Number(outcome.toFixed(6));
      finalResult(outcome);
      firstVar = outcome;
      break;
  }
});

function finalResult(finalNumber) {
  if (finalNumber == Infinity) {
    display.textContent = "Error";
  } else {
    display.textContent = finalNumber;
  }

  flag = false;
}
