const todosNode = document.querySelector(".js-todos")
const inputNode = document.querySelector(".js-input")
const btnNode = document.querySelector(".js-btn")
let todos = []

function addTodo(text) {
	const todo = {
		text,
		done: false,
		id: `${Math.random()}`,
	}

	todos.push(todo)
	inputNode.value = ""
}

function deleteTodo(id) {
	todos.forEach(todo => {
		if (todo.id === id) {
			todo.done = true
		}
	})
}

function render() {
	let html = ""

	todos.forEach(todo => {
		if (todo.done) {
			return
		}

		html += `
      <div>
        <p>${todo.text}</p>
        <button data-id="${todo.id}">Сделанно</button>
      </div>

    `
	})

	todosNode.innerHTML = html
}

btnNode.addEventListener("click", () => {
	const text = inputNode.value

	addTodo(text)
	render()
})

todosNode.addEventListener("click", e => {
	if (e.target.tagName !== "BUTTON") {
		return
	}

	const id = e.target.dataset.id

	deleteTodo(id)
	render()
})

render()
