const links = document.querySelectorAll("a");

console.log(links);

links.forEach((link) => {
    link.addEventListener("click", (e) => {
        if (!e.target.href.statsWith("https://google.com")) {
            e.preventDefault();
            window.open(e.target.href);
        }
    });
});

// const form = document.querySelector("#form");

// form.onsubmit = (e) => {
//     e.preventDefault();
// };

// const add = document.querySelector("#add");
// const input = document.querySelector("#input");

// add.addEventListener("click", () => {
//     console.log("Clicked");

//     input.value = "";
// });

// add.addEventListener("mousedown", (e) => {
//     e.preventDefault();
// });
