
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
let taskToDeleteIndex = null;

function getFormattedDate() {
    const now = new Date();
    const date = now.toLocaleDateString('uk-UA', { day: '2-digit', month: '2-digit', year: '2-digit' });
    const time = now.toLocaleTimeString('uk-UA', { hour: '2-digit', minute: '2-digit' });
    return `${date}, ${time}`;
}

function addTask(taskText) {
    const task = {
        text: taskText,
        date: getFormattedDate(),
        completed: false
    };

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    renderTasks();
}

function openModal(index) {
    const modal = document.getElementById('modal');
    modal.classList.remove('hidden');
    taskToDeleteIndex = index;
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('hidden');
    taskToDeleteIndex = null;
}

function confirmDeleteTask() {
    if (taskToDeleteIndex !== null) {
        deleteTask(taskToDeleteIndex);
        closeModal();
    }
}

document.getElementById('confirmDelete').addEventListener("click", confirmDeleteTask);
document.getElementById('cancelDelete').addEventListener("click", closeModal);

function deleteTask(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

function updateTask(index, completed) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks[index].completed = completed;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

function renderTasks() {
    taskList.innerHTML = '';

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.classList.add("task-item");

        const taskContent = document.createElement("div");
        taskContent.classList.add("task-content");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("task-checkbox");
        checkbox.checked = task.completed;

        const taskTextElement = document.createElement("div");
        taskTextElement.textContent = task.text;

        const taskInfo = document.createElement("div");
        taskInfo.classList.add("task-info");
        taskInfo.textContent = task.date;

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.textContent = "✖";

        deleteBtn.addEventListener("click", function () {
            openModal(index);
        });

        taskContent.appendChild(checkbox);
        taskContent.appendChild(taskTextElement);

        li.appendChild(taskContent);
        li.appendChild(taskInfo);
        li.appendChild(deleteBtn);

        if (task.completed) {
            taskTextElement.classList.add("completed");
            taskInfo.classList.add("completed");
            checkbox.classList.add("completed-checkbox");
            checkbox.disabled = true;
        }

        checkbox.addEventListener("change", function () {
            updateTask(index, checkbox.checked);
        });

        taskList.appendChild(li);
    });
}

taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            taskInput.value = "";
            addTask(taskText);
        }
    }
});

document.getElementById('showAll').addEventListener("click", function () {
    renderTasks();
});

document.getElementById('showCompleted').addEventListener("click", function () {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const completedTasks = tasks.filter(task => task.completed);
    renderFilteredTasks(completedTasks);
});

document.getElementById('showPending').addEventListener("click", function () {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const pendingTasks = tasks.filter(task => !task.completed);
    renderFilteredTasks(pendingTasks);
});

function renderFilteredTasks(filteredTasks) {
    taskList.innerHTML = '';
    filteredTasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.classList.add("task-item");

        const taskContent = document.createElement("div");
        taskContent.classList.add("task-content");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("task-checkbox");
        checkbox.checked = task.completed;

        const taskTextElement = document.createElement("div");
        taskTextElement.textContent = task.text;

        const taskInfo = document.createElement("div");
        taskInfo.classList.add("task-info");
        taskInfo.textContent = task.date;

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.textContent = "✖";

        deleteBtn.addEventListener("click", function () {
            openModal(index);
        });

        taskContent.appendChild(checkbox);
        taskContent.appendChild(taskTextElement);

        li.appendChild(taskContent);
        li.appendChild(taskInfo);
        li.appendChild(deleteBtn);

        if (task.completed) {
            taskTextElement.classList.add("completed");
            taskInfo.classList.add("completed");
            checkbox.classList.add("completed-checkbox");
            checkbox.disabled = true;
        }

        checkbox.addEventListener("change", function () {
            updateTask(index, checkbox.checked);
        });

        taskList.appendChild(li);
    });
}

renderTasks();
