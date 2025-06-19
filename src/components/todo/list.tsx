import React from 'react'
import { useTodos } from '../../store/todo'

const ListTodos = () => {
    const { todos, toggleCompletedStatus } = useTodos()

    const filtered_todos = todos;

    function deleteList(id) {

    }
    
    return (
        <div>

            {
                filtered_todos.map((todo) => {
                    return <li key={todo.id}>
                        <input type="checkbox" 
                                id={todo.id} 
                                checked={todo.completed} 
                                onChange={() => toggleCompletedStatus(todo.id)}/>
                        
                        <label htmlFor={todo.id} className={todo.completed && "completed"}>{todo.title}</label>

                        {todo.completed && <button type='button' onClick={deleteList(todo.id)}>Delete</button>}
                    </li>
                })
            }
        
        </div>
    )
    }

export default ListTodos
