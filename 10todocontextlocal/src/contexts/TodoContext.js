import {createContext , useContext} from 'react'

export const TodoContext = createContext({
    todos : [
        {
            id : 1,
            todo : "todo message",
            completed : false,
        }
    ],
    addtodo : (todo)=>{},
    updatetodo : (id ,todo)=>{},
    deletetodo : (id)=>{},
    togglecomplete : (id)=>{}
})


export  function useTodo(){
    return useContext(TodoContext);
}
export const Todoprovider = TodoContext.Provider;

