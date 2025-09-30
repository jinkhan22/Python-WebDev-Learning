// =======================
// Taxi Booking Manager
// =======================

// Taxi object with fare logic
let taxi = {
  baseFare: 5,
  ratePerKm: 2,
  calculateFare: function(distance) {
    return this.baseFare + distance * this.ratePerKm;
  }
};

// Array to store all bookings
let bookings = [];

// DOM elements
const pickupInput = document.getElementById("pickup");
const dropInput = document.getElementById("drop");
const distanceInput = document.getElementById("distance");
const addBtn = document.getElementById("addBooking");
const bookingList = document.getElementById("bookingList");

// Add new booking
addBtn.addEventListener("click", () => {
  let pickup = pickupInput.value;
  let drop = dropInput.value;
  let distance = Number(distanceInput.value);

  if (pickup && drop && distance > 0) {
    let fare = taxi.calculateFare(distance);

    // Create booking object
    let booking = {
      pickup,
      drop,
      distance,
      fare
    };

    bookings.push(booking);
    renderBookings();
    clearForm();
  } else {
    alert("❌ Please fill all fields correctly!");
  }
});

// Show all bookings
function renderBookings() {
  bookingList.innerHTML = "";
  bookings.forEach((b, i) => {
    let li = document.createElement("li");
    li.textContent = `${i + 1}. ${b.pickup} → ${b.drop}, ${b.distance} km, Fare: $${b.fare}`;
    bookingList.appendChild(li);
  });
}

// Clear form after booking
function clearForm() {
  pickupInput.value = "";
  dropInput.value = "";
  distanceInput.value = "";
}
