import TodoItem from "./TodoItem"

function Todos({todos, setTodos}){
  
  return (
      <ul>
        {todos.map((todo) => <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />)}
      </ul>
    )
}

export default Todos