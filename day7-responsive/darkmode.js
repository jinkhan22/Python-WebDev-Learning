// Dark Mode Toggle Script (Reusable)
// Attach this to any page by linking darkmode.js


document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("toggle-theme");
  const body = document.body;

  // Check saved preference
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    button.textContent = "☀️ Light Mode";
  }

  button.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
      button.textContent = "☀️";  // only icon
      localStorage.setItem("theme", "dark");
    } else {
      button.textContent = "🌙";  // only icon
      localStorage.setItem("theme", "light");
    }
  });

});
