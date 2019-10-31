// reference type
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

// context vs scope
const object4 = {
  a: function() {
    console.log(this);
  }
}
object4.a()

// instantiation - make a copy of the object and reuse the code.
class Player {
  constructor(name, type) {
    console.log(this);
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type)
  }
  play() {
    console.log(`WEEEE I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard('Shelley', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');
