const box = document.querySelector(".box");

console.log(box.offsetTop);
console.log(box.offsetLeft);

const rect = box.getBoundingClientRect();
console.log(rect);
