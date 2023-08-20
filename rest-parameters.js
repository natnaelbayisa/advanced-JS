const foo = function (...numbers) {
  console.log(numbers);

  console.log(numbers instanceof Array);
  /*
    for (let i = 0; i < numbers.length; i++) {
      console.log("print all numbers in the array", numbers[i]);
      console.log("iterate the first index overall numbers", numbers[0]);
      console.log("delete the first index from the array", numbers.pop());
      */
  // pop, deletes `print all numbers in the array 3, iterate the first index overall numbers 1

  //
  //   replacing forloop by for each
  numbers.forEach((e) => console.log(e));
  console.log("holds the last element of the array", numbers.pop());
  numbers.find((e) => e === 1);
  // }
};

foo(1, 2, 3);
