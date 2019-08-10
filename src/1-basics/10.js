let todoForm = document.getElementById('todo-form');
let todoField = document.getElementById('todo-field');
let todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    createItem(todoField.value);
})

function createItem(item) {
    let itemHTML = `<li>${item} <button onClick="deleteItem(this)">Delete</button></li>`
    todoList.insertAdjacentHTML('beforeend', itemHTML);
    todoField.value = '';
    todoField.focus();
}

function deleteItem(item) {
    item.parentElement.remove();
}