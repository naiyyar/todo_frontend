import { useState, type FormEvent } from "react"
import { useTodos } from "../../store/todo"

const CreateTodo = () => {
    const [todo, setTodo] = useState<String>("")

    const { handleAddTodo } = useTodos()
    
    const handleSubmit = (e:FormEvent<HTMLFormElement> ) => {
        e.preventDefault()
        handleAddTodo(todo)
        setTodo("")
    }

    return (
        <>
            <form onSubmit={handleSubmit} >
                <input type="text" value={todo} onChange={(e) => setTodo(e.target.value) }/>
                <button type="submit">Add</button>
            </form>
        </>
    )
}

export default CreateTodo