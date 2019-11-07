// Stacks

// google
// udemy.com
// youtube

// Arrays
// Linked Lists

// Queues

// Matt -- Joy -- Samir -- Pavel
// Arrays
// Linked Lists

// Stack Implementation with Linked List
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }
//
// class Stack {
//   constructor() {
//     this.top = null;
//     this.bottom = null;
//     this.length = 0;
//   }
//   peek() {
//     return this.top;
//   }
//   push(value) {
//     const newNode = new Node(value);
//     if (this.length === 0) {
//       this.top = newNode;
//       this.bottom = newNode;
//     } else {
//       const holdingPointer = this.top;
//       this.top = newNode;
//       this.top.next = holdingPointer;
//     }
//     this.length++;
//     return this;
//   }
//   pop() {
//     if (!this.top) {
//       return null;
//     }
//     if (this.top === this.bottom) {
//       this.bottom = null;
//     }
//     const holdingPointer = this.top;
//     this.top = this.top.next;
//     this.length--;
//     return this;
//   }
//   // isEmpty
// }

// const myStack = new Stack();
// console.log(myStack.push('google'));
// console.log(myStack.push('Udemy'));
// console.log(myStack.push('Discord'));
// console.log(myStack.peek());
// console.log(myStack.pop());
// console.log(myStack.pop());
// console.log(myStack.pop());

// Discord
// Udemy
// google

// Stack Implementation with Array
// class Stack {
//   constructor() {
//     this.array = [];
//   }
//   peek() {
//     return this.array[this.array.length - 1];
//   }
//   push(value) {
//     this.array.push(value);
//     return this;
//   }
//   pop() {
//     this.array.pop();
//     return this;
//   }
//   // isEmpty
// }

// const myStack = new Stack();
// console.log(myStack.push('google'));
// console.log(myStack.push('Udemy'));
// console.log(myStack.push('Discord'));
// console.log(myStack.peek());
// console.log(myStack.pop());
// console.log(myStack.pop());
// console.log(myStack.pop());

// Discord
// Udemy
// google

// ====================
// QUEUE IMPLEMENTATION
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  // add to the line
  enqueue(value) {
    // create new node and instantiate it
    const newNode = new Node(value);
    // check the queue and if nothing there make the new node the first and last item
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      // instead of pointing to null point to the new node
      this.last.next = newNode;
      // update the last to equal the new node
      this.last = newNode;
    }
    // increase the length with the new node
    this.length++;
    // return the data structure
    return this;
  }
  dequeue() {
    // check if queue is empty
    if (!this.first) {
      return null;
    }
    // check if last item in queue
    if (this.first === this.last) {
      // make last item point to null
      this.last = null;
    }
    // hold in memory
    const holdingPointer = this.first;
    // next item becomes the first
    this.first = this.first.next;
    // decrease the length
    this.length--;
    return this;
  }
  // isEmpty
}

// const myQueue = new Queue();

// console.log(myQueue.enqueue('Joy'));
// console.log(myQueue.enqueue('Matt'));
// console.log(myQueue.enqueue('Pavel'));
// console.log(myQueue.enqueue('Samir'));
// console.log(myQueue.peek());
// console.log(myQueue.dequeue());
// console.log(myQueue.dequeue());
// console.log(myQueue.dequeue());
// console.log(myQueue.dequeue());
// Joy
// Matt
// Pavel
// Samir

// ===================
// QUEUES USING STACKS
// ===================
class CrazyQueue {
  constructor() {
    this.first = [];
    this.last = [];
  }

  enqueue(value) {
    const length = this.first.length;
    for (let i = 0; i < length; i++) {
      this.last.push(this.first.pop());
    }
    this.last.push(value);
    return this;
  }

  dequeue() {
    const length = this.last.length;
    for (let i = 0; i < length; i++) {
      this.first.push(this.last.pop());
    }
    this.first.pop();
    return this;
  }
  peek() {
    if (this.last.length > 0) {
      return this.last[0];
    }
    return this.first[this.first.length - 1];
  }
}

const myQueue = new CrazyQueue();
console.log(myQueue.peek());
console.log(myQueue.enqueue('Omi'));
console.log(myQueue.enqueue('SungOh'));
console.log(myQueue.enqueue('Sohee'));
console.log(myQueue.peek());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.peek());
