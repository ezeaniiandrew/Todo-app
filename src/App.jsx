import { useState } from "react"
import Input from "./Components/Input"
import Todos from "./Components/Todos"
import './App.css';

const INITIAL_TODO = [
    {
      id: crypto.randomUUID(),
      title: "Type your first todo"
    }
  ]

function App() {
  const [todos, setTodos] = useState(INITIAL_TODO)
  
  return (
    <div>
      <h1>Todo App</h1>
      <Input setTodos={setTodos} />
      {/*Passed the setTodos function as a 
      prop to the Todos component*/}
      <Todos todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
