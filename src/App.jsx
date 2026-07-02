import './App.css'
import { useState } from 'react'

import Perfil from '../src/components/Perfil'
import Laboratorio2 from '../laboratorios/laboratorio2'
import Laboratorio3 from '../laboratorios/laboratorio3'

function App() {
  const [laboratorioActivo, setLaboratorioActivo] = useState('lab2');

  const renderLaboratorio = () => {
    switch (laboratorioActivo) {
      case 'lab2':
        return <Laboratorio2 />;
      case 'lab3':
        return <Laboratorio3 />;  
      default:
        return <Laboratorio2 />;
    }
  };
  
  
  return (
    <>
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
        </div>
         


        {renderLaboratorio()}
      </div>
    </>
  )
}

export default App
