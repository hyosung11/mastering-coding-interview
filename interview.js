// Given two arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items.

// For example
// const array1 = ['a', 'b'. 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
// should return false because no common item
// -------------------
// const array1 = ['a', 'b'. 'c', 'x'];
// const array2 = ['z', 'y', 'x'];
// should return true because both arrays contain the element x

// two parameters are always going to be arrays (ask the interviewer)
// return true or false
// no size limit for the array

// naive brute force - nested for loops O(n^2) - not efficient
// create a function with a descriptive name
// takes two arrays as parameters

// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];

function containsCommonItem(arr1, arr2) {
  // loop through the first array
  for (let i = 0; i < arr1.length; i++) {
    // another for loop for second array
    for (let j = 0; j < arr2.length; j++) {
      // compare elements in the arrays
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}
// // O(a*b) time complexity
// O(1) space complexity, not creating any new variables or data structures
// // console.log(containsCommonItem(array1, array2));

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'a'];

// convert array1 to an object
// array1 ==> object {
//   a: true,
//   b: true,
//   c: true,
//   x: true;
// }
// array2[index] === object.properties

function containsCommonItem2(arr1, arr2) {
  // loop through the first array and create an object where the properties === items in the array
  // can we always assume two parameters?
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i]
      map[item] = true;
    }
  }
  // console.log(map);
  // loop through second array and check if an item in the second array exists in the created object.
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
}

// O(a + b) the loops come after each other. not nested. Time cmplexity is better than above.
// O(a) space complexity


// console.log(containsCommonItem2(array1, array2));

// Approach 3
// google specific methods on arrays to see if I can optimize the code

function containsCommonItems3(arr1, arr2) {
  return arr1.some(item => arr2.includes(item))
}

console.log(containsCommonItems3(array1, array2));
