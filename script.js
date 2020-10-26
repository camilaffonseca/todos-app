const listElement = document.querySelector('#app ul')
const inputElement = document.querySelector('#app input')
const buttonElement = document.querySelector('#app button')

let todos = [
    '1',
    '2',
    '3'
]

const renderTodos = () => {
    listElement.innerHTML = ''

    for (todo of todos) {
        const todoElement = document.createElement('li')
        const todoText = document.createTextNode(todo)

        todoElement.appendChild(todoText)
        listElement.appendChild(todoElement)
    }
}

renderTodos()

const addTodo = () => {
    const todoText = inputElement.value

    todos.push(todoText)

    inputElement.value = ''

    renderTodos()
}

buttonElement.onclick = addTodo
