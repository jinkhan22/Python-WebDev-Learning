// ============================
// Day 17 - Form Events + Validation
// ============================

const form = document.getElementById("bookingForm");
const pickupInput = document.getElementById("pickup");
const dropInput = document.getElementById("drop");
const distanceInput = document.getElementById("distance");
const message = document.getElementById("message");

// Fare calculation logic
const baseFare = 5;
const ratePerKm = 2;

function calculateFare(distance) {
  return baseFare + distance * ratePerKm;
}

// Handle form submission
form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop page reload

  const pickup = pickupInput.value.trim();
  const drop = dropInput.value.trim();
  const distance = Number(distanceInput.value);

  if (!pickup || !drop || distance <= 0) {
    message.textContent = "❌ Please fill all fields correctly!";
    message.style.color = "red";
    return;
  }

  const fare = calculateFare(distance);
  message.textContent = `✅ Booking confirmed! From ${pickup} → ${drop}, Distance: ${distance} km, Fare: $${fare}`;
  message.style.color = "green";

  // Clear fields
  form.reset();
});
