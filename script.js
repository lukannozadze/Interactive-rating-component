const buttons = document.querySelectorAll(".button");
const submitButton = document.querySelector(".submit");
const responseWindow = document.querySelector(".response");
const mainContainer = document.querySelector(".main-container");
const selectedContainer = document.querySelector(".selected");

let activeElement = null;
buttons.forEach((el) => {
  el.addEventListener("click", function (e) {
    selectedContainer.innerHTML = `<p>You selected ${el.textContent} out of 5</p>`;

    if (activeElement) {
      activeElement.classList.remove("active");
    }

    el.classList.toggle("active");
    activeElement = el;
  });
});

submitButton.addEventListener("click", function () {
  responseWindow.classList.remove("hidden");
  mainContainer.classList.add("hidden");
});
