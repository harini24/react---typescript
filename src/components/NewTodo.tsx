import React from "react"
import { useContext } from "react"
import { useRef } from "react"
import { TodoContext } from "../store/todos-context"
import classes from './NewTodo.module.css'

const NewTodo: React.FC = () => {
    const todoInputRef = useRef<HTMLInputElement>(null)
    const todosCtx = useContext(TodoContext)
    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault()
        const enteredText = todoInputRef.current!.value
        // const enteredText = todoInputRef.current?.value
        if (enteredText.trim().length === 0) {
            return
        }
        console.log("add")
        todosCtx.addTodo(enteredText)
    }
    return <form className={classes.form} onSubmit={submitHandler}>
        <label htmlFor="text">Todo Text</label>
        <input type="text" id="text" ref={todoInputRef} />
        <button>Add Todo</button>
    </form>
}

export default NewTodo