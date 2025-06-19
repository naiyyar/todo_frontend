import { createContext, useContext, useState, type ReactNode } from "react";

export type TodosProviderProps = {
    children : ReactNode;
}

export type Todo = {
    title : string
    completed : boolean
}

export type TodosContext = {
    todos:Todo[];
    handleAddTodo:(title:string) => void;
}

export const todosContext = createContext<TodosContext | null>(null)

export const TodosProvider = ({children}:TodosProviderProps) => {
    const [todos, setTodos] = useState<Todo[]>([])

    const handleAddTodo = (title) => {
        setTodos((prev) => {
            const newTodos:Todo[] = [{
                title: title,
                completed: false
            }, ...prev]

            return newTodos;
        })
    }

    return <todosContext value={{todos, handleAddTodo}}>
        {children}
    </todosContext>
}

// Consumer

export const useTodos = () => {
    const todosConsumer = useContext(todosContext)

    if(!todosConsumer){
        //throw new Error("Something went wrong in useTodos")
    }

    return todosConsumer
}