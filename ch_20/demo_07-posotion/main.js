const box = document.querySelector(".box");

// Client: content + padding - scrollbar
console.log(box.clientWidth);
console.log(box.clientHeight);

// Offset: content + padding + border + scrollbar
console.log(box.offsetWidth);
console.log(box.offsetHeight);

// Rect: content + padding + border + scrollbar (display)
const rect = box.getBoundingClientRect();
console.log(rect.width);    
console.log(rect.height);
