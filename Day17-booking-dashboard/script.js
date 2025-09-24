// ============================
// Day 17 - Booking Dashboard + Edit Feature
// ============================

// DOM Elements
const form = document.getElementById("bookingForm");
const pickupInput = document.getElementById("pickup");
const dropInput = document.getElementById("drop");
const distanceInput = document.getElementById("distance");
const bookingList = document.getElementById("bookingList");

// Store bookings in array
let bookings = [];
let editIndex = null; // track which booking is being edited

// Fare logic
const baseFare = 5;
const ratePerKm = 2;

function calculateFare(distance) {
  return baseFare + distance * ratePerKm;
}

// Render bookings
function renderBookings() {
  bookingList.innerHTML = ""; // clear old list
  bookings.forEach((booking, index) => {
    let li = document.createElement("li");
    li.textContent = `From ${booking.pickup} → ${booking.drop} | Distance: ${booking.distance} km | Fare: $${booking.fare}`;

    // Delete button
    let delBtn = document.createElement("button");
    delBtn.textContent = "❌ Delete";
    delBtn.style.marginLeft = "10px";
    delBtn.addEventListener("click", () => {
      bookings.splice(index, 1); // remove booking
      renderBookings();
    });

    // Edit button
    let editBtn = document.createElement("button");
    editBtn.textContent = "✏️ Edit";
    editBtn.style.marginLeft = "10px";
    editBtn.addEventListener("click", () => {
      // Fill form with booking values
      pickupInput.value = booking.pickup;
      dropInput.value = booking.drop;
      distanceInput.value = booking.distance;

      // Mark this booking as "in edit mode"
      editIndex = index;

      // Change button text
      form.querySelector("button").textContent = "Update Booking";
    });

    li.appendChild(editBtn);
    li.appendChild(delBtn);
    bookingList.appendChild(li);
  });
}

// Handle form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const pickup = pickupInput.value.trim();
  const drop = dropInput.value.trim();
  const distance = Number(distanceInput.value);

  if (!pickup || !drop || distance <= 0) {
    alert("❌ Please fill all fields correctly!");
    return;
  }

  const fare = calculateFare(distance);

  if (editIndex !== null) {
    // Update existing booking
    bookings[editIndex] = { pickup, drop, distance, fare };
    editIndex = null; // reset edit mode
    form.querySelector("button").textContent = "Add Booking"; // reset button text
  } else {
    // Add new booking
    bookings.push({ pickup, drop, distance, fare });
  }

  renderBookings();
  form.reset();
});
