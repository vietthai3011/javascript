const box = document.querySelector("#box");
const heading = document.querySelector("#heading");

const p = document.createElement("p");
p.textContent = "Text...";

const text = document.createTextNode("Hello");
const comment = document.createComment("Something...");

const title = document.createAttribute("title");

//
const container = document.createDocumentFragment();

container.append(text, comment, p);
box.insertBefore(container, heading);
