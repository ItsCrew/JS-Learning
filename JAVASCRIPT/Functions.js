// let msg = "Hi"

// function mera(n1, n2, n3) { // Parameter basically input to be provided in the function
//     console.log(n1 + n2 + n3)
// }

// mera(1, 3, 4) // Argument

// Returning and shit



// function login(username) { // creating the function naming it login
//     return `${username} just logged in` // returning it and making it so whenever this function is uses it will work this way
// }
// let username = prompt("Username")
// console.log(login(username))

// console.log(login("hiee"))

// Arrow Function
// function summ(a, b) {
//     return a+b;
// }

// const arrowsum = (a, b) => {
//     console.log(a + b)
// }
// arrowsum(3, 3)

// const arrowmul = (a, b) => {
//     return a*b;
// }
// console.log(arrowmul(4,2))

// Practice Question
// function vowvel(str) { // creating the function
//     let count = 0; // THis is to count the index number of the string we use in the function
//     for(const char of str) { // for off loop
//         if( // if statement
//             char === "a" ||
//             char === "e" ||
//             char === "i" ||
//             char === "o" ||
//             char === "u"
//         ) {
//             count++; // if the word provided in the string using the function it will plus the count and return whats the count
//         }
//     }

//     return count; // here we are returning it so now we will have to use the function and tell it log it in the console.
// }

// console.log(vowvel("Mamamia"))


// const vowvell = (string) => {
//     let count = 0; // THis is to count the index number of the string we use in the function
//     for(const chara of string) { // for off loop
//         if( // if statement
//             chara === "a" ||
//             chara === "e" ||
//             chara === "i" ||
//             chara === "o" ||
//             chara === "u"
//         ) {
//             count++; // if the word provided in the string using the function it will plus the count and return whats the count
//         }
//     }

//     return count; // here we are returning it so now we will have to use the function and tell it log it in the console.
// }

// console.log(vowvell("ai"))


// For each loop method in array. it is a function to execute for each element in the array. it just edits the original arr and logs it

// let arr = [1,2,3,4,5]

// arr.forEach((val, idx, arr) => { // basically its a call back function it is we creating a fucntion naming it printval in which we are passing val as a parameter so it will be used as to count the number in index numbers and print it
//     console.log(arr)
// })

// Practice Question

// let arr = [1,2,3,4,5]

// arr.forEach((val) => {
//     console.log(val**2)
// })

// Map method - Creates a new array with the results of some operation. The value its callback returns are used to form new array

// let arr = [1,2,3,4,5]

// let newarr = arr.map((val) => {
//     return val*val;
// })

// console.log(newarr)

// Filter method - Creates a new array of elements that give true for a condition/filter
// let arr = [1,2,3,4,5,6,7,8,9]

// let fil = arr.filter((val) => {
//     return val%2===0;
// })

// console.log(fil)

// Reduce Method - Performs some operations & reduces the array to a single value. It returns that single value.
// let arr = [1,2,3,4,5,6]
// const start = 0;
// const sum = arr.reduce(
//     (res, val) => res + val,
//     start,                       //MDN EXAMPLE
// );

// console.log(sum);


// How to print the biggest number from the given array
// let arr = [-1,-4,-6,-2,-3,-7,-5,-8]

// const output = arr.reduce((prev, current) => { // creating a function basically using arrow function. which has 2 callback parameters in it one is the previous value one is the current value will also write this in the notebook.
//     return prev > current ? prev : current; // Have to study again what does this do. but yes its basically storing the numbers and seeings which is bigger then which i will do this in notebook
// })

// console.log(output);


// Practice Questionsssss
// let marks = [97, 34, 32, 49, 99, 96, 86]
//  let filtermarks = marks.filter((val) => {
//     return val>=90;
//  })

// console.log(filtermarks) // output - [97,99,96]

// Q2
// let n = prompt("Enter a number");
// let arr = [];

// for(let i= 1; i<=n; i++) { // Will understand this better
//     arr[i-1] = i; // Basically this is logging the number we put in prompt to its chosen index. if we say 3 it will always be at index 2
// }

// console.log(arr)
// let sum = arr.reduce((prev, current) => {
//     return prev * current; // Factorial - 1*n is factorial
// })
// console.log(sum)