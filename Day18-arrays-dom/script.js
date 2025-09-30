// ============================
// Day 18 - Arrays & DOM Loops
// ============================

// Sample bookings array
let bookings = [
  { pickup: "Airport", drop: "Hotel", distance: 10, fare: 25 },
  { pickup: "Station", drop: "Mall", distance: 5, fare: 15 },
  { pickup: "Home", drop: "Office", distance: 12, fare: 29 }
];

const showBtn = document.getElementById("showBookings");
const totalBtn = document.getElementById("showTotal");
const bookingList = document.getElementById("bookingList");
const summary = document.getElementById("summary");

// Sort by fare
function sortByFare() {
  bookings.sort((a, b) => a.fare - b.fare);
  renderBookings();
}

// Sort by distance
function sortByDistance() {
  bookings.sort((a, b) => a.distance - b.distance);
  renderBookings();
}

// Render bookings into DOM
function renderBookings() {
  bookingList.innerHTML = ""; // clear old list
  summary.textContent = ""; // clear old summary

  bookings.forEach((booking, index) => {
    let li = document.createElement("li");
    li.textContent = `${index + 1}. From ${booking.pickup} → ${booking.drop} | ${booking.distance} km | $${booking.fare}`;
    bookingList.appendChild(li);
  });
}

// Show total revenue
function showTotalRevenue() {
  const total = bookings.reduce((sum, booking) => sum + booking.fare, 0);
  summary.textContent = `💰 Total Revenue: $${total}`;
}

// Event listeners
showBtn.addEventListener("click", renderBookings);
totalBtn.addEventListener("click", showTotalRevenue);
document.getElementById("sortFare").addEventListener("click", sortByFare);
document.getElementById("sortDistance").addEventListener("click", sortByDistance);