// Lấy element
const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

// Lấy dữ liệu từ localStorage (nếu có)
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Render task ra màn hình
function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task.text;

        // Nếu đã hoàn thành
        if (task.completed) {
            li.classList.add("completed");
        }

        // Nút toggle hoàn thành
        li.addEventListener("click", () => {
            tasks[index].completed = !tasks[index].completed;
            saveTasks();
            renderTasks();
        });

        // Nút delete
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.addEventListener("click", (e) => {
            e.stopPropagation(); // tránh xung đột với toggle
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();
        });

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

// Lưu tasks vào localStorage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Add task
addBtn.addEventListener("click", () => {
    const text = taskInput.value.trim();
    if (text !== "") {
        tasks.push({ text, completed: false });
        saveTasks();
        renderTasks();
        taskInput.value = "";
    }
});

// Render lần đầu
renderTasks();
