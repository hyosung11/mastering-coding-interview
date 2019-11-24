// JS doesn't have linked lists built in.
// linked list: apple --> grapes --> pears
//
// apples
// 8947 --> grapes
//           8742 --> pears
//                     372 --> null

// Pointer
// const obj1 = { a: true };
// const obj2 = obj1;
// obj1.a = 'booya';
// console.log('1', obj1);
// console.log('2', obj2);

// let obj1 = { a: true };
// let obj2 = obj1;
// obj1.a = 'booya';
// delete obj1;
// obj2 = 'hello';
// console.log('1', obj1);
// console.log('2', obj2);

// Linked List Example
// 1-->10-->5-->16
//
// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null
//       }
//     }
//   }
// }

// add a method prepend() to the linked list that adds a node to the beginning of the list

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    // create a new node
    const newNode = {
      value: value,
      next: null
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  insert(index, value) {
    // check params
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = {
      value: value,
      next: null
    }
    const leader = 
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(200, 99);
console.log(myLinkedList.printList());
// console.log(myLinkedList);
// class LinkedList {
//   constructor(value) {
//     this.head = {
//       value: value,
//       next: null
//     };
//     this.tail = this.head;
//     this.length = 1;
//   }
  // append(value) {
  //   const newNode = {
  //     value: value,
  //     next: null
  //   }
//     console.log(newNode)
//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.length++;
//     return this;
//   }
//   prepend(value) {
//     const newNode = {
//       value: value,
//       next: null
//     }
//     newNode.next = this.head;
//     this.head = newNode;
//     this.length++;
//     return this;
//   }
// }
//
// let myLinkedList = new LinkedList(10);
// myLinkedList.append(5);
// myLinkedList.append(16);myLinkedList.prepend(1)

// DRY code
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }
//
// class LinkedList {
//   constructor(value) {
//     this.head = {
//       value: value,
//       next: null
//     }
//     this.tail = this.head;
//     this.length = 1;
//   }
//   append(value) {
//     const newNode = new Node(value);
//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.length++;
//     return this;
//   }
//   prepend(value) {
//     const newNode = new Node(value);
//     newNode.next = this.head;
//     this.head = newNode;
//     this.length++;
//     return this;
//   }
//   printList() {
//     const array = [];
//     let currentNode = this.head;
//     while (currentNode !== null) {
//       array.push(currentNode.value);
//       currentNode = currentNode.next;
//     }
//     return array;
//   }
//   insert(index, value) {
//     // check params
//     if (index >= this.length) {
//       return this.append(value);
//     }
//     const newNode = {
//       value: value,
//       next: null
//     }
//     const leader = this.traverseToIndex(index - 1)
//     const holdingPointer = leader.next;
//     leader.next = newNode;
//     newNode.next = holdingPointer;
//     this.length++;
//     return this.printList()
//   }
//   traverseToIndex(index) {
//     // check params
//     let counter = 0;
//     let currentNode = this.head;
//     while (counter !== index) {
//       currentNode = currentNode.next;
//       counter++;
//     }
//     return currentNode;
//   }
//   remove(index) {
//     // check params
//     // O(n) - need to traverse the list
//     const leader = this.traverseToIndex(index - 1);
//     const unwantedNode = leader.next;
//     leader.next = unwantedNode.next;
//     this.length--;
//     return this.printList();
//   }
//   reverse() {
//     // test for only one item in the list
//     if (!this.head.next) {
//       return this.head;
//     }
//     let first = this.head;
//     this.tail = this.head;
//     let second = first.next;
//
//     while (second) {
//       const temp = second.next;
//       second.next = first;
//       first = second;
//       second = temp;
//     }
//
//     this.head.next = null;
//     this.head = first;
//     return this.printList();
//   }
// }
//
// const myLinkedList = new LinkedList(10)
// myLinkedList.append(5);
// myLinkedList.append(16);
// myLinkedList.prepend(1);
// myLinkedList.insert(2, 99);
// myLinkedList.insert(20, 88);
// // myLinkedList.printList();
// // myLinkedList.remove(2);
// // myLinkedList.remove(2);
// myLinkedList.reverse();
// // console.log(myLinkedList.printList());
// // console.log(myLinkedList);
