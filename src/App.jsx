import './App.css'
import { useState } from 'react'

import Perfil from '../src/components/Perfil'
import Laboratorio2 from '../laboratorios/laboratorio2'
import Laboratorio3 from '../laboratorios/laboratorio3'
import Laboratorio4 from '../laboratorios/laboratorio4'
import Laboratorio5 from '../laboratorios/laboratorio5'
import NoEncontrada from '../src/pages/NoEncontrada'


import { NotasProvider, useNotas } from './context/NotasContext';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Ejercicio2 from '../src/pages/Ejercicio2'





function App() {
  const [laboratorioActivo, setLaboratorioActivo] = useState('lab2');

  const renderLaboratorio = () => {
    switch (laboratorioActivo) {
      case 'lab2':
        return <Laboratorio2 />;
      case 'lab3':
        return <Laboratorio3 />; 
      case 'lab4':
        return <Laboratorio4 />;
      case 'lab5':
        return <Laboratorio5 />;    
      default:
        return <Laboratorio2 />;
    }
  };

  function AppContent() {
    return (
      <div className="flex flex-col items-center min-h-screen bg-[#f0f4f8] px-2">
        
        <h1 className="text-4xl md:text-6xl p-2 font-extrabold text-[#1e293b] text-center">
          React en Web Avanzada 
        </h1>
        <span className="text-blue-600 text-2xl font-extrabold mb-2">Diosvany Lopez Acosta</span >
       

        {/* TABS */}
        <div className="flex flex-wrap justify-center gap-1 mb-6 w-full max-w-2xl bg-white rounded-2xl shadow-md p-1 border border-gray-200">
          
          <button
            onClick={() => setLaboratorioActivo('lab2')}
            className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              laboratorioActivo === 'lab2'
                ? 'bg-[#1e293b] text-white shadow-md'
                : 'text-[#1e293b] hover:bg-gray-100'
            }`}
          >
            Laboratorio 2
          </button>

          <button
            onClick={() => setLaboratorioActivo('lab3')}
            className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              laboratorioActivo === 'lab3'
                ? 'bg-[#1e293b] text-white shadow-md'
                : 'text-[#1e293b] hover:bg-gray-100'
            }`}
          >
            Laboratorio 3
          </button>

          <button
            onClick={() => setLaboratorioActivo('lab4')}
            className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              laboratorioActivo === 'lab4'
                ? 'bg-[#1e293b] text-white shadow-md'
                : 'text-[#1e293b] hover:bg-gray-100'
            }`}
          >
            Laboratorio 4
          </button>

          <button
            onClick={() => setLaboratorioActivo('lab5')}
            className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              laboratorioActivo === 'lab5'
                ? 'bg-[#1e293b] text-white shadow-md'
                : 'text-[#1e293b] hover:bg-gray-100'
            }`}
          >
            Laboratorio 5
          </button>
        </div>
         


        {renderLaboratorio()}
      </div>
    )
  }
  
  
  return (
    <NotasProvider>
      {/* ✅ NUEVO: BrowserRouter envuelve SOLO la ruta de Ejercicio2 */}
      <BrowserRouter>
        <Routes>
          {/* Ruta para Ejercicio2 (se abre en nueva pestaña) */}
          <Route path="/ejercicio2/*" element={<Ejercicio2 />} />
          
          {/* Ruta para todo lo demás (los tabs) */}
          <Route index element={<AppContent />} />
          <Route path="/*" element={<NoEncontrada link={"/"}/>} />
        </Routes>
      </BrowserRouter>
    </NotasProvider>
  )

  


}

export default App
