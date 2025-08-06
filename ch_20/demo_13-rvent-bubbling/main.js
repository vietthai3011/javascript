const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const button = document.querySelector("#button");

window.addEventListener("click", (e) => {
    console.log(e);
});

document.addEventListener("click", (e) => {
    console.log(e);
});

parent.addEventListener("click", (e) => {
    console.log(e);
});

child.addEventListener("click", (e) => {
    console.log(e);
});

button.addEventListener("click", (e) => {
    console.log(e);
});
