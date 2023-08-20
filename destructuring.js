let rainbow = ["Red", "Orange", "Green", "Blue"];

// destructuring the array

// [arc1, arc2, arc3, arc4] = rainbow;
[arc1, ...others] = rainbow;
console.log(arc1);
console.log(others);
// console.log(arc2);
// console.log(arc3);
// console.log(arc4);

rainbow = {
  arc1: "Red",
  arc2: "Orange",
  arc3: "Green",
  arc4: "Blue",
  colors: "RGB",
};

const { arc1: color1, arc2: color2, arc3: color3, arc4: color4 } = rainbow;
console.log(color1);
console.log(color2);
console.log(color3);
console.log(color4);

const { colors } = rainbow;
console.log(colors);

console.log("##################################################");
const empName = "PC";
const empAge = 10;

const employee = {
  empName: empName,
  empAge: empAge,
};

console.log(employee.empName);
console.log(employee.empAge);

console.log("##################################################");

const items = [1, 2, 3];
for (const item of items) {
  console.log(item);
}

/*
for (const entry of items.entries()) {
  const index = entry[0];
  const value = entry[1];
  console.log(`Value is ${value} at index ${index}`);
}
*/

// replacing the above forloop by this

for (const [index, value] of items.entries()) {
  console.log(`Value is ${value} at index ${index}`);
}
