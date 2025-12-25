import { useState, useEffect } from 'react'
import './App.css'
import { Todoprovider } from './contexts'
import { TodoForm } from './Component'
import {TodoItem} from './Component'
function App() {
  const [todos , setTodos] = useState([])

  const addtodo = (todo)=>{
      setTodos((prev)=>[{id : Date.now() , ...todo}, ...prev,])
  }

  const updatetodo = (id ,todo)=>{
    setTodos((prev)=>(prev.map((prevTodo)=>{prevTodo.id === id? todo : prevTodo})))
  }

  const deletetodo = (id)=>{
      setTodos((prev)=>(prev.filter((todo)=>{todo.id !== id})))
  }

  const togglecomplete = (id)=>{
    setTodos((prev)=>(prev.map((todo)=>{todo.id === id ? {...todo , completed : !todo.completed}:todo})))
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length > 0){
        setTodos("todos")
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos" , JSON.stringify(todos))
  },[todos])

  return (
    <>
      <Todoprovider value={{todos, addtodo,updatetodo,deletetodo,togglecomplete}}>
        <TodoForm>
          {
            todos.map((todo)=>{
              <div key={todo.id}>
                <TodoItem todo = {todo}/>
              </div>
            })
          }
        </TodoForm>
      </Todoprovider>
    </>
  )
}

export default App
