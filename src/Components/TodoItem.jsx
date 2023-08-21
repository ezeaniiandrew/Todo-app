function TodoItem({title}) {
  
  return (
      <li>
        <p>{title}</p>
        <button>Delete</button>
      </li>
    )
}

export default TodoItem