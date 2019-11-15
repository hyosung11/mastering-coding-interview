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

=====
Trees - hierarchical structure

Perfect Binary Tree
- everything filled in
- no node that has only one child
- every node has either two children or no children
- number of nodes doubles at every level

Full Binary Tree
- node has

Binary Search Tree Big O
lookup O(log N)
insert O(log N)
delete O(log N)

Pros
- better than O(n)
- ordered
- flexible size

Con
- No O(1) operations

AVL Trees and Red Black Trees
- automatically balance trees

Binary Heap - comparative operations
balancing

lookup O(n)
insert O(log N)
delete O(log N)

max heap
min heap

Priority Queue in binary heaps

Binary Heaps
Pros
- better than O(n)
- Priority
- flexible size
- fast insert

Cons
- slow lookup

Trie
- special tree used in searching
- speed and space advantage

==============
Graph - set of connections related in a pairwise fashion
- node (vertex) and edges
- great for modeling real world data structures

directed - twitter
undirected - facebook

weighted - information on the edges
unweighted - only in the nodes

cyclic - able to get back to the beginning
acyclic  - not connected at beginning and end

e.g., directed acyclic graph

Graphs
pros - relationships
cons - scaling is hard

==========
ALGORITHMS
==========
1. Sorting
2. Dynamic Programming
3. BFS & DFS (searching)
4. Recursion

Recursion
Pros
- DRY
- readability

Cons
- large stack

Recursion
- Every time you are using a tree or converting something into a tree, consider recursion, if:
1. divided into a number of subproblems that are smaller instances of the same problem.
2. each instance of the subproblem is identical in nature.
3. the solutions of each subproblem can be combined to solve the problem at hand.
- divide and conquer using recursion

Recursion
1. merge sort
2. quick sort
3. tree traversal
4. graph traversal

SORTING
1. bubble sort
2. insertion sort
3. selection sort
4. merge sort
5. quick sort

Which Sort is Best
- insertion sort when only a few items
- bubble sort never used only educational
- selection sort only educational
- merge sort because of divide and conquer is fast
- quick sort better than merge sort except if bad pivot

Can we beat O(n log n)?

1. Comparison Sort
- bubble
- insertion
- selection
- merge
- quick

2. Non-comparison Sort - fixed length integers only
- counting sort
- radix sort

SORTING INTERVIEW QUESTIONS
//#1 - Sort 10 schools around your house by distance:
- insertion sort

//#2 - eBay sorts listings by the current Bid amount:
- radix or counting sort

//#3 - Sport scores on ESPN
- quick sort

//#4 - Massive database (can't fit all into memory) needs to sort through past year's user data
- merge sort

//#5 - Almost sorted Udemy review data needs to update and add 2 new reviews
- insertion sort

//#6 - Temperature Records for the past 50 years in Canada
- radix or counting sort,
- quick sort

//#7 - Large user name database needs to be sorted. Data is very random.
- merge sort or quick sort

//#8 - You want to teach sorting for the first time
- bubble sort or selection sort

ALGORITHMS: SEARCHING
- linear search from O(1) to O(n)
- binary search
- depth first search
- breadth first search

Breadth First Search
time complexity O(n)
- move left to right level by level

Pros
- shortest path
- closer nodes
Con
- more memory

Depth First Search
time complexity O(n)
- follows one branch of the tree down as many levels as possible until the target node is found or the end is reached.

Pros
- less memory
- does path exist?

Cons
- can get slow

Traversal Quiz - 1

//If you know a solution is not far from the root of the tree:
breadth first search

//If the tree is very deep and solutions are rare:
BFS (DFS will take a long time)

//If the tree is very wide:
DFS (BFS will need too much memory)

//If solutions are frequent but located deep in the tree:
depth first search

//Determining whether a path exists between two nodes:
depth first search

//Finding the shortest path:
breadth first search

Djikstra and Bellman-Ford Algorithms
- shortest path problems

DYNAMIC PROGRAMMING
- an optimization technique

Caching
- a way to store values so you can use them later.

Dynamic Programming = divide & conquer + memoization
1. can it be divided into subproblems
2. recursive solution
3. are there repetitive subproblems?
4. memoize subproblems
5. demand a raise from your boss
