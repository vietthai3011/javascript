const button = document.querySelector("#button");

button.addEventListener("click", (e) => {
    console.log("Click 1");
});

button.addEventListener("click", (e) => {
    console.log("Click 2");

    e.stopImmediatePropagation();
});

button.addEventListener("click", (e) => {
    console.log("Click 3");
});
