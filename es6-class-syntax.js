"use strict";

const personalInfo = {
  name: "PC",
  age: 100,
  printInfo: function () {
    // console.log(`I am ${personalInfo.name} and my age is ${personalInfo.age}`);
    console.log(`I am ${this.name} and my age is ${this.age}`);
  },
};

personalInfo.printInfo();

const Person = function (name) {
  if (!new.target) {
    throw new Error("This is not a function");
  }
  this.me = this.name;
};

const jazz = new Person("Jazz");
// Person("Eliana");

// ES6

class Home {
  constructor(rooms, kitchens, flooring) {
    this.kitchens = kitchens;
    this.rooms = rooms;
    this.implementedFlooring = flooring;
    this.bathRooms = 1;
    this.floors = 1;
  }
  //ES2022
  #stores = 2;

  //getter
  get floor() {
    return this.implementedFlooring;
  }

  //setter
  set floor(floor) {
    this.implementedFlooring = floor;
  }

  createRoom() {
    this.rooms = this.rooms + 1;
  }

  createFloor() {
    this.floors = this.floors + 1;
    this.#createBathRoom();
  }
  #createBathRoom() {
    this.bathRooms = this.bathRooms + 1;
  }
}

// console.log(typeof Home);

const myHome = new Home(5, 2, "Marble");
myHome.createRoom();
myHome.floor = "Concrete";
console.log(myHome.rooms);
console.log(myHome.kitchens);
console.log(myHome.floor);
console.log(myHome.bathRooms);

myHome.createFloor();
console.log(myHome.bathRooms);

// Home();
