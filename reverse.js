// 66. Reverse a String
// create a function that reverses a string:
// 'Hi My name is Andrei' should be:
// 'ierdnA si eman yM iH'

function reverse(str) {
  // check input
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'not a reversible string'
  }
  // create a backwards array
  const backwards = [];
  // track the elements in the string
  const totalItems = str.length - 1;
  // loop through the string
  for (let i = totalItems; i >= 0; i--) {
    // push
    backwards.push(str[i]);
  }
  // console.log(backwards);

  // return the array that is reversed as a string using join() method
  return backwards.join('');
}
// invoke the function with argument
// console.log(reverse('Hi My name is Andrei'));

// Another approach using built-in JS method
function reverse2(str) {
  // not checking input this time;
  // use reverse() method
  return str.split('').reverse().join('');
}

// console.log(reverse2('Hi My name is Andrei'));

// arrow function for one line version in ES6
const reverse3 = (str) => str.split('').reverse('').join('');

// console.log(reverse3('Hi My name is Andrei'));

// using the spread operator (no longer need split())
const reverse4 = (str) => [...str].reverse().join('');

// console.log(reverse4('Hi My name is Andrei'));
