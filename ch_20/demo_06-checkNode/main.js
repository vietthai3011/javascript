const h1 = document.createElement("h1");
const text = document.createTextNode("Text");
const comment = document.createComment("Comment");
const title = document.createAttribute("title");
const fragment = document.createDocumentFragment();

//

console.log(h1.nodeName);
console.log(fragment.nodeType === Node.DOCUMENT_FRAGMENT_NODE);
