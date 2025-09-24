// Grab elements
const title = document.getElementById("title");
const message = document.getElementById("message");
const button = document.getElementById("changeBtn");
const list = document.getElementById("list");

// Change text on button click
button.addEventListener("click", () => {
  message.textContent = "✅ Text updated with JavaScript!";
  title.style.color = "blue";  // change style dynamically
});

// Add items to list dynamically
let items = ["HTML", "CSS", "JavaScript"];
for (let item of items) {
  let li = document.createElement("li");
  li.textContent = item;
  list.appendChild(li);
}
