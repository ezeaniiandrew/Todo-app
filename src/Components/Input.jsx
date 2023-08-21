function Input({handleSubmit, handleChange, value}) {
  
  return (
    <form onSubmit={handleSubmit}>
      <input value={value} placeholder="Type your Todo" onChange={handleChange} />
    </form>
  )
}

export default Input;