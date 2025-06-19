import { createContext, useContext, useState, type ReactNode } from "react";

export type TodosProviderProps = {
    children : ReactNode;
}

export type Todo = {
    id: string
    title : string
    completed : boolean
}

export type TodosContext = {
    todos:Todo[];
    handleAddTodo:(id:string) => void;
    toggleCompletedStatus:(id:string) => void;
    deleteList:(id:string) => void;
}

export const todosContext = createContext<TodosContext | null>(null)

export const TodosProvider = ({children}:TodosProviderProps) => {
    const [todos, setTodos] = useState<Todo[]>([])

    const handleAddTodo = (title) => {
        setTodos((prev) => {
            const newTodos:Todo[] = [{
                id: Math.random().toString(36),
                title: title,
                completed: false
            }, ...prev]

            return newTodos;
        })
    }

    // Toggle todo

    const toggleCompletedStatus = (id:string) => {
        setTodos((prev) => {
            const newTodos:Todo[] = prev.map((todo) => {
                if(todo.id == id){
                    return {...todo, completed: !todo.completed }
                }
                return todo;
            }) 

            return newTodos;
        })
    }

    // Delete

    const deleteList = (id:string) => {
        setTodos((prev) => {
            const filtered_todos:Todo[] = prev.filter((list) => list.id != id)

            return filtered_todos
        })
    }

    return <todosContext.Provider value={{todos, handleAddTodo, toggleCompletedStatus, deleteList}}>
        {children}
    </todosContext.Provider>
}



// Consumer

export const useTodos = () => {
    const todosConsumer = useContext(todosContext)

    if(!todosConsumer){
        throw new Error("Something went wrong in useTodos")
    }

    return todosConsumer
}