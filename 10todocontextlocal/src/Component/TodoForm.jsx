import React,{useState} from 'react'
import {useTodo} from '../contexts/TodoContext'

function TodoForm() {

    const [todo , setTodo] = useState("")
    const {addtodo} = useTodo();

    const add = (e)=>{
        e.preventDefault()
        if(!todo) return
        addtodo({todo , completed: false})
        setTodo("")
    }
  return (
    <form onSubmit={add}>
        <input type="text" 
            placeholder='write todo...'
            value={todo}
            onChange={(e)=>setTodo(e.target.value)}
        />
        <button
        type='submit'
        >
            Add
            </button>
    </form>
  )
}

export default TodoForm