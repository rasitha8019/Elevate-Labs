const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") addTask();
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.className = "task-item";

  const span = document.createElement("span");
  span.className = "task-text";
  span.textContent = taskText;

  const actions = document.createElement("div");
  actions.className = "task-actions";

  const checkBtn = document.createElement("button");
  checkBtn.className = "check";
  checkBtn.innerHTML = "✔";
  checkBtn.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete";
  deleteBtn.innerHTML = "🗑";
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  actions.appendChild(checkBtn);
  actions.appendChild(deleteBtn);
  li.appendChild(span);
  li.appendChild(actions);
  taskList.appendChild(li);

  taskInput.value = "";
}
