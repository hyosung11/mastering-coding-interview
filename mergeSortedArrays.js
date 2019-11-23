// REACTO Repeat the question. Use examples with input and output, describe the approach - iterative, recursive brute force; pseudocode with breadth first approach; test your inputs with different colored marker; articulate ways to optimize the code

// Merge two sorted arrays
// always numbers? Integers? Floating point numbers? negative numbers

// declare the function with parameters with good names
function mergeSortedArrays(array1, array2) {
  // define variables used in the function
  // mergedArray will be our answer
  const mergedArray = [];
  // grab the array1 item at index 0
  let array1Item = array1[0];
  // grab the array2 item at index 0
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  // check input - if either array is empty
  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }

  // if arrays have items let's check them
  while (array1Item || array2Item) {
    console.log(array1Item, array2Item);
    if (!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item)
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }

  // want to return the mergedArray at the end
  return mergedArray;
}

console.log(mergeSortedArrays([0,3,4,31], [4,6,30]));
// [0,3,4,4,6,30,31]
