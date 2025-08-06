const box = document.querySelector("#box");
const heading = document.querySelector("#heading");

//Node
const text = document.createTextNode("Text");
const comment = document.createComment("Comment");
const p = document.createElement("p");
p.textContent = "Something...";

const fragment = document.createDocumentFragment();

fragment.append(p, text, comment);

console.log(text.parentElement);
