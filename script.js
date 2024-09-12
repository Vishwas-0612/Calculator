let screen = document.querySelector("#screen");

function appendToDisplay(value) {
  if (screen.value === "undefined") {
    screen.value = "";
  }
  screen.value += value;
}

function clearDisplay() {
  screen.value = "";
}

function deleteLast() {
  screen.value = screen.value.slice(0, -1);
}

function calculateResult() {
  try {
    screen.value = eval(screen.value);
  } catch (error) {
    screen.value = "Error";
  }
}

document.addEventListener("keydown", function (event) {
  let key = event.key;

  if (!isNaN(key) || "+-*/.".includes(key)) {
    appendToDisplay(key);
  }
  if (key === "Enter") {
    calculateResult();
  }
  if (key === "Backspace") {
    deleteLast();
  }
  if (key === "Escape" || key === "Delete") {
    clearDisplay();
  }
});
