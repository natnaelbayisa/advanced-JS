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
  static stores = 2;

  //getter
  static get floor() {
    return "Default flooring";
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
Home.stores = 3;
console.log(Home.stores);

const home = new Home(2, 4, "Wooden");
console.log(home.stores);
console.log(home.floor);
