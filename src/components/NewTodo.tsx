import React from "react"
import { useRef } from "react"

const NewTodo: React.FC<{}> = (props) => {
    const todoInputRef = useRef<HTMLInputElement>(null)
    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault()
        // const enteredText = todoInputRef.current!.value
        const enteredText = todoInputRef.current?.value
        if (enteredText?.trim().length === 0) {
            return
        }
    }
    return <form onSubmit={submitHandler}>
        <label htmlFor="text">Todo Text</label>
        <input type="text" id="text" ref={todoInputRef} />
        <button>Add Todo</button>
    </form>
}

export default NewTodo