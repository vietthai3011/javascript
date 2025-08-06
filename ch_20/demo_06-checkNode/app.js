const box1 = document.getElementById("box-1");
const box2 = document.getElementById("box-2");
const item = box2.querySelector(".item");
// console.log(box1.getElementsByClassName("item"));

const h1 = document.createElement("h1");
h1.innerText = "hello";

document.body.appendChild(h1);

console.log(document.body.contains(h1));
