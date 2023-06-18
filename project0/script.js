const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
const listOfTodos = document.getElementsByClassName('todo-container')
let i = 0
function addToDoToList() {
  const todo = document.createElement('li')
  const todoText = document.createElement('span')
  const todoCheckbox = document.createElement('input')
  const todoDelete = document.createElement('button')
  i = listOfTodos.length + 1
  todoText.innerHTML = `Todo ${i} `
  todoCheckbox.type = 'checkbox'
  todoDelete.innerHTML = 'Delete'
  
  todo.id = 'todo' + i
  todoDelete.id = 'todo-delete' + i

  todo.className = classNames.TODO_ITEM
  todoCheckbox.className = classNames.TODO_CHECKBOX
  todoText.className = classNames.TODO_TEXT
  todoDelete.className = classNames.TODO_DELETE


  todoDelete.onclick = deleteTodoItemById.bind(null, todo.id)
  todoCheckbox.onclick = checkToDoItem


  todo.appendChild(todoCheckbox)
  todo.appendChild(todoText)
  todo.appendChild(todoDelete)

  list.appendChild(todo)
}

function checkToDoItem() {
  
  const todoCheckbox = document.getElementsByClassName('todo-checkbox')
  // filter out all the items that have checked is true from the todoCheckbox array
  const checkedItems = Array.from(todoCheckbox).filter(item => item.checked === true)

  // iterate through all the items in checkedItems and update the todo item associated with it to put a line through the text and disable the button and mute th text
  checkedItems.forEach(item => {
    const todoItem = item.parentElement
    const todoText = todoItem.getElementsByClassName('todo-text')[0]
    const todoDelete = todoItem.getElementsByClassName('todo-delete')[0]
    todoText.style.textDecoration = 'line-through'
    todoText.style.color = 'grey'
    todoDelete.disabled = true
  })

  // filter out all the items that have checked is false from the todoCheckbox array
  const uncheckedItems = Array.from(todoCheckbox).filter(item => item.checked === false)

  // iterate through all the items in uncheckedItems and update the todo item associated with it to remove the line through the text and enable the button and make the text normal
  uncheckedItems.forEach(item => {
    const todoItem = item.parentElement
    const todoText = todoItem.getElementsByClassName('todo-text')[0]
    const todoDelete = todoItem.getElementsByClassName('todo-delete')[0]
    todoText.style.textDecoration = 'none'
    todoText.style.color = 'black'
    todoDelete.disabled = false
  })

  uncheckedCountSpan.innerHTML = uncheckedItems.length
  

}

function deleteTodoItemById(id){
  const todo = document.getElementById('todo-list')
  const todoItem = document.getElementById(id)
  todo.removeChild(todoItem)
  itemCountSpan.innerHTML = parseInt(itemCountSpan.innerHTML) - 1
  uncheckedCountSpan.innerHTML = parseInt(uncheckedCountSpan.innerHTML) - 1
}

function deleteToDoItem() {
  const todo = document.getElementById('todo-list')
  const todoItem = document.getElementsByClassName('todo-container')
  todo.removeChild(todoItem[0])
  itemCountSpan.innerHTML = parseInt(itemCountSpan.innerHTML) - 1
  uncheckedCountSpan.innerHTML = parseInt(uncheckedCountSpan.innerHTML) - 1
}

function newTodo() {
  addToDoToList()
  itemCountSpan.innerHTML = parseInt(itemCountSpan.innerHTML) + 1
  uncheckedCountSpan.innerHTML = parseInt(uncheckedCountSpan.innerHTML) + 1
}
