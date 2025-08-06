const button = document.querySelector("#button");
const email = document.querySelector("#email");

button.onclick = function (e) {
    console.log(this);
};

email.oninput = function () {
    console.log(this.value);
};
