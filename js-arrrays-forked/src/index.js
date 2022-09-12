// Challenge 1
let weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
]; // Create an array weekDays with all days of the week, console log the array
console.log(weekDays);

// Challenge 2
console.log(weekDays[0]); // Log ‘Monday’ and ‘Sunday’
console.log(weekDays[6]);

// Challenge 3
console.log((weekDays[6] = "Funday")); // Change ‘Sunday’ by ‘Funday’
// Log the array

// Challenge 4
console.log(weekDays.splice(0, 2)); // Remove Monday and Tuesday
// Log the array

// Challenge 5
function dailyTemperature(weekDays) {
  console.log(`Temperature on ${weekDays} is 18 degrees`);
}
weekDays.forEach(dailyTemperature); // Log every day of the week this way:`Temperature on Monday is 18 degrees’
