// RECURSION

let counter = 0;
function inception() {
  // console.log(counter);
  // base case
  if (counter > 3) {
    return 'done!'
  }
  counter++;
  // recursive case
  return inception();
}

// console.log(inception());

// steps
// 1. Identify the base case
// 2. Identify the recursive case
// 3. Get closer and closer and return when needed. Usually you have two returns

// FACTORIAL
// Write two functions that find the factorial of any number. One should use recursion, the other should just use a for loop.

// recursive version
function findFactorialRecursive(number) { // O(n)
  // base case
  if (number === 2) {
    return 2;
  }
  // recursive case
  return number * findFactorialRecursive(number -1);
}

// console.log(findFactorialRecursive(5));

// looping version
function findFactorialIterative(number) { // O(n)
  let answer = 1;
  if (number === 2) {
    answer = 2;
  }
  for (let i = 2; i <= number; i++) {
    answer = answer * i;
  }
  return answer;
}

// console.log(findFactorialIterative(5));

// FIBONACCI
// Given a number N return the index of the Fibonacci sequence, where the sequence is:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the two previous values, that means for N = 5 --> 2 + 3.

// iterative approach
function fibonacciIterative(n) { // O(n)
  let array = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    array.push(array[i - 2] + array[i - 1]);
  }
  return array[n];
}

// console.log(fibonacciIterative(4));

// recursive approach
function fibonacciRecursive(n) { // O(2^n)
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// console.log(fibonacciRecursive(6));

// REVERSE STRING
function reverseString(str) {
  let arrayStr = str.split("");
  let reversedArray = [];
  // We are using closure here so that we don't add the above variables to the global scope.
  function addToArray(array) {
    // console.log(array);
    if (array.length > 0) {
      reversedArray.push(array.pop());
      // console.log(reversedArray);
      addToArray(array);
    }
    return;
  }
  addToArray(arrayStr);
  return reversedArray.join("");
}

// console.log(reverseString('omi'));

function reverseStringRecursive(str) {
  if (str === "") {
    return "";
  } else {
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
  }
}

// console.log(reverseStringRecursive('pomegranate'));

// ==========
// SORTING
// ==========

const letters = ['a', 'z', 'w', 'b', 'j'];

// console.log(letters.sort());

const basket = [2, 65, 34, 2, 1, 7, 8];
// JS sort() method converts numbers to string values
// console.log(basket.sort());
// [
//    1, 2, 2, 34,
//   65, 7, 8
// ]

console.log('2'.charCodeAt(0));
console.log('65'.charCodeAt(0));
console.log('34'.charCodeAt(0));
console.log('7'.charCodeAt(0));
