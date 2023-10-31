let header = document.getElementById("header");

//  adds

function addNumber(el) {
  let header = document.getElementById("header");

  if (header.innerHTML.endsWith("d") || header.innerHTML.endsWith("y")) {
    header.innerHTML = "";
  }

  header.innerHTML += el;
}

function add(el) {
  let header = document.getElementById("header");

  if (header.innerHTML.endsWith("d") || header.innerHTML.endsWith("y")) {
    header.innerHTML = "";
  }

  if (header.innerHTML.endsWith(" ") || header.innerHTML.endsWith(".")) {
    alert("Das geht nicht");
  } else {
    header.innerHTML += el;
  }
}

// calc

function calcResult() {
  let header = document.getElementById("header");

  let result = eval(header.innerHTML);
  header.innerHTML = result;
}

// minus

function del() {
  let header = document.getElementById("header");
  let icons = ["/", "+", "-", "*"];

  if (
    header.innerHTML.endsWith("/ ") ||
    header.innerHTML.endsWith("+ ") ||
    header.innerHTML.endsWith("* ") ||
    header.innerHTML.endsWith("- ")
  ) {
    header.innerHTML = header.innerHTML.slice(0, -3);
  } else if (header.innerHTML.endsWith(" ")) {
  } else {
    header.innerHTML = header.innerHTML.slice(0, -1);
  }
}

function reset() {
  let header = document.getElementById("header");

  header.innerHTML = " ";
}
