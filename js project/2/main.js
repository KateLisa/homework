const btns = document.querySelectorAll(".btn");

const value = document.getElementById("value");

let number = 0;

btns.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    let styles = event.currentTarget.classList;
    if (styles.contains("decrease")) {
      number--;
    } else if (styles.contains("increase")) {
      number++;
    } else {
      number = 0;
    }
    value.textContent = number;
    if (number > 0) value.style.color = "green";
    else if (number < 0) value.style.color = "red";
    else value.style.color = "#222";
  });
});
