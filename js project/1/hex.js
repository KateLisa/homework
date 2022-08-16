const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const text = document.querySelector(".color");

btn.addEventListener("click", function () {
  let color = "#";
  for (i = 0; i < 6; i++) {
    color += colors[getRandomNumber()];
    console.log(color);
  }
  document.body.style.backgroundColor = color;
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
