import Todo from '../models/todo'
import Todoitem from './Todo'
import classes from './Todos.module.css'
const Todos: React.FC<{ items: Todo[] }> = (props) => {
    return <ul className={classes.todos}>
        {props.items.map(item => <Todoitem key={item.id} item={item.text} />)}
    </ul>
}
export default Todos