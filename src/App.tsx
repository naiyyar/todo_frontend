import './App.css'
import CreateTodo from './components/todo/CreateTodo'
import ListTodos from './components/todo/list';

function App() {

  return (
    <>
      <h2> TODO APP </h2>

      <CreateTodo />
      <ListTodos />
    </>
  )
}

export default App
