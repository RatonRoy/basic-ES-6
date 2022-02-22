// function declaration 
function addNum(num1, num2) {
	return num1 + num2;
}
// function expresion with function name Tips: after the const give the function name here addNum1 is not the function name and functionName is the actuall name of the function
const functionName = function addNum1(num1, num2) {
	return num1 + num2;
}
// function expression without name 
const functionName2 = function (num1, num2) {
	return num1 + num2;
}
// lets beging arrow function here it is not nessecerry to give the function key word name and give the arrow simbole before the curle (2nd bracket);
const functionName3 = (num1, num2) => { return num1 + num2 };
// without curley bracket  not giving the return keyword 
const functionName4 = (num1, num2) =>  num1 + num2 ;
let num1 = addNum(12, 18);
let num2 = functionName(12, 28);
let num3 = functionName2(12, 38);
let num4 = functionName3(12, 48);
let num5 = functionName4(12, 58);

console.log(num1, num2, num3, num4, num5);
