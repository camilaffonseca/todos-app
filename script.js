const listElement = document.querySelector('#app ul')
const inputElement = document.querySelector('#app input')
const buttonElement = document.querySelector('#app button')

let todos = JSON.parse(localStorage.getItem('todo-list')) || []

const renderTodos = () => {
    listElement.innerHTML = ''

    for (todo of todos) {
        const todoElement = document.createElement('li')
        const todoText = document.createTextNode(todo)

        const linkElement = document.createElement('a')

        linkElement.setAttribute('href', '#')

        position = todos.indexOf(todo)
        linkElement.setAttribute('onclick', `deleteTodo(${position})`)

        const linkText = document.createTextNode('Excluir')

        linkElement.appendChild(linkText)

        todoElement.appendChild(todoText)
        todoElement.appendChild(linkElement)

        listElement.appendChild(todoElement)
    }
}

renderTodos()

const addTodo = () => {
    const todoText = inputElement.value

    todos.push(todoText)

    inputElement.value = ''

    renderTodos()
    saveToStorage()
}

buttonElement.onclick = addTodo

const deleteTodo = (position) => {
    todos.splice(position, 1)

    renderTodos()
    saveToStorage()
}

const saveToStorage = () => {
    localStorage.setItem('todo-list', JSON.stringify(todos))
}
