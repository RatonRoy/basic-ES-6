const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers);
/* if you want to get just the values from an array use this spread operator  */

console.log(...numbers);
// if you want to apply this rules 
const maxValue = Math.max(...numbers);
console.log(maxValue);
// create the new arry 
const newArray = [54, ...numbers, 200];
console.log(newArray);