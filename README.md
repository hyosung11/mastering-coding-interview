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

Hash Tables aka
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

Hash Tables
- Fast Access O(1), tradeoff: more memory O(n)

Pros
- fast lookups* - good collision resolution needed
- fast inserts
- flexible keys

Cons
- unordered
- slow key iteration

Heuristics to ace the question:
1. Hash Tables are usually the answer to improve Time Complexity.
2. Hash Tables and precomputed information (i.e., sorted) are some of the best ways to optimize your code.

Linked Lists (back and forth on browser)
- singly linked
- doubly linked

- head => (pointer) tail and null terminated
pointer - a reference to another place in memory

Big O of Linked Lists
prepend O(1) - beginning
append O(1) - ending
lookup O(n) aka traversal
insert O(n)
delete O(n)

Doubly Linked Lists
prepend O(1)
append O(1)
lookup O(n)
insert O(n)
delete O(n)

Linked Lists Pros and Cons
Pros
fast insertion
fast deletion
ordered
flexible size

Cons
slow lookup
more memory

=================
Stacks and Queues
- linear data structures - sequentially
- push, pop,
- limited data structure, more control

Stacks (plates)
Last In First Out (LIFO)

Big O
lookup O(n)
pop O(1)
push O(1)
peek O(1)

Queues (entrance to rollercoaster)
First In First Out (FIFO)

Big O
lookup O(n)
enqueue O(1)
dequeue O(1)
peek O(1)

Pros and Cons of Stacks and Queues
Pros
- fast operations
- fast peek
- ordered

Cons
- slow lookup 
