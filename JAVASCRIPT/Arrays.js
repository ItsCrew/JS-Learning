// let marks = [85,97,44,37,76,60];
// console.log(marks)
// console.log(marks[0]=80); //property
// console.log(marks)

// For loop
// for (let i =0; i<marks.length;i++) {
//     console.log(marks[i])
// }

// // For-of Loop
// for(let mark of marks) {
//     console.log(mark)
// }

// Practice Question
// let sum = 0; // making the value of sum 0, using let so we can change it later

// for (let val of marks) { // for of loop here to loop all the things in the array
//     sum += val // the loop of everything in the array will be added
// }

// let avg = sum/marks.length // taking out avg of all the numbers
// console.log(`Avg marks of the class is ${avg}`)

// Practice Question 2
// let items = [250, 645, 300, 900, 50]
// let i =0;
// for (let val of items ) { // let val - val here is basically every value in the array.
//     let offer = val/10 // task performed will be done to the values individually
//     items[i] = items[i] - offer // Minus isiliye kiya to minus the percentage taken out of val for example 250 ka 10 percent is 25
//     console.log(`After offer the value was ${items[i]}`)
//     i++;
// }
// console.log(items)

// WRITE THIS QUESTION IN NOTEBOOK IT WAS HARD (FOR ME)
// THIS QUESTION DONE USING FOR LOOP
// for (let i=0;i<items.length; i++) {
//     let offer = items[i]/10;
//     items[i] -= offer;
// } 

// console.log(items);  

// ARRAY METHODS
// let marks = [10, 20, 30, 40, 50, 60]
// let items = ["mamamia", "miamama", "mama", "mia"]
// let items2 = ["wdawd", "wadad", "weweisd", "ssdasdas"]
// Push Method - adds things in the end of the array. CHANGES THE ORIGINAL ARRAY
// marks.push(82)
// console.log(marks)


// Pop Method - Deletes something from the end of the array. CHANGES THE ORIGINAL ARRAY
// console.log(marks)
// let del = marks.pop()
// console.log(marks)
// console.log(del)

// toString Method - Converts and returns anything in an array to a string. DOSENT CHANGE THE ORIGINAL ARRAY
// console.log(marks.toString())
// console.log(marks)

// Concat Method - Joins 2 arrays together. DOSENT CHANGE THE ORIGINAL ARRAY
// let e = items2.concat(items)
// console.log(e)

// Unshift Method - Basically push method but it adds in the start instead of adding it in the end. CHANGES THE ACTUAL ARRAY
// console.log(marks)
// marks.unshift(90)
// console.log(marks)

// Shift Method - Basically Pop method but it deletes in the start instead of deleting in the end. CHANGES THE ACTUAL ARRAY
// console.log(marks)
// marks.shift(20)
// console.log(marks)

// Slice Method - Returns a part of the array. WONT CHANGE ORIGINAL ARRAY
// console.log(marks)
// console.log(marks.slice(1, 4)) // Returns array from index 1 to 3
// console.log(marks.slice(3)) // returns everything after 3

// Splice Method - Changes original array. Basically adding removing or replacing something
// marks.splice(2, 2, 101, 102)

// Adding an element
// marks.splice(20, 0, 101, 102)

// Deleting an element
// marks.splice(3,1)

// Replacing an element
// marks.splice(3,1,101)

// Making it act like slice
// marks.splice(4)
// console.log(marks)

// Practice Question
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]
// a part
// companies.shift()
// b part
// companies.splice(2,1,"Ola")
// c part
companies.push("Amazon")
console.log(companies)


// WRITE THIS IN THE NOTEBOOK