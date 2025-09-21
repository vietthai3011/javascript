"use strict";

const API_URL = "http://localhost:3000/tasks";

let tasks = [];

const taskList = document.querySelector("#task-list");
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");

async function fetchTasks() {
    const res = await fetch(API_URL);
    tasks = await res.json();

    render();
}

async function createTask(task) {
    await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
    });
}

async function editTask(taskId, title) {
    await fetch(API_URL + "/" + taskId, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ title }),
    });
}

async function doneTask(taskId, isComplete) {
    await fetch(API_URL + "/" + taskId, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ completed: isComplete }),
    });
}

async function deleteTask(taskId, title) {
    await fetch(API_URL + "/" + taskId, {
        method: "DELETE",
    });
}

function escapeHTML(html) {
    const div = document.createElement("div");
    div.innerText = html;
    return div.innerHTML;
}

console.log(escapeHTML("<h1>Hello</h1>"));

async function handleTaskActions(e) {
    const taskItem = e.target.closest(".task-item");
    const taskId = taskItem.id;
    // const taskId = taskItem.dataset.id;

    if (!taskItem) return;

    // const taskIndex = +taskItem.getAttribute("data-index");
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    console.log(taskIndex);
    const task = tasks[taskIndex];

    if (e.target.closest(".edit")) {
        let newTitle = prompt("Enter the new task title:", task.title);

        if (!newTitle.trim()) {
            alert("Task title cannot is empty!");
            return;
        }

        if (isDuplicateTask(newTitle, taskId)) {
            alert("Task with this title already exist! Please use a different task title!");
            return;
        }

        await editTask(taskId, newTitle);
    } else if (e.target.closest(".done")) {
        await doneTask(taskId, !task.completed);
    } else if (e.target.closest(".delete")) {
        if (confirm(`Are you sure you want to delete "${task.title}"?`)) await deleteTask(taskId);
    }

    fetchTasks();
}

function isDuplicateTask(value, excludeIndex = -1) {
    return tasks.some(
        (task, index) => task.title.toLowerCase() === value.toLowerCase() && index !== excludeIndex
    );
}

async function addTask(e) {
    e.preventDefault();
    console.log(todoInput.value);
    const value = todoInput.value.trim();

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

    await createTask(newTask);

    todoInput.value = "";

    await fetchTasks();
}

function render() {
    if (!tasks.length) {
        taskList.innerHTML = `<li class="empty-message">No task available.</li>`;
        return;
    }

    const html = tasks
        .map(
            (task) => `
            <li 
                id="${task.id}"
                class="task-item ${task.completed ? "completed" : ""}">
                <span class="task-title">${escapeHTML(task.title)}</span>
                <div class="task-action ${task.completed ? "completed" : ""}" >
                    <button class="task-btn edit">Edit</button>
                    <button class="task-btn done">
                        ${task.completed ? "Mask as undone" : "Mask as done"}
                    </button>
                    <button class="task-btn delete">Delete</button>
                </div>
            </li>
        `
        )
        .join("");

    taskList.innerHTML = html;
}

fetchTasks();
console.log("Script ở global scope đã chạy xong.");

todoForm.addEventListener("submit", addTask);
taskList.addEventListener("click", handleTaskActions);
