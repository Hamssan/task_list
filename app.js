const form = document.querySelector("#task-form");
const AddTaskInput = document.querySelector("#task");
const taskList = document.querySelector(".collection");
const clearTasksBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");

// Add Task
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (AddTaskInput.value === "") {
    alert("Input cannot be empty!");
    return;
  }
  const li = document.createElement("li");
  li.className = "collection-item";

  li.appendChild(document.createTextNode(AddTaskInput.value));

  const link = document.createElement("a");
  link.className = "delete-item secondary-content";

  link.innerHTML = '<i class="fas fa-trash"></i>';

  li.appendChild(link);

  taskList.appendChild(li);
  AddTaskInput.value = "";
});

// Remove Task
taskList.addEventListener("click", (e) => {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
});

// Remove All Tasks
clearTasksBtn.addEventListener("click", () => {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
});

// Filter Tasks
filter.addEventListener("keyup", (e) => {
  const text = e.target.value.toLowerCase();
  const allListItems = document.querySelectorAll(".collection-item");

  allListItems.forEach((task) => {
    const item = task.firstChild.textContent.toLowerCase();
    if (item.indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
});
