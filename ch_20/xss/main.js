const submit = document.querySelector("#submit");
const input = document.querySelector("#chat-input");
const messages = document.querySelector("#messages");

submit.onclick = function () {
    const message = document.createElement("li");
    message.textContent = input.value;

    messages.appendChild(message);

    input.value = "";
};
