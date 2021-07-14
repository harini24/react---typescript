import classes from './Todo.module.css'
const Todo: React.FC<{ item: string, id: string, removeTodo: (id: string) => void }> = (props) => {
    return <li onClick={() => props.removeTodo(props.id)} className={classes.item}>{props.item}</li>

}

export default Todo