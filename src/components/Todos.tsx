import Todo from '../models/todo'
import Todoitem from './Todo'
import classes from './Todos.module.css'
const Todos: React.FC<{ items: Todo[], removeTodo: (id: string) => void }> = (props) => {
    return <ul className={classes.todos}>
        {props.items.map(item => <Todoitem removeTodo={props.removeTodo} key={item.id} id={item.id} item={item.text} />)}
    </ul>
}
export default Todos