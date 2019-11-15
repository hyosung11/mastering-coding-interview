// memoization
function addTo80(n) {
  // console.log('long time');
  return n + 80;
}

// console.log(addTo80(5));
// console.log(addTo80(5));
// console.log(addTo80(5));

let cache = {};
function memoizedAddTo80(n) {
  if (n in cache) {
    return cache[n];
  } else {
    console.log('long time');
    cache[n] = n + 80;
    return cache[n];
  }
}

// console.log('1', memoizedAddTo80(5));
// console.log('2', memoizedAddTo80(6));
// console.log('3', memoizedAddTo80(5));

function memoizedAddTo80() {
  let cache = {};
  return function(n) {
    if (n in cache) {
      return cache[n];
    } else {
      // console.log('long time');
      cache[n] = n + 80;
      return cache[n];
    }
  }
}

const memoized = memoizedAddTo80();

// console.log('1', memoized(5));
// console.log('2', memoized(6));
// console.log('3', memoized(5));
// console.log('2', memoized(6));

let calculations = 0;
function fibonacci(n) { // O(2^n)
  calculations++;
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// console.log('slow', fibonacci(10));
// console.log(calculations);

// Implementing Dynamic Programming with Fibonacci
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233 ...

let calculations2 = 0
function fibonacciMaster() { // O(n)
  let cache = {};
  return function fib(n) {
    calculations2++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n-1) + fib(n-2)
        return cache[n];
      }
    }
  }
}

let calculations3 = 0;
function fibMaster2(n) {
  let answer = [0, 1];
  for (let i = 2; i <= n; i++) {
    calculations3++;
    answer.push(answer[i-2] + answer[i-1])
  }
  return answer.pop();
}

const fasterFib = fibonacciMaster();
console.log('slow', fibonacci(11));
console.log('slow way ' + calculations);
console.log('DP', fasterFib(100));
console.log('cache ' + calculations2);
console.log('DP2', fibMaster2(100));
console.log('loop ' + calculations3);
