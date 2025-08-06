const button = document.querySelector("#button");
const email = document.querySelector("#email");

// button.onclick = function (e) {
//     console.log(e);
// };

button.addEventListener("click", (e) => {
    console.log(e.target);
});

email.onchange = function (e) {
    console.log(e.target.value);
    console.log(e);
};
