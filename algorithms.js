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
function fibonacciIterative(n) {
  // code here
}

console.log(fibonacciIterative(3));

// recursive approach
function fibonacciRecursive(n) {
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciRecursive(3));
