const tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];

const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#task-list");
const todoInput = document.querySelector("#todo-input");

function escapeHTML(html) {
    const div = document.createElement("div");
    div.innerText = html;

    return div.innerHTML;
}

function saveTask() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function isDuplicate(value, excludeIndex = 1) {
    return tasks.some(
        (task, index) => task.title.toLowerCase() === value.toLowerCase() && index !== excludeIndex
    );
}

function addTask(e) {
    e.preventDefault();

    let value = todoInput.value.trim();

    if (!value) {
        alert("No empty!");
        return;
    }

    if (isDuplicate(value)) {
        alert("Duplicate task");
        return;
    }

    const newTask = {
        title: value,
        completed: false,
    };

    todoInput.value = "";

    tasks.unshift(newTask);

    saveTask();
    render();
}

function handleTaskActions(e) {
    const task = e.target.closest(".task-item");
    if (!task) return;

    const taskIndex = task.dataset.index;
    const taskItem = tasks[taskIndex];

    if (e.target.closest(".edit")) {
        let newTitle = prompt("Enter new task title:", taskItem.title);

        if (!newTitle) return;

        newTitle = newTitle.trim();

        if (!newTitle) {
            alert("Not empty");
            return;
        }

        if (isDuplicateTask(newTitle, taskIndex)) {
            alert("Task with this title already exist! Please use a different task title!");
            return;
        }

        taskItem.title = newTitle;
    } else if (e.target.closest(".done")) {
        taskItem.completed = !taskItem.completed;
    } else if (e.target.closest(".delete")) {
        tasks.splice(taskIndex, 1);
    }

    saveTask();
    render();
}

function render() {
    if (!tasks.length) {
        todoList.innerHTML = `<p class="empty-message">No task available!</p>`;
        return;
    }

    const html = tasks
        .map(
            (task, index) => `
            <li class="task-item ${task.completed ? "completed" : ""}" data-index="${index}">
                <span class="task-title">${escapeHTML(task.title)}</span>
                <div class="task-action">
                    <button class="task-btn edit">Edit</button>
                    <button class="task-btn done">${
                        task.completed ? "Mark as undone" : "Mark as done"
                    }</button>
                    <button class="task-btn delete">Delete</button>
                </div>
            </li>
        `
        )
        .join("");

    todoList.innerHTML = html;
}

todoForm.addEventListener("submit", addTask);
todoList.addEventListener("click", handleTaskActions);

render();
