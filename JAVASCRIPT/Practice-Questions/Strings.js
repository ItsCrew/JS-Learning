// Strings
// let str = "Aryan";
// console.log(str[0]);

//Tempelate Literal

// let bj = {
//     item: "teri maa",
//     price: 6000,
// };

// let output = `Kya chaaiye? ${bj.item}. kitne me? ${bj.price}`
// console.log(output)

// let str = `this is a temp lit ${1+2+3}`
// console.log(str)

// Escape Charachter
// console.log("Aryan\nChanana")

// String Methods/Functions

//slicing
// let str = "aryan chanana"
// console.log(str.slice(2,))

//Concatination - Basically Joining two strings together
// let str = "Aryan"
// let str2 = " Chanana"
// console.log(str.concat(str2))
// or
// let res = str.concat(str2);
// console.log(res)
// or
// let res = str + str2;
// console.log(res)

//Replacing Method - Bascially Search and replace
// let str = "Hellololololo"
// console.log(str.replace("lo","p"))
// There is also an replace all function for replacing everything matching with the word u are searching for
// console.log(str.replaceAll("lo","p"))

// Charachter at method - Basically finding whats the word at a particular index
// let str = "Aryan Chanana"
// console.log(str.charAt(3));


// Practice Questions
// Q
let realname = prompt("Enter your full name");
let usrname = "@".concat(realname).concat(realname.length);
console.log(`Your Username is ${usrname}`)