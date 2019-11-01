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

// console.log(hasPairWithSum2([6, 4, 3, 2, 1, 7], 9));

// ARRAYS
const strings = ['a', 'b', 'c', 'd'];
// 4*4 = 16 bytes of storage

// access/lookup
strings[2]; // O(n)

// push
strings.push('e') // O(1)

// pop
strings.pop();
strings.pop(); // O(1)

// unshift
strings.unshift('x'); // O(n)

// splice
strings.splice(2, 0, 'alien'); // O(n)

// console.log(strings);

// STATIC vs DYNAMIC ARRAYS
// dynamic arrays expand automatically
// JS automatically uses dynamic arrays

// C++
// int a[20];
// int b[5] {1,2,3,4,5};

// Implementing an Array
// 1. How to Build One
// 2. How to Use It

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  deleteAtIndex(index) {
    const item = this.data[index];
    this.shiftItems(index);
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++)
    {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--
  }
}

const newArray = new MyArray();
newArray.push('hi');
newArray.push('you');
newArray.push('!');
newArray.deleteAtIndex(0);
newArray.push('are');
newArray.push('nice');
newArray.deleteAtIndex(1);
// console.log(newArray);

// 66. Reverse a String
// create a function that reverses a string:
// 'Hi My name is Andrei' should be:
// 'ierdnA si eman yM iH'

// 1.
function reverse(str) {
  // check input
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'hmm that is not good';
  }
  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  // console.log(backwards);

  return backwards.join('');
}

// 2. JS Methods
function reverse2(str) {
  return str.split('').reverse().join('');
}

// 3. Arrow Function
const reverse3 = str => str.split('').reverse().join('');

// 4. Spread Operator
const reverse4 = str => [...str].reverse().join('');

// console.log(reverse('q'));

// 68. Merge Sorted Arrays
function mergeSortedArrays(array1, array2) {
  // check input
  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }
  // compare elements in first array with elements in second array
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  while (array1Item || array2Item) {
    if (array2Item === undefined || array1Item < array2Item) {
      mergedArray.push(array1Item)
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }

  return mergedArray;
}

// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
// [0, 3, 4, 4, 6, 30, 31]

// Hash Tables
let user = {
  age: 54,
  name: 'Kylie',
  magic: true,
  scream: function () {
    console.log('ahhhh!');
  }
}

// console.log(user); // O(1)
// console.log(user.age);
// console.log(user.spell = 'abra kadabra');
// console.log(user.scream()); // O(1)

// Hash Collisions
// O(n/k) ==> O(n)

const a = new Map(); // gives you some order
const b = new Set(); // no duplicate keys

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
          // console.log(hash);
    }
    return hash;
  } // O(1)

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];

    }
    this.data[address].push([key, value])
    return this.data;
  } // O(1)

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    // console.log(currentBucket);
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    } // O(1)
    return undefined;
  }

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        // console.log(this.data[i][0][0]);
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(50);
// console.log(myHashTable.set('grapes', 10000));
// console.log(myHashTable.set('apples', 54));
// console.log(myHashTable.set('oranges', 2));
// console.log(myHashTable.keys());

//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

function firstRecurringCharacter(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
} // O(n^2)

// console.log(firstRecurringCharacter([2,5,5,2,3,5,1,2,4]));

function firstRecurringCharacter2(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
  }
  return undefined;
}

console.log(firstRecurringCharacter2([2,5,5,2,3,5,1,2,4]));

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2
