// globalThis is used for all environment
let a = 40;

function demo() {
  let a = 20;
  console.log(a);
  console.log(global.a);
  console.log(globalThis.a);
}

demo();
