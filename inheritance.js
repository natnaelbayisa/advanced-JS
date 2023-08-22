/*
const Bird = function (beak) {
  this.beak = beak;

  function canEat() {
    return "I can Eat";
  }

  const eagle = new Bird("Large");
  console.log(eagle.__proto__ === Object.prototype);
};
// class -> prototype object

const parrot = new Bird("Small");
console.log(parrot.__proto__ === eagle.__proto__); //true

Bird.prototype.canFly = true;

console.log(eagle.canFly); //true
console.log(parrot.canFly); //true

// parrot/eagle -> Bird.prototype ->object.prototype

const flightlessBird = Object.create(Bird.prototype);
flightlessBird.canFly = false;

console.log(flightlessBird.canFly); //true
console.log(flightlessBird.canEat());
*/

class Bird {
  constructor(beak) {
    this.beak = beak;
  }

  canEat() {
    console.log("I can eat");
  }
  info() {
    return `I am a bird with ${this.beak} beak. `;
  }
}

class FlyingBird extends Bird {
  constructor(wings, beak) {
    super(beak);
    this.wings = wings;
  }
  info() {
    return super.info() + `I posses ${this.wings} feathers.`;
  }
}

const flyingBird = new FlyingBird("fluffy", "sharp");
flyingBird.canEat(); // its logged out above
console.log(flyingBird.info()); // its value is returned

console.log(FlyingBird.prototype.__proto__ === Bird.prototype); //true

//prototypal chain
