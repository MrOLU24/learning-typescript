"use strict";
const taskInput = document.getElementById("task");
const taskButton = document.getElementById("add");
taskButton === null || taskButton === void 0 ? void 0 : taskButton.addEventListener("click", (e) => {
    e.preventDefault();
    const getinput = taskInput.value;
    console.log(getinput);
});
