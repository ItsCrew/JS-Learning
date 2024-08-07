// function hello() {
//   console.log("hello");
// }

// console.log("mewo");

// setTimeout(hello, 4000); // Timeout 2s = 2000ms

// setTimeout(() => {
//   console.log("Hello");
// }, 4000);

// Callbacks

// function sum(a, b) {
//   console.log(a + b);
// }

// function calculator(a, b, sumcallback) {
//   sumcallback(a, b);
// }

// calculator(1, 2, sum);

// const hello = () => {
//   console.log("hello");
// };

// setTimeout(hello, 2000);

// nesting

// let age = 90;
// if (age >= 18) {
//   if (age >= 60) {
//     console.log("senior");
//   } else {
//     console.log("middle");
//   }
// } else {
//   console.log("child");
// }

// Nested loop

// for (let i = 0; i <= 5; i++) {
//   let str = "";
//   for (let j = 0; j <= 5; j++) {
//     str = str + j;
//   }
//   console.log(i, str);
// }

// Callback Hell
// function getData(dataID) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataID);
//       resolve("success");
//     }, 2000);
//   });
// }

// (async function getalldata() { // The ( in the start is an IIFI. Google it lol
//   await getData(1);
//   await getData(2);
//   await getData(3);
// })();

// // Promise Chain
// getData(1)
//   .then((res) => {
//     return getData(2);
//   })
//   .then((res) => {
//     return getData(3);
//   })
//   .then((res) => {
//     console.log(res);
//   });

// getData(1, () => {
//   getData(2, () => {
//     getData(3);
//   });
// });

// Promises

// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     reject(123);
//   });
// };

// let promise = getPromise();
// promise.catch((err) => {
//   console.log("Promise Fulphiled", err);
// });

// function asyncfunc1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data 1");
//       resolve("Success");
//     }, 3000);
//   });
// }

// function asyncfunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data 2");
//       resolve("Success");
//     }, 3000);
//   });
// }

// console.log("Fetching data1......");
// asyncfunc1().then((res) => {
//   console.log("Fetching data2.........");
//   asyncfunc2().then((res) => {});
// });

// Async-Await

// async function api() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Weather Data");
//       resolve(200);
//     }, 2000);
//   });
// }

// async function getWeatherData() {
//   await api();
//   await api();
// }
