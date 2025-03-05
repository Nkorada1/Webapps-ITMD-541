// Narendra Korada
// A20560765
// ITMD 541-01 Graduate Student

// Exercise 1: Min, Max, and Average Calculation
// This function calculates the total count, minimum, maximum, and average of an array of numbers.
function minMaxAverage(numbers) {
    let total = numbers.length; // Count the total numbers in the array
    let min = Math.min(...numbers); // Find the smallest number in the array
    let max = Math.max(...numbers); // Find the largest number in the array
    let avg = (numbers.reduce((sum, num) => sum + num, 0) / total).toFixed(2); // Compute average and round to 2 decimal places
    
    // Output results
    console.log(`Total Numbers: ${total}`);
    console.log(`Min Value: ${min}`);
    console.log(`Max Value: ${max}`);
    console.log(`Average: ${avg}`);
    console.log("\n"); // Blank line for readability
}

// Test Cases for Exercise 1
console.log("Test Case 1:"); minMaxAverage([2, 5, 23, 6, 9, 4, 30, 1]);
console.log("Test Case 2:"); minMaxAverage([1, 5, 3, 5, 10, 12, 8, 6]);
console.log("Test Case 3:"); minMaxAverage([4, 2, 7, 9, 1, 11, 15, 30]);

// Exercise 2: Count Vowels in a String
// This function counts the number of vowels (a, e, i, o, u) in a given string.
function countVowels(str) {
    let vowels = str.match(/[aeiou]/gi); // Match all vowels (case insensitive)
    let count = vowels ? vowels.length : 0; // Get the count of vowels found
    
    // Output results
    console.log(`Word: ${str}`);
    console.log(`Vowel Count: ${count}`);
    console.log("\n");
}

// Test Cases for Exercise 2
console.log("Test Case 1:"); countVowels("Transportation");
console.log("Test Case 2:"); countVowels("Education");
console.log("Test Case 3:"); countVowels("Skyline");

// Exercise 3: Sorting Numbers
// This function sorts an array of numbers in ascending order.
function sortNumbers(numbers) {
    let sorted = [...numbers].sort((a, b) => a - b); // Sorts numbers in increasing order
    
    // Output results
    console.log(`Original Array: [${numbers}]`);
    console.log(`Sorted Array: [${sorted}]`);
    console.log("\n");
}

// Test Cases for Exercise 3
console.log("Test Case 1:"); sortNumbers([9, 4, 6, 2]);
console.log("Test Case 2:"); sortNumbers([15, 10, 3, 8, 1]);
console.log("Test Case 3:"); sortNumbers([100, 22, 35, 17, 5]);

// Exercise 4: Celsius to Fahrenheit Conversion
// This function converts a temperature from Celsius to Fahrenheit.
function celsiusToFahrenheit(celsius) {
    let temp = parseFloat(celsius); // Convert input to a floating-point number
    let fahrenheit = ((temp * 9/5) + 32).toFixed(1); // Convert Celsius to Fahrenheit and round to 1 decimal place
    
    // Output results
    console.log(`${temp.toFixed(1)} Celsius = ${fahrenheit} Fahrenheit`);
    console.log("\n");
}

// Test Cases for Exercise 4
console.log("Test Case 1: "); celsiusToFahrenheit(30);
console.log("Test Case 2: "); celsiusToFahrenheit(-5);
console.log("Test Case 3: "); celsiusToFahrenheit(45);
console.log("Test Case 4 (Graduate Requirement): "); celsiusToFahrenheit("35");
console.log("Test Case 5 (Graduate Requirement): "); celsiusToFahrenheit("-10");

// Exercise 5: Sorting People by Age
// This function takes an array of people objects and sorts them by age.
function sortPeople(people) {
    let sortedPeople = people.sort((a, b) => a.age - b.age); // Sorts people based on age in ascending order
    
    console.log("Sorted People:");
    sortedPeople.forEach(person => console.log(`${person.name} is ${person.age} and from ${person.city}`)); // Print each person's details
    console.log("\n");
}

// Test Cases for Exercise 5
console.log("Test Case 1:");
sortPeople([
    { name: 'Prabha', age: 25, city: 'Chicago' },
    { name: 'Sekhar', age: 30, city: 'New York' },
    { name: 'Pavan', age: 22, city: 'Los Angeles' },
    { name: 'Gnane', age: 28, city: 'Houston' },
    { name: 'Mahesh', age: 20, city: 'San Francisco' }
]);

console.log("Test Case 2:");
sortPeople([
    { name: 'Lakshmi', age: 40, city: 'Hyderabad' },
    { name: 'Moksha', age: 35, city: 'Visakhapatnam' },
    { name: 'Selfie', age: 22, city: 'MVP' },
    { name: 'Nandhini', age: 32, city: 'NAD' },
    { name: 'Vijju', age: 38, city: 'Bheemili' }
]);