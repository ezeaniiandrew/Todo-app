function TodoItem({todo}) {
  
  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter(todo => id !== todo.id))
  }
  
  return (
      <li>
        <p>{todo.title}</p>
        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
      </li>
    )
}

export default TodoItem