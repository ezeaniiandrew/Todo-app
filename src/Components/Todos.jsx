import TodoItem from "./TodoItem"

function Todos({todos}){
  console.log(todos)
  return (
      <ul>
        {todos.map(todo => <TodoItem key={todo.title} title={todo.title} />)}
      </ul>
    )
}

export default Todos