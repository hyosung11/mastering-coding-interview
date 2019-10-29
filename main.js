// BIG O Notation

// const performance = require('perf_hooks').performance;
//
// const nemo = ['nemo'];
// const everyone = ['dory', 'bruce', 'narlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
// const large = new Array(100000).fill('nemo');
//
// function findNemo(array) {
//   let t0 = performance.now();
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === 'nemo') {
//       console.log('Found NEMO!');
//     }
//   }
//   let t1 = performance.now();
//   console.log('Call to find Nemo took ' + (t1 - t0) + ' milliseconds');
// }
// findNemo(large);

const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'narlin', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank', 'nemo'];
const large = new Array(100000).fill('nemo');

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    console.log('running');
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');
      break;
    }
  }
}

// findNemo(everyone); // O(n) ==> linear time
//
// const boxes = [0, 1, 2, 3, 4, 5];
//
// function logFirstTwoBoxes(boxes) {
//   console.log(boxes[0]); // O(1)
//   console.log(boxes[1]); // O(1)
// }
//
// logFirstTwoBoxes(boxes); // O(2)
// O(1) - constant time (flat line; excellent)

// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) { // O(n)
    anotherFunction(); // O(n)
    let stranger = true; // O(n)
    a++; // O(n)
  }
  return a; // O(1)
}

// console.log(funChallenge(4));
// O(1) + O(1) + O(1) = 3
// O(n) + O(n) + O(n) + O(n) = 4n
// BIG O(3 + 4n) ==> O(n)

// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)
  for (let i = 0; i < input; i++) { // O(n)
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)
  }
  for (let j = 0; j < input; j++) { // O(n)
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }
  let whoAmI = "I don't know"; // O(1)
}

// console.log(anotherFunChallenge(5));
// BIG O(4 + 5n) ==> O(n)

// BIG O Rule Book
// 1. Worst Case
// 2. Remove Constants
// 3. Different terms for inputs
// 4. Drop non-dominants

// 2. Remove Constants
// O(1 + n/2 + 100) ==> O(n)
// O(2n) ==> O(n)

// 3. Different terms for inputs

// Log all pairs of array
// const boxes = [1, 2, 3, 4, 5];
// const letters = ['a', 'b', 'c', 'd', 'e']
//
// function logAllPairsOfArray(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       console.log(array[i], array[j]);
//     }
//   }
// }
//
// logAllPairsOfArray(letters);
// nested loops - O(n * n) ==> O(n^2)

// 4. Drop non-dominant terms
function printAllNumbersThenAllPairSums(numbers) {
  console.log('these are the numbers:');
  numbers.forEach(function(number) {
    console.log(number);
  });

  console.log('and these are their sums:');
  numbers.forEach(function(firstNumber) {
    numbers.forEach(function(secondNumber) {
      console.log(firstNumber + secondNumber);
    })
  })
}

// printAllNumbersThenAllPairSums([1, 2, 3, 4, 5])
// O(n + n^2) ==> O(n^2)

// #5 Space Complexity O(1)
function boo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log('boo!');
  }
}

// boo([1, 2, 3, 4, 5]) // O(1)

// #6 Space Complexity O(n)
function arrayOfHiNTimes(n) {
  let hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = 'hi';
  }
  return hiArray;
}

// console.log(arrayOfHiNTimes(6)); // O(n)

// Exercise Twitter
// Find 1st, Find Nth ...
// const array = ['hi', 'my', 'teddy'];
// array[0]; // 0(1)
// array[array.length - 1] // 0(1)

const array = [
  {
    tweet: 'hi',
    date: 2002
  },
  {
    tweet: 'my',
    date: 2014
  },
  {
    tweet: 'teddy',
    date: 2018
  }
];
// O(n^2)

'helowsasadgassdad'.length // O(1)

// forEach Loop in JS
const findNemo2 = array => {
  array.forEach(fish => {
    if (fish === 'nemo') {
      console.log('Found NEMO!');
    }
  })
}

// for let loop
const findNemo3 = array => {
  for (let fish of array) {
    if (fish === 'nemo') {
      console.log('Found NEMO!');
    }
  }
}

// findNemo2(everyone);
// findNemo3(everyone);

// Will you solve the company's problems?

// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items.
// For Example:
// const array1 = ['a', 'b', 'c', 'd']
// const array2 = ['x', 'y', 'z'];
// should return false.
// --------------------
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];
// should return true.

// 2 parameters - arrays - no size limit
// return true or false
// The brute force method with two nested for loops would return O(n^2)
// not efficient

// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];
//
// function containsCommonItem(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }
// O(a*b) - if arrays same size then O(n^2)
// O(1) - Space Complexity
// console.log(containsCommonItem(array1, array2));

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'a'];

// array1 ==> obj {
// a: true,
// b: true,
// c: true,
// x: true
// }
// array2[index] === obj.properties

function containsCommonItem2(arr1, arr2) {
  // loop through first array and create object where properties === items in the array.
  // can we assume always 2 params?
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[array1[i]]) {
      const item = array1[i]
      map[item] = true;
    }
  }
  // loop through second array and check if item in second array exists on created object
  for (let j = 0; j < arr2.length; j++) {
    if (map[array2[j]]) {
      return true;
    }
  }
  return false;
}

// O(a + b) Time Complexity
// O(a) Space Complexity

// console.log(containsCommonItem2(array1, array2));

// built-in JS method
function containsCommonItem3(arr1, arr2) {
  return arr1.some(item => arr2.includes(item))
}

// Google Question
// Naive or Brute Force Method
function hasPairWithSum(arr, sum) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    for (var j = i + 1; j < len; j++) {
      if (arr[i] + arr[j] === sum)
        return true;
    }
  }
  return false;
}

// console.log(hasPairWithSum([6, 4, 3, 2, 1, 7], 9));

// Better
function hasPairWithSum2(arr, sum) {
  const mySet = new Set();
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (mySet.has(arr[i])) {
      return true;
    }
    mySet.add(sum - arr[i]);
    console.log(mySet);
  }
  return false;
}

console.log(hasPairWithSum2([6, 4, 3, 2, 1, 7], 9));
