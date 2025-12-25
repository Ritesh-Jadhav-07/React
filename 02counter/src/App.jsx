import { useState } from 'react'



function App() {
  const [counter , setCounter] = useState(15);

  const addCounter = ()=>{
    setCounter(c=> c+1);
    setCounter(c=> c+2)
    
  }

  const removeCounter = ()=>{
    setCounter(counter-1);
  }

  return (
    <>
      <h1>Here is the counter {counter}</h1>
      <button onClick={addCounter}>add value</button> {" "}
      <button onClick={removeCounter}>remove value</button>
    </>
  )
}

export default App
