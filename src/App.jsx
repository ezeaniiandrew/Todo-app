import { useState } from "react"
import Input from "./Components/Input"
import Todos from "./Components/Todos"
import './App.css';
import todoData from "./data/todo-data";

const INITIAL_TODO = [
    {
      title: "Type your first todo"
    }
  ]

function App() {
  const [todos, setTodos] = useState(INITIAL_TODO)
  const [text, setText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    
    setTodos([
        ...todos,
        { title: text }
      ]
    )

    setText("")
  }
  
  return (
    <div className="app">
      <h1>Todo App</h1>
      <Input handleSubmit={handleSubmit} handleChange={(e) => setText(e.target.value)} value={text} />
      <Todos todos={todos} />
    </div>
  )
}

export default App
