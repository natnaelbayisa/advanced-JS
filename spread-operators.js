let loop = function (...numbers) {
  numbers.forEach((e) => console.log("val of e is :" + e));
  //   console.log(...num);
};

numbers = [4, 5, 6];
loop(...numbers);

//#############################################################

//destructing value for all params from the above code

let threeParams = function (num1, num2, num3) {
  console.log(num1 + ", " + num2 + ", " + num3);
};
threeParams(...numbers);

//###############################################################3
let question = ["how", "is", "the"];
let sentence = ["hey", "there", ...question, "weather?"];
console.log(sentence);
//or
console.log(..."there");

//################################################################3

const basic = { Name: "new", lastName: "pc", age: 1 };
const pcDetails = { ...basic, mob: "0000", email: "pc@example.io" };
console.log(pcDetails);
