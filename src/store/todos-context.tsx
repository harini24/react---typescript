import React, { useState } from "react";
import Todo from "../models/todo";


type TodosContextObj = {
    items: Todo[],
    addTodo: (text: string) => void,
    removeTodo: (id: string) => void
}


export const TodoContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: (text: string) => { },
    removeTodo: (id: string) => { }
})


const TodosContextProvider: React.FC = props => {

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


    const contextVal: TodosContextObj = {
        items: todos,
        addTodo: addNewTodo,
        removeTodo: removeTodo
    }

    return <TodoContext.Provider value={contextVal}>{props.children}</TodoContext.Provider>
}

export default TodosContextProvider