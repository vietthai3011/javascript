const button = document.querySelector("#button");

// button.onclick = function () {
//     console.log("Click 1");
// };

// const handle = () => {
//     console.log("Click 1");
// };

// button.addEventListener("click", handle);
// button.removeEventListener("click", handle);

// button.addEventListener("click", () => {
//     console.log("Click 2");
// });

// button.addEventListener("click", () => {
//     console.log("Click 3");
// });

const email = document.querySelector("#email");

email.oninput = function () {
    console.log(email.value);
};
