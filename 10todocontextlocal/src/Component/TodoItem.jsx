import React from 'react'
import {useState} from 'react'
import {useTodo} from '../contexts/TodoContext'


function TodoItem({todo}) {
    const [isTodoEditable , setIsTodoEditable] = useState('false')
    conat [todoMsg , setTodoMessage] = useState(todo.todo)

    const [updatetodo,deletetodo,togglecomplete] = useTodo();

    const editTodo = ()=>{
        updatetodo(todo.id , {...todo , todo: todo.Msg})
        setIsTodoEditable(false)
    }

    const togglecompleted = ()=>{
        togglecomplete(todo.id)
    }

  return (
    <div
    className={`${todo.complted ? "bg-red" : "bg-green"}`}
    >
        <input type="checkbox" 
        className='cursor-pointer'
        checked={todo.completed}
        onChange={togglecompleted}
        />

        <input type="text"
        value={todoMsg}
        onChange={(e)=>setTodoMessage(e.target.value)}
        readOnly={!isTodoEditable}
        />
        <button
        onClick={()=>{
            if(todo.completed) return
            if(isTodoEditable){
                editTodo()
            }else{
                setIsTodoEditable((prev)=>!prev)
            }
        }}
        disabled={todo.completed}
        >{isTodoEditable ? "📒": "✏️" }</button>

        <button
        onClick={()=>deletetodo(todo.id)}
        >❌</button>
    </div>
  )
}

export default TodoItem