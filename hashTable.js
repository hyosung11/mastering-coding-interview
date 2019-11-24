// create a hash table aka JS object

let user = {
  age: 54,
  name: 'Kylie',
  magic: true,
  scream: function() {
    console.log('ahhhh');
  }
}

// console.log(user.name); // O(1)
// console.log(user.spell = 'abra kadabra');
// console.log(user.scream()); // O(1)

// collisions slow down hash tables
// O(n/k) - k is size of hash table
// linked list used to deal with collisions in hash tables

// JS ES6
// Map - allows any data type to be used as the key
// maintains insertion order
// Sets - only stores values no keys

// const a = new Map()
// const b = new Sets()

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
}

_hash(key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash = (hash + key.charCodeAt(i) * i) %
    this.data.length
  }
  return hash;
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.get('grapes')
