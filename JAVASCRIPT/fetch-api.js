// Application Programming Interface
const URL = "https://cat-fact.herokuapp.com/facts";
const factpara = document.querySelector("#facts");
const btn = document.querySelector("#button");

let promise = fetch(URL);
console.log(promise);

const getFacts = async () => {
  console.log("Getting Data.......");
  let response = await fetch(URL);
  console.log(response);
  let data = await response.json();
  console.log(data[0].text);
  factpara.innerHTML = data[4].text;
};

btn.addEventListener("click", getFacts);
