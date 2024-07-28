// button = document.querySelector(".Button1")

// button.onclick = (r) => {
//     console.log("Button was clicked")
//     console.log(r)
// }

let button = document.querySelector(".Button1")

// button.onclick = (e) => {
//    let btn = document.querySelector("body")
//    btn.style.backgroundColor = "black"

// }

// DUUSRA TAREEKAAAA
// BETTER TAREEKAAAA

let mode = "light";

button.addEventListener("click", () => {
    if (mode === "light") {
        mode = "dark"
       let body = document.querySelector("body")
       body.style.backgroundColor = "Black" 
       button.style.backgroundColor = "Black"
       button.style.color = "White"
    } else {
        mode = "light"
        let body = document.querySelector("body")
        body.style.backgroundColor = "White"
        button.style.backgroundColor = "White"
       button.style.color = "Black"
    }

    console.log(mode)
})