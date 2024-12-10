const button = document.getElementById("changeTitle");
const title = document.getElementById("title");

button.addEventListener("click", () => {
  title.innerText = "JavaScript is geweldig!";
});

const button2 = document.getElementById("addText");
const paragraph = document.getElementById("paragraph");

button2.addEventListener("click", () => {
  paragraph.innerText = paragraph.innerHTML + " Hier is extra tekst!";
});

const button3 = document.getElementById("changeColor");
const colorBox = document.getElementById("colorBox");

button3.addEventListener("click", () => {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  colorBox.style.backgroundColor = `rgb(${red},${green},${blue})`;
});

const button4 = document.getElementById("hideText");
const text = document.getElementById("text");

button4.addEventListener("click", () => {
  text.hidden = text;
});

const button5 = document.getElementById("addItem");
const itemList = document.getElementById("itemList");

button5.addEventListener("click", () => {});
