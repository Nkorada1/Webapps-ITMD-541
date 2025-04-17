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
  const bill = parseFloat(billTotal.value);
  const tip = parseInt(tipRange.value);

  tipLabel.textContent = `${tip}%`; // Update tip display

  if (billTotal.value === "") {
    clearFields();
    return;
  }

  if (isNaN(bill) || bill < 0) {
    error.textContent = "Please enter a valid non-negative bill amount.";
    clearFields();
    return;
  }

  error.textContent = ""; // Clear error

  // Tip amount
  const tipValue = bill * (tip / 100);
  tipAmount.value = tipValue.toFixed(2);

  // Total with tip
  const total = bill + tipValue;
  totalWithTip.value = total.toFixed(2);

  // Total with tax (11%)
  const tax = bill * 0.11;
  totalWithTax.value = (bill + tax).toFixed(2);

  // Currency conversion
  convertCurrency(total);
}

// Clear output fields
function clearFields() {
  tipAmount.value = "";
  totalWithTip.value = "";
  totalWithTax.value = "";
  convertedAmount.value = "";
}

// Convert the totalWithTip into selected currency
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