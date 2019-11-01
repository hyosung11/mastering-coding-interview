# mastering-coding-interview

## Big O Cheat Sheet:

O(1) Constant - no loops

O(log N) Logarithmic - usually searching algorithms have log n if they are sorted (Binary Search)

O(n) Linear - for loops, while loops through n items

O(n log(n)) Log Linear - usually sorting operations

O(n^2) Quadratic - every element in a collection needs to be compared to every other element. Two nested loops.

O(2^n) Exponential - recursive algorithms that solve a problem of size N

O(n!) Factorial - adding a loop for every element

Iterating through half a collection is still O(n)
Two separate collections: O(a * b)

### What can cause time in a function?
operations (+, -, *, /)
comparisons (<, >, ===)
looping (for, while)
outside function call (function())

### Rule Book
1. Always worst Case
2. Remove Constants
3. Different inputs should have different variables. O(a + b). A and B arrays nested would be O(a * b)
    + for steps in order
    * for nested steps
4. Drop non-dominant terms

### What causes space complexity?
variables
data structures
function calls
allocations

Data Structures + Algorithms = Programs

What is good code?
1. Readable
2. Scalable
  2.1 speed
  2.2 memory

### What are companies looking for?
1. Analytic Skills
2. Coding Skills
3. Technical Skills
4. Communication Skills


### Data Structures
1. How to Build One
2. How to Use It

Operations on Data Structures
Insertion
Deletion
Searching
Sorting
Traversal
Access

Arrays
lookup O(1)
push O(1)
insert O(n)
delete O(n)

String Question?
- treat any string questions as an array question because strings are simply an array of characters.
- e.g., reverse a string: convert into an array, do some sort of loop, or an operation using something like a split method in JS and then return the string.

Array Pros and Cons
Pros
1. fast lookups
2. fast push/pop
3. ordered

Cons
1. slow inserts
2. slow deletes
3. fixed size (if using static array)

Hash Tables
- dictionaries in python
- objects in JS
- maps in Java
- hashes in Ruby

idempotent
O(1)

Big O of Hash Tables
insert O(1)
lookup O(1)
delete O(1)
search O(1)


Big O:  Arrays  vs  Hash Tables       
search  O(n)        O(1)
lookup  O(1)        O(1)
insert  O(n)        O(1)
delete  O(n)        O(1)
push*   O(1)
