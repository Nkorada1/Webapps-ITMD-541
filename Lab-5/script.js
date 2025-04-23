// DOM element references
const billTotal = document.getElementById("billTotal");
const tipRange = document.getElementById("tipRange");
const tipLabel = document.getElementById("tipPercentLabel");
const tipAmount = document.getElementById("tipAmount");
const totalWithTip = document.getElementById("totalWithTip");
const totalWithTax = document.getElementById("totalWithTax");
const currencySelect = document.getElementById("currencySelect");
const convertedAmount = document.getElementById("convertedAmount");
const error = document.getElementById("error");

// Update calculator whenever inputs change
function updateCalculator() {
  const billInput = billTotal.value.trim();
  const bill = parseFloat(billInput);
  const tip = parseInt(tipRange.value);
  tipLabel.textContent = `${tip}%`; // Update tip display

  // Validate numeric and clean input
  if (billInput === "") {
    error.textContent = "Bill amount cannot be empty.";
    clearFields();
    return;
  }

  if (!/^\d+(\.\d{1,2})?$/.test(billInput)) {
    error.textContent = "Please enter a valid numeric bill amount.";
    clearFields();
    return;
  }

  if (isNaN(bill) || bill < 0) {
    error.textContent = "Bill amount must be a positive number.";
    clearFields();
    return;
  }

  error.textContent = ""; // Clear error

  // Step 1: Add 11% tax to bill
  const taxAmount = bill * 0.11;
  const billWithTax = bill + taxAmount;
  totalWithTax.value = billWithTax.toFixed(2);

  // Step 2: Calculate tip on taxed amount
  const tipValue = billWithTax * (tip / 100);
  tipAmount.value = tipValue.toFixed(2);

  // Step 3: Total after tax + tip
  const finalTotal = billWithTax + tipValue;
  totalWithTip.value = finalTotal.toFixed(2);

  // Step 4: Currency conversion (based on final total)
  convertCurrency(finalTotal);
}

// Clear output fields
function clearFields() {
  tipAmount.value = "";
  totalWithTip.value = "";
  totalWithTax.value = "";
  convertedAmount.value = "";
}

// Convert totalWithTip into selected currency
function convertCurrency(total) {
  const selected = currencySelect.value;
  let result = "";

  if (selected === "INR") {
    result = (total * 83.16).toFixed(2) + " INR";
  } else if (selected === "EUR") {
    result = (total * 0.92).toFixed(2) + " EUR";
  }

  convertedAmount.value = result;
}

// Event listeners for real-time updates
billTotal.addEventListener("input", updateCalculator);
tipRange.addEventListener("input", updateCalculator);
currencySelect.addEventListener("change", () => {
  const tip = parseFloat(totalWithTip.value);
  if (!isNaN(tip)) convertCurrency(tip);
});