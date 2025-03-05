const taskInput = document.getElementById("task") as HTMLInputElement | null;
const taskButton = document.getElementById("add") as HTMLButtonElement | null;

if (taskInput && taskButton) {
  taskButton.addEventListener("click", (e) => {
    e.preventDefault();
    
    const getinput = taskInput.value;
    console.log(getinput);
  });
} else {
  console.error("Task input or button not found");
}