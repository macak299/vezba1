// The Promise.race is a global property of the Promise object. 
// It gets an array of Promises and waits for the first one to finish. 
// Whether the race is resolved or rejected depends on the winning member.


// Result: p2
// const p1 = new Promise((res) => setTimeout(() => res("p1"), 1000));
// const p2 = new Promise((res) => setTimeout(() => res("p2"), 500));

// const result = Promise.race([p1, p2]).then((data) => {
//     console.log(data);
// });



//Promises
// const promise1 = new Promise((resolve, reject) => {
//     resolve('Success!');
// });

// promise1.then((value) => {
//     console.log(value);
// });

// const p1 = new Promise((resolve, reject) => {
//     resolve("Success!");
//     // or
//     // reject(new Error("Error!"));
//   });
  
//   p1.then(
//     (value) => {
//       console.log(value + " It works!"); 
//     },
//     (reason) => {
//       console.error(reason + " Again it works!"); 
//     },
//   );

let promise = new Promise(function(resolve, reject) {
    // the function is executed automatically when the promise is constructed
  console.log("KAos");
    // after 1 second signal that the job is done with the result "done"
    setTimeout(() => resolve(console.log("done")), 1000);
  });