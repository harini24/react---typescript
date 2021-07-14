import React from 'react';
import { useState } from 'react';
import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo'
function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const addNewTodo = (text: string) => {
    const newTodo = new Todo(text)

    setTodos((prev) => {
      return prev.concat(newTodo)
    })
    console.log(todos)
  }

  const removeTodo = (id: string) => {
    setTodos((prev) => {
      return prev.filter(todo => todo.id != id)
    })
    console.log(todos)
  }
  return (
    <div className="App">
      <NewTodo addTodo={addNewTodo} />
      <Todos items={todos} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
