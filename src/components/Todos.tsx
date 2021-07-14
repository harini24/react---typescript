import Todo from '../models/todo'
import Todoitem from './Todo'
import classes from './Todos.module.css'
import { TodoContext } from '../store/todos-context'
import { useContext } from 'react'
const Todos: React.FC = (props) => {

    const todosCtx = useContext(TodoContext)
    return <ul className={classes.todos}>
        {todosCtx.items.map(item => <Todoitem removeTodo={todosCtx.removeTodo} key={item.id} id={item.id} item={item.text} />)}
    </ul>
}
export default Todos