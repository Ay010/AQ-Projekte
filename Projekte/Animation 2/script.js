let start = document.getElementById("Test");

start.addEventListener("click", () => {
  document.getElementById("Test").classList.add("jsc");
});

let re = document.getElementById("button");

// re.addEventListener("click", () => {
//   document.getElementById("Test").classList.remove("jsc").classList.add("zu");
// });

re.addEventListener("click", () => {
  document.getElementById("Test").classList.remove("jsc");
});
