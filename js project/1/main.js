const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const text = document.querySelector(".color");

const colorPickerType = "hex";

btn.addEventListener("click", function () {
  const randomIndex = randomNumber();
  document.body.style.backgroundColor = colors[randomIndex];
  text.textContent = colors[randomIndex];
});

function randomNumber() {
  return Math.floor(Math.random() * colors.length);
}

console.log(randomNumber());
