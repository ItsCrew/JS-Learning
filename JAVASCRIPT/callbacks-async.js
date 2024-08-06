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
// function getData(dataID, getNextData) {
//   setTimeout(() => {
//     console.log("data", dataID);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// }

// getData(1, () => {
//   getData(2, () => {
//     getData(3);
//   });
// });

// Promises

let promise = new Promise((resolve, reject) => {
  console.log("I am a promise");
  reject(123);
});
