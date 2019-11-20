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

console.log(inception(2));

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

// console.log('2'.charCodeAt(0));
// console.log('65'.charCodeAt(0));
// console.log('34'.charCodeAt(0));
// console.log('7'.charCodeAt(0));

basket.sort(function (a, b) {
  return a - b;
})

// console.log(basket);

// =====================================================
// 1. BUBBLE SORT
// space complexity O(1)
// time complexity O(n^2) - nested for loop
// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  // create variable so you don't have to repeat yourself
  const length = array.length;
  // for loop
  for (let i = 0; i < length; i++) {
    // another for loop to compare numbers in the array
    for (let j = 0; j < length; j++) {
      if (array[j] > array[j+1]) {
        // swap numbers
        let temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
  }
}

// bubbleSort(numbers);
// console.log(numbers);

// ======================================================
// 2. SELECTION SORT
// time complexity O(n^2)
// space complexity O(1)
// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    // set current index as minimum
    let min = i;
    let temp = array[i];
    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[min]) {
        // update minimum if current is lower than what we had previously
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}
// selectionSort(numbers);
// console.log(numbers);

// ==============================================================
// 3. INSERTION SORT
// time complexity O(n^2)
// space complexity O(1)

// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    if (array[i] < array[0]) {
      // move number to the first position
      array.unshift(array.splice(i, 1)[0]);
    } else {
      // find where number should go
      for (let j = 1; j < i; j++) {
        if (array[i] > array[j - 1] && array[i] < array[j]) {
          // move number to the right spot
          array.splice(j,0,array.splice(i,1)[0]);
        }
      }
    }
  }
}

// insertionSort(numbers);
// console.log(numbers);

// ================================================================
// 4. MERGE SORT
// time complexity O(n log n)
// space complexity O(n)

// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
// const numbers = [9]

function mergeSort(array) {
  // base case
  if (array.length === 1) {
    return array;
  }
  // split array into right and left
  const length = array.length;
  const middle = Math.floor(length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  // console.log('left:', left);
  // console.log('right:', right);

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  // console.log(left, right);
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// const answer = mergeSort(numbers);
// console.log(answer);

// ================================================================
// 5. QUICK SORT
// time complexity O(n^2)
// space complexity O(log(n))

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array, left, right) {
  const length = array.length;
  let pivot;
  let partitionIndex;

  if (left < right) {
    pivot = right;
    partitionIndex = partition(array, pivot, left, right);

    // sort left and right
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
  return array;
}

function partition(array, pivot, left, right) {
  let pivotValue = array[pivot];
  let partitionIndex = left;

  for (let i = left; i < right; i++) {
    if (array[i] < pivotValue) {
      swap(array, i, partitionIndex);
      partitionIndex++
    }
  }
  swap(array, right, partitionIndex);
  return partitionIndex;
}

function swap(array, firstIndex, secondIndex) {
  let temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);
// console.log(numbers);
