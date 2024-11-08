const InputBox = document.querySelector(".todo-input");
const Button = document.querySelector(".todo-add-button");
const list = document.querySelector(".todo-list");

Button.addEventListener('click', () => {
    if (InputBox.value == "") {
        alert("Please enter a task");
    } else {
        let li = document.createElement('li');
        li.innerHTML = InputBox.value;
        list.appendChild(li);
        InputBox.value = ""; 
    }
});

