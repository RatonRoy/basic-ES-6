/* if your function have only one line with the return value so you do not need to write the retur key word it remains implicitly there. Anothe thing in the function remain one more parameter you must give parenthesis   */
const addNum = (num1, num2) => num1 + num2; 
// if remain one parameter do  not give the parenthesis 
const fiveTimes = num => 5 * num; 
//  if you need more than one line to excute the result please give the curly bracket then must give return key word otherwise it not retur the value.
const mathCal = (x, y) => {
	const sum = x + y;
	const diff = x - y;
	const multiply = sum * diff; 
	return multiply;
}
const numResult = addNum(20, 50);
const multiple = fiveTimes(10)
const mathResult = mathCal(50, 30);
console.log(numResult, multiple, mathResult);
