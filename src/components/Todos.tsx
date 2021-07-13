import Todo from '../models/todo'
import Todoitem from './Todo'
const Todos: React.FC<{ items: Todo[] }> = (props) => {
    return <ul>
        {props.items.map(item => <Todoitem key={item.id} item={item.text} />)}
    </ul>
}
export default Todos