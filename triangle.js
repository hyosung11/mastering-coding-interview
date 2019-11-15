// looping a triangle
for (let line = '#'; line.length < 9; line += '#')
  console.log(line);

// FizzBuzz
for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) {
    output += 'Fizz';
  }
  if (n % 5 == 0) {
    output += 'Buzz'
  }
  // console.log(output || n);
}

for (let i = 0; i <= 100; i++) {
  let output = '';
  if (i % 3 == 0) output += 'Fizz';
  if (i % 5 == 0) output += 'Buzz'
  console.log(output || i);
}
