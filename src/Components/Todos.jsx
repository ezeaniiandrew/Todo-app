import TodoItem from "./TodoItem"

function Todos({todos, setTodos}){
  
  return (
      <ul>
      {/*Passed the setTodos function to the
      TodoItem Component*/}
        {todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
      </ul>
    )
}

export default Todos