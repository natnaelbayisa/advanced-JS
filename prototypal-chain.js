const anObject = { name: "PC" };
console.log(anObject.hasOwnProperty("name")); //true

//object.getProtoTypeOf
console.log(anObject.__proto__ === Object.prototype); //true
console.log(anObject.__proto__ === Object.getPrototypeOf(anObject)); //true

anObject.__proto__.newMethod = function () {
  console.log("Added a new method to the prototype");
};

anObject.newMethod();

console.log("##################################################");

const employee = { id: 1, age: 2 };
employee.newMethod();

const listOfEmps = [employee];
listOfEmps.newMethod();

console.log(listOfEmps.__proto__ === Object.prototype); //false
//listOfEmps ->Array->Object
// []
console.log(listOfEmps.__proto__ === Array.prototype); //true
console.log(Array.prototype.__proto__ === Object.prototype); //true
console.log(listOfEmps.__proto__.__proto__ === Object.prototype); //true

//listOfEmps ->Array.prototype->Object.prototype-> null

//Prototypal Chain, Prototypal Chain Inheritance
//Object Based Inheritance
