// =======================
// Taxi Fare Calculator Module (Extended)
// =======================

// 1. Config / Constants
const baseFare = 5;       // Flat fee
const ratePerKm = 2;      // Cost per km
const surgeMultiplier = 1.5; // 50% higher fare during surge hours
const discountCodes = {
  SAVE10: 0.1,  // 10% discount
  SAVE20: 0.2   // 20% discount
};

// 2. Core Logic
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

// 3. UI Helpers
function showMessage(element, message) {
  element.textContent = message;
}

function clearElement(element) {
  element.innerHTML = "";
}

// 4. DOM Elements
const calcBtn       = document.getElementById("calcBtn");
const distanceInput = document.getElementById("distance");
const resultEl      = document.getElementById("result");

const chartBtn      = document.getElementById("chartBtn");
const fareChart     = document.getElementById("fareChart");

// New Inputs
const surgeCheckbox = document.getElementById("surge");
const discountInput = document.getElementById("discount");

// 5. Event Handlers
function handleCalculateFare() {
  const distance = Number(distanceInput.value);
  const isSurge = surgeCheckbox.checked;
  const discountCode = discountInput.value.trim().toUpperCase();

  if (distance > 0) {
    const fare = calculateFare(distance, isSurge, discountCode);
    showMessage(resultEl, `✅ Fare for ${distance} km is: $${fare.toFixed(2)}`);
  } else {
    showMessage(resultEl, "❌ Please enter a valid distance.");
  }
}

function handleGenerateChart() {
  clearElement(fareChart);
  const isSurge = surgeCheckbox.checked;

  for (let d = 1; d <= 20; d++) {
    const fare = calculateFare(d, isSurge);
    const li = document.createElement("li");
    li.textContent = `Fare for ${d} km = $${fare.toFixed(2)}`;
    fareChart.appendChild(li);
  }
}

// 6. Attach Events
calcBtn.addEventListener("click", handleCalculateFare);
chartBtn.addEventListener("click", handleGenerateChart);
