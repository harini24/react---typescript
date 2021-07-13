import classes from './Todo.module.css'
const Todo: React.FC<{ item: string }> = (props) => {
    return <li className={classes.item}>{props.item}</li>

}

export default Todo