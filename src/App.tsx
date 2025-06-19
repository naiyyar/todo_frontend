import './App.css'
import Navbar from './components/navbar';
import CreateTodo from './components/todo/CreateTodo'
import ListTodos from './components/todo/list';

function App() {

  return (
    <>
      <h2> TODO APP </h2>
      <Navbar />
      <CreateTodo />
      <ListTodos />
    </>
  )
}

export default App
