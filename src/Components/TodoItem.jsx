function TodoItem({todo, setTodos}) {
  
  return (
      <li key={todo.id}>
        <p>{todo.title}</p>
        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
      </li>
    )
}

export default TodoItem