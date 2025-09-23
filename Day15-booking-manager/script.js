// ============================
// Day 15 - Booking Manager 
// ============================

// Config
const baseFare = 5;
const ratePerKm = 2;
const surgeMultiplier = 1.5;
const discountCodes = {
  SAVE10: 0.1,  // 10% discount
  SAVE20: 0.2   // 20% discount
};

// Array to store bookings
let bookings = [];

// Function to calculate fare
function calculateFare(distance, isSurge = false, discountCode = null) {
  let fare = baseFare + distance * ratePerKm;

  // Apply surge pricing
  if (isSurge) {
    fare *= surgeMultiplier;
  }

  // Apply discount if valid
  if (discountCode && discountCodes[discountCode]) {
    fare -= fare * discountCodes[discountCode];
  }

  return fare;
}

// Function to add a new booking
function addBooking(pickup, drop, distance, isSurge = false, discountCode = null) {
  let fare = calculateFare(distance, isSurge, discountCode);

  let booking = {
    pickup,
    drop,
    distance,
    isSurge,
    discountCode,
    fare
  };

  bookings.push(booking);

  console.log(`✅ Booking added: ${pickup} → ${drop}, Fare: $${fare.toFixed(2)} 
  ${isSurge ? "(Surge applied)" : ""} ${discountCode ? `(Discount: ${discountCode})` : ""}`);
}

// Function to show all bookings
function showBookings() {
  console.log("📑 Booking History:");
  for (let ride of bookings) {
    console.log(`From ${ride.pickup} to ${ride.drop}, Distance: ${ride.distance} km, Fare: $${ride.fare.toFixed(2)} 
    ${ride.isSurge ? "(Surge)" : ""} ${ride.discountCode ? `(Discount: ${ride.discountCode})` : ""}`);
  }
}

// Function to calculate total revenue
function totalRevenue() {
  let total = 0;
  for (let ride of bookings) {
    total += ride.fare;
  }
  console.log(`💰 Total Revenue: $${total.toFixed(2)}`);
  return total;
}

// ============================
// Testing the system
// ============================

// Normal booking
addBooking("Airport", "Hotel", 12);

// Surge booking
addBooking("Mall", "Station", 7, true);

// Discount booking
addBooking("Office", "Home", 5, false, "SAVE10");

// Surge + Discount booking
addBooking("Beach", "Downtown", 15, true, "SAVE20");

// Show all bookings + revenue
showBookings();
totalRevenue();
