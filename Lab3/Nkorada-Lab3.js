// Narendra Korada
// ITMD 541-01 Graduate Student

// Exercise 1: Min, Max, and Average Calculation
function minMaxAverage(numbers) {
    let total = numbers.length;
    let min = Math.min(...numbers);
    let max = Math.max(...numbers);
    let avg = (numbers.reduce((sum, num) => sum + num, 0) / total).toFixed(2);
    console.log(`Total Numbers: ${total}`);
    console.log(`Min Value: ${min}`);
    console.log(`Max Value: ${max}`);
    console.log(`Average: ${avg}`);
    console.log("-----------------------------------");
}

// Test Cases for Exercise 1
console.log("Test Case 1:"); minMaxAverage([2, 5, 23, 6, 9, 4, 30, 1]);
console.log("Test Case 2:"); minMaxAverage([1, 5, 3, 5, 10, 12, 8, 6]);
console.log("Test Case 3:"); minMaxAverage([4, 2, 7, 9, 1, 11, 15]);

// Exercise 2: Count Vowels in a String
function countVowels(str) {
    let vowels = str.match(/[aeiou]/gi);
    let count = vowels ? vowels.length : 0;
    console.log(`Word: ${str}`);
    console.log(`Vowel Count: ${count}`);
    console.log("-----------------------------------");
}

// Test Cases for Exercise 2
console.log("Test Case 1:"); countVowels("Winter");
console.log("Test Case 2:"); countVowels("Education");
console.log("Test Case 3:"); countVowels("Skyline");

// Exercise 3: Sorting Numbers
function sortNumbers(numbers) {
    let sorted = [...numbers].sort((a, b) => a - b);
    console.log(`Original Array: [${numbers}]`);
    console.log(`Sorted Array: [${sorted}]`);
    console.log("-----------------------------------");
}

// Test Cases for Exercise 3
console.log("Test Case 1:"); sortNumbers([9, 4, 6, 2]);
console.log("Test Case 2:"); sortNumbers([15, 10, 3, 8, 1]);
console.log("Test Case 3:"); sortNumbers([100, 22, 35, 17, 5]);

// Exercise 4: Celsius to Fahrenheit Conversion
function celsiusToFahrenheit(celsius) {
    let temp = parseFloat(celsius);
    let fahrenheit = ((temp * 9/5) + 32).toFixed(1);
    console.log(`${temp.toFixed(1)} Celsius = ${fahrenheit} Fahrenheit`);
    console.log("-----------------------------------");
}

// Test Cases for Exercise 4
console.log("Test Case 1:"); celsiusToFahrenheit(30);
console.log("Test Case 2:"); celsiusToFahrenheit(-5);
console.log("Test Case 3:"); celsiusToFahrenheit(100);
console.log("Test Case 4 (Graduate Requirement):"); celsiusToFahrenheit("35");
console.log("Test Case 5 (Graduate Requirement):"); celsiusToFahrenheit("-10");

// Exercise 5: Sorting People by Age
function sortPeople(people) {
    let sortedPeople = people.sort((a, b) => a.age - b.age);
    console.log("Sorted People:");
    sortedPeople.forEach(person => console.log(`${person.name} is ${person.age} and from ${person.city}`));
    console.log("-----------------------------------");
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
    { name: 'Lakshmi', age: 40, city: 'Austin' },
    { name: 'Moksha', age: 35, city: 'Denver' },
    { name: 'Selfie', age: 45, city: 'Seattle' },
    { name: 'Nandhini', age: 32, city: 'Miami' },
    { name: 'Vijju', age: 38, city: 'Boston' }
]);