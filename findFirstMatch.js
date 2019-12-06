function findFirstMatch(searchString, sourceString) {
  let length = searchString.length;
  for (let index = 0; index < sourceString.length; index++) {
    let possibleMatch = sourceString.substr(index, length)
    if (possibleMatch === searchString) {
      return index;
    }
  }
  return - 1;
}

console.log(findFirstMatch('yes','abcdyesefgh'));
console.log(findFirstMatch('yes','abcdyedefgh'));
