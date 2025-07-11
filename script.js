function appendValue(val) {
    document.getElementById("display").value += val;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch (e) {
        document.getElementById("display").value = "Error";
    }
}

function toggleSign() {
    let display = document.getElementById("display");
    if (display.value) {
        if (display.value.startsWith("-")) {
            display.value = display.value.slice(1);
        } else {
            display.value = "-" + display.value;
        }
    }
}


function animateDisplay() {
  const display = document.getElementById("display");
  display.classList.remove("fade");
  void display.offsetWidth; // trigger reflow
  display.classList.add("fade");
}

function appendValue(val) {
  const display = document.getElementById("display");
  display.value += val;
  animateDisplay();
}

function clearDisplay() {
  const display = document.getElementById("display");
  display.value = "";
  animateDisplay();
}

function calculate() {
  const display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
  }
  animateDisplay();
}

function toggleSign() {
  const display = document.getElementById("display");
  if (display.value) {
    if (display.value.startsWith("-")) {
      display.value = display.value.slice(1);
    } else {
      display.value = "-" + display.value;
    }
    animateDisplay();
  }
}
