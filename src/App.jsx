import './App.css'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <div>
        <h1>React en Web Avanzada</h1>
        
      </div>
    </>
  )
}

export default App
