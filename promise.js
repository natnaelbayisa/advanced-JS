/*
const p = new Promise((resolve, reject) => {
   try {
     const name = "Home Alone"
    const part = 3
       let movie = `${name} ${part}`
       throw Error("Nor found")
    resolve(movie)
   } catch (err) {
       reject(err)
    
   }
}
)

p.then(movie => movie + " : Under creation")
    .then(movie => console.log(movie))
    .catch(err => console.log(err.message))

*/

const p1 = new Promise((resolve, reject) => {
  const part = 8;
  setTimeout(() => reject("There is no such movie"), 700);
  // resolve(part)
});

const p2 = new Promise((resolve, reject) => {
  const movie = "Harry Potter";
  setTimeout(() => resolve(movie), 500);
  // resolve(movie)
});
const p3 = new Promise((resolve, reject) => {
  const progress = "Under creation";
  setTimeout(() => resolve(progress), 1000);
  // resolve(progress)
});

// Promise.allSettled([p2, p1, p3]).then((list) =>
//   list.forEach((p) => console.log(p.value))
// );

// Promise.all([p2, p1, p3]).then((list) =>
//   list.forEach((p) => console.log(p))
// );

Promise.race([p2, p1, p3]).then((p) => console.log(p));
