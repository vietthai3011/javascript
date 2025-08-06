const parent = document.querySelector(".parent");

const h1 = document.createElement("h1");
h1.textContent = "Hello h1";

h1.onclick = () => {
    console.log(Math.random());
};

const text = document.createTextNode("Hello");
const comment = document.createComment("Something...");

const title = document.createAttribute("title");
// title.value = "Hello";
// parent.setAttributeNode(title);

// parent.append(h1, comment, textNode, "Hello world");

// parent.insertBefore(text, h1);
// parent.replaceChild(text, h1);

const newH1 = h1.cloneNode(true);

parent.append(h1, newH1);
console.log(newH1);
