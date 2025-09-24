// ============================
// Day 16 - Booking List UI + Delete Feature
// ============================

// DOM Elements
const pickupInput = document.getElementById("pickup");
const dropInput = document.getElementById("drop");
const distanceInput = document.getElementById("distance");
const addBookingBtn = document.getElementById("addBookingBtn");
const bookingList = document.getElementById("bookingList");

// Base fare logic
const baseFare = 5;
const ratePerKm = 2;

function calculateFare(distance) {
  return baseFare + distance * ratePerKm;
}

// Handle booking add
addBookingBtn.addEventListener("click", () => {
  const pickup = pickupInput.value.trim();
  const drop = dropInput.value.trim();
  const distance = Number(distanceInput.value);

  if (!pickup || !drop || distance <= 0) {
    alert("❌ Please fill all fields correctly!");
    return;
  }

  const fare = calculateFare(distance);

  // Create booking item
  let li = document.createElement("li");
  li.textContent = `From ${pickup} → ${drop} | Distance: ${distance} km | Fare: $${fare} `;

  // Create delete button
  let delBtn = document.createElement("button");
  delBtn.textContent = "❌ Delete";
  delBtn.style.marginLeft = "10px";
  delBtn.style.background = "#e74c3c";
  delBtn.style.color = "white";
  delBtn.style.border = "none";
  delBtn.style.padding = "5px 8px";
  delBtn.style.borderRadius = "5px";
  delBtn.style.cursor = "pointer";

  // Delete booking when clicked
  delBtn.addEventListener("click", () => {
    bookingList.removeChild(li);
  });

  // Attach button to list item
  li.appendChild(delBtn);

  // Add booking to list
  bookingList.appendChild(li);

  // Clear inputs
  pickupInput.value = "";
  dropInput.value = "";
  distanceInput.value = "";
});
