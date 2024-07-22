// DOM MANIPULATION

// let heading = document.getElementById("heading") //h1
// console.dir(heading)

// Another tareekaaaaa

// let headings = document.getElementsByClassName("heading") // Returns HTML collection similar to an array
// console.log(headings)

// 

// let div = document.querySelector("div")
// console.dir(div)
// let change = div.innerText = "abcd";
// console.dir(change)

// let h2 = document.querySelector("h2");
// console.dir(h2)

// h2.innerText = h2.innerText + " From apna college students" // Concactination

let divs = document.querySelectorAll(".box")
let idx = 1;

for(div of divs) {
    div.innerHTML = `New Unique Text ${idx}`
    idx++;
    
}