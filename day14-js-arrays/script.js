let distance = [3, 7, 12, 20];

console.log(distance[0]);
console.log(distance[3]);

for (let d of distance){
    console.log(`fare of ${d} km = $${d * 2 + 5 }`)
}

let bookings = {
    pickup: "Airport",
    drop: "Hotel",
    distance: 12,
    fare: 29
};

console.log(bookings.pickup);
console.log(bookings.drop);

// Multiple bookings
let booking = [
  { pickup: "Airport", drop: "Hotel", distance: 12, fare: 29 },
  { pickup: "Mall", drop: "Station", distance: 7, fare: 19 },
  { pickup: "Office", drop: "Home", distance: 5, fare: 15 }
];

// Loop through all bookings
for (let ride of booking) {
  console.log(`🚖 From ${ride.pickup} to ${ride.drop}, Fare: $${ride.fare}`);
}


