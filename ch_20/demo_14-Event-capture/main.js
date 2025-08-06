const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const button = document.querySelector("#button");

parent.addEventListener(
    "click",
    (e) => {
        console.log("capture parent");
        e.stopPropagation();
    },
    { capture: true }
);

button.addEventListener("click", () => {
    console.log("buble");
});
