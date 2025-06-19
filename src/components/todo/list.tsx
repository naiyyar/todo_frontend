import { useSearchParams } from 'react-router-dom';
import { useTodos } from '../../store/todo'

const ListTodos = () => {
    const { todos, toggleCompletedStatus, deleteList } = useTodos()

    const [searchParams] = useSearchParams()
    const searchTerm:string = searchParams.get("todos")
    let filtered_todos = todos;

    if(searchTerm == 'active'){
        filtered_todos = filtered_todos.filter((todo)=> !todo.completed)
    }

    if(searchTerm == 'completed'){
        filtered_todos = filtered_todos.filter((todo)=> todo.completed)
    }

    
    return (
        <ul className="todos">
            {
                filtered_todos.map((todo) => {
                    return <li key={todo.id}>
                        <input type="checkbox" 
                                id={todo.id} 
                                checked={todo.completed} 
                                onChange={() => toggleCompletedStatus(todo.id)}/>
                        
                        <label htmlFor={todo.id} className={todo.completed && "completed"}>{todo.title}</label>

                        {todo.completed && <button type="button" onClick={() => deleteList(todo.id)}>Delete</button>}
                    </li>
                })
            }
        
        </ul>
    )
}

export default ListTodos;
