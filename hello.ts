const taskInput = document.getElementById("task") as HTMLInputElement;
const taskButton = document.getElementById("add") as HTMLButtonElement;

taskButton?.addEventListener("click", (e) => {
  e.preventDefault();
  const getinput = taskInput.value;
  console.log(getinput);
});
