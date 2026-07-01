import './App.css'
import { useState } from 'react'

import Perfil from '../src/components/Perfil'
import Laboratorio2 from '../laboratorios/laboratorio2'

function App() {
  
  return (
    <>
      <div className="flex flex-col items-center min-h-screen bg-[#f0f4f8] px-2">
        <h1 className="text-4xl md:text-6xl p-4 font-extrabold text-[#1e293b] text-center">
          React en Web Avanzada
        </h1>
        <h2 className="text-2xl md:text-4xl p-4 font-bold text-[#1e293b] text-center">
          Diosvany Lopez Acosta
        </h2>
        <Laboratorio2 />
      </div>
    </>
  )
}

export default App
