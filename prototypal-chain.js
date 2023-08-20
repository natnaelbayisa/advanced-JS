const anObject = { name: "PC" };
console.log(anObject.hasOwnProperty("name")); //true

//object.getProtoTypeOf
console.log(anObject.__proto__ === Object.prototype); //true
console.log(anObject.__proto__ === Object.getPrototypeOf(anObject)); //true

anObject.__proto__.newMethod = function () {
  console.log("Added a new method to the prototype");
};

anObject.newMethod();
