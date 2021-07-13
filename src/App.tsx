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
  }
  return (
    <div className="App">
      <NewTodo addTodo={addNewTodo} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
