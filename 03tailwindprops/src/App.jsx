import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-blue-600 rounded-md p-3'>vite + React app</h1>
      <Card username = "Ritesh"/>
      <Card username = "Dhiraj"/>
      <Card username = "Suraj"/>
    </>
  )
}

export default App
