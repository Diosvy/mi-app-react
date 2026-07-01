import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={handleClick}>
            count is {count}
          </button>
        </div>
      </div>
    </>
  )
}

export default App
