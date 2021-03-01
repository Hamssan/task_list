const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const taskCollection = document.querySelector(".collection");

form.addEventListener("submit", (e) => {
  AddTask();
  e.preventDefault();
});

function AddTask() {
  if (taskInput.value === "") {
    alert("Input cannot be empty!");
    return;
  }

  const li = document.createElement("li");
  li.className = "collection-item";

  li.appendChild(document.createTextNode(taskInput.value));

  const link = document.createElement("a");
  link.className = "delete-item secondary-content";

  link.innerHTML = '<i class="fas fa-trash"></i>';

  li.appendChild(link);

  taskCollection.appendChild(li);
  taskInput.value = "";
}
