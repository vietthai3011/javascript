let tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];

const taskList = document.querySelector("#task-list");
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
function escapeHTML(html) {
    const div = document.createElement("div");
    div.innerText = html;
    return div.innerHTML;
}

console.log(escapeHTML("<h1>Hello</h1>"));

function handleTaskActions(e) {
    const taskItem = e.target.closest(".task-item");

    if (!taskItem) return;

    // const taskIndex = +taskItem.getAttribute("data-index");
    const taskIndex = +taskItem.dataset.index;
    const task = tasks[taskIndex];

    if (e.target.closest(".edit")) {
        let newTitle = prompt("Enter the new task title:", task.title);

        if (!newTitle) return;

        newTitle = newTitle.trim();

        if (!newTitle) {
            alert("Task title cannot is empty!");
            return;
        }

        if (isDuplicateTask(newTitle, taskIndex)) {
            alert("Task with this title already exist! Please use a different task title!");
            return;
        }

        task.title = newTitle;
    } else if (e.target.closest(".done")) {
        task.completed = !task.completed;
    } else if (e.target.closest(".delete")) {
        if (confirm(`Are you sure you want to delete "${task.title}"?`)) tasks.splice(taskIndex, 1);
    }

    saveTasks();
    render();
}

function isDuplicateTask(value, excludeIndex = -1) {
    return tasks.some(
        (task, index) => task.title.toLowerCase() === value.toLowerCase() && index !== excludeIndex
    );
}

function addTask(e) {
    e.preventDefault();
    value = todoInput.value.trim();

    if (!value) {
        alert("Please write something!");
        return;
    }

    if (isDuplicateTask(value)) {
        alert("Task with this title already exist! Please use a different task title!");
        return;
    }

    const newTask = {
        title: value,
        completed: false,
    };

    tasks.unshift(newTask);

    todoInput.value = "";

    saveTasks();
    render();
}

function render() {
    if (!tasks.length) {
        taskList.innerHTML = `<li class="empty-message">No task available.</li>`;
        return;
    }

    const html = tasks
        .map(
            (task, index) => `
            <li class="task-item ${task.completed ? "completed" : ""}" data-index="${index}">
                <span class="task-title">${escapeHTML(task.title)}</span>
                <div class="task-action ${task.completed ? "completed" : ""}" >
                    <button class="task-btn edit">Edit</button>
                    <button class="task-btn done">${
                        task.completed ? "Mask as undone" : "Mask as done"
                    }</button>
                    <button class="task-btn delete">Delete</button>
                </div>
            </li>
        `
        )
        .join("");

    taskList.innerHTML = html;
}

render();

todoForm.addEventListener("submit", addTask);
taskList.addEventListener("click", handleTaskActions);
