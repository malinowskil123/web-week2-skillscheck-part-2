//////////////////PROBLEM 1////////////////////

// Write a function called stringItOut that takes in an array. Determine if it is an array of numbers or strings and sort it greatest to least accordingly (sort strings alphabetically). Return the array converted into a string using the toString method.

//Code here

const stringItOut = array => {
  let string = isNaN(array[0]);
  let str;
  if (string) str = array.sort().reverse();
  else str = array.sort((a, b) => b - a);
  return str.toString();
};

// console.log(stringItOut(["car", "blah", "hahh"]));
// console.log(stringItOut([1, 53, 5, 62, 32, 12]));
// console.log(isNaN(10));
//////////////////PROBLEM 2////////////////////

// Given the functions below: invoke the function math passing in complex, 2, and 3 as parameters. Save the result to a variable called mathResult.

function math(cb, num1, num2) {
  return cb(num1, num2);
}

function complex(num1, num2) {
  return Math.sin(Math.log(num1) + Math.tan(num2) * 100);
}
let mathResult = math(complex, 2, 3);
console.log(mathResult);
//Code here
