let form = document.getElementById("todo-form");
let input = document.getElementById("todo-input");
let items = document.getElementById("todo-items");

let todoList = [];

function renderTodoList() {
    items.innerHTML = "";

    for (let i = 0; i < todoList.length; i++) {
        let item = document.createElement("li");
        item.innerText = todoList[i].text;

        if (todoList[i].completed) {
            item.classList.add("completed");
        }

        item.addEventListener("click", function() {
            todoList[i].completed = !todoList[i].completed;
            renderTodoList();
        });

        items.appendChild(item);
    }
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let newTodo = {
        text: input.value,
        completed: false
    };

    todoList.push(newTodo);
    input.value = "";
    renderTodoList();
});

renderTodoList();
