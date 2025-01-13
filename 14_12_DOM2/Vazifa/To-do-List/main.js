

document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.getElementById("todo-input"); 
    const addBtn = document.getElementById("add-btn");       
    const todoList = document.getElementById("todo-list");  

    addBtn.addEventListener("click", () => {
        const taskText = todoInput.value.trim(); 
        if (taskText !== "") {
            const listItem = document.createElement("li");

            const taskSpan = document.createElement("span");
            taskSpan.textContent = taskText;

            taskSpan.addEventListener("click", () => {
                listItem.classList.toggle("completed"); 
            });

            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "O'chirish";       
            deleteBtn.className = "delete-btn";        

            deleteBtn.addEventListener("click", () => {
                todoList.removeChild(listItem); 
            });

            listItem.appendChild(taskSpan); 
            listItem.appendChild(deleteBtn); 

            todoList.appendChild(listItem);

            todoInput.value = ""; 
        } else {
            alert("Iltimos, vazifa matnini kiriting!");
        }
    });
});
