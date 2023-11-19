const sunMoonContent = document.querySelector(".sun-moon-content");

const toggleButton = document.querySelector(".toggle-button");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const getComputerStyle = parseInt(
    getComputedStyle(sunMoonContent).getPropertyValue("--rotation")
  );

  sunMoonContent.style.setProperty("--rotation", getComputerStyle + 180);
});
