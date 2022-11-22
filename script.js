//1
function firstexercise(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
console.log(firstexercise(4, 2)); // false
console.log(firstexercise(3, 3)); // true

//2
function convertFahrToCelsius(temp) {
  if (typeof temp === "number" || typeof temp === "string") {
    return (((Number(temp) - 32) * 5) / 9).toFixed(4);
  } else {
    return false;
  }
}
console.log(convertFahrToCelsius(0)); // -17.7778
console.log(convertFahrToCelsius([4, 5, 8])); // false

//3
function calculate(a, b, operation) {
  if (typeof a != "number" || typeof b != "number") {
    return false;
  }
  if (operation === "+") return a + b;
  else if (operation === "-") return a - b;
  else if (operation === "*") return a * b;
  else if (operation === "/") return a / b;
}
console.log(calculate(5, 2, "*")); // 10
console.log(calculate(8, 2, "/")); // 4
console.log(calculate(s, 2, "+")); // false
