// Taxi Fare Calculator Script
function calculateFare(distance) {
  const baseFare = 5;      // Flat fee
  const ratePerKm = 2;     // Cost per km
  return baseFare + distance * ratePerKm;
}

// Grab elements
const button = document.getElementById("calcBtn");
const input = document.getElementById("distance");
const result = document.getElementById("result");

// Event listener for button
button.addEventListener("click", () => {
  const distance = Number(input.value);

  if (distance > 0) {
    const fare = calculateFare(distance);
    result.textContent = `✅ Fare for ${distance} km is: $${fare}`;
  } else {
    result.textContent = "❌ Please enter a valid distance.";
  }
});
