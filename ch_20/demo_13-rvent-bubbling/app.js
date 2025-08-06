const todoInput = document.querySelector("#todo-input");
const addTodo = document.querySelector("#add-todo");
const listTodo = document.querySelector("#list-todo");

listTodo.onclick = function (e) {
    console.log(e.target);
};

addTodo.addEventListener("click", () => {
    const value = todoInput.value;

    const li = document.createElement("li");
    li.style.cursor = "pointer";
    li.textContent = value;

    listTodo.appendChild(li);

    todoInput.value = "";
});
