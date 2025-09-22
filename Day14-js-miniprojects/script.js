// ============================
// Mini Project 1 - Array of Drivers
// ============================
drivers = ["Ali", "Sara", "Talha", "Faheem", "Kamran"];

console.log("List of Drivers");
for (let driver of drivers){
    console.log("Drivers: ", driver)

}


// ============================
// Mini Project 2 - Profile as Object
// ============================

let profile = {
  name: "Arsalan Khan",
  skills: ["HTML", "CSS", "JavaScript", "Python"],
  progressDay: 14
};

console.log("👤 My Profile:");
console.log("Name:", profile.name);
console.log("Skills:", profile.skills.join(", "));
console.log("Currently on Day:", profile.progressDay);


// ============================
// Mini Project 3 - Array of Bookings
// ============================

let bookings = [
  { pickup: "Airport", drop: "Hotel", distance: 12, fare: 29 },
  { pickup: "Mall", drop: "Station", distance: 7, fare: 19 },
  { pickup: "Office", drop: "Home", distance: 5, fare: 15 }
];

console.log("📑 Booking Records:");
for (let ride of bookings) {
  console.log(`From ${ride.pickup} to ${ride.drop}, Distance: ${ride.distance} km, Fare: $${ride.fare}`);
}
