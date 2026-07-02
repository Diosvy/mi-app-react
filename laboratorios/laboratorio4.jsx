import Acordeon from  '../src/components/Acordeon'
import VisorDocumento from '../src/components/VisorDocumento'
import TemporizadorPomodoro from '../src/components/TemporizadorPomodoro';

import { useState } from 'react';

import ConfiguracionUsuario from '../src/components/ConfiguracionUsuario';

export default function Laboratorio4() {
     return ( 
        <div className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-md p-6 mb-6 w-full border border-blue-200">         
            <h2 className="text-3xl font-bold text-[#1e293b] mb-1">
                Laboratorio 4
            </h2> 
             <div className="ejercicios flex flex-col flex-wrap w-full gap-6 p-2 bg-white rounded-2xl shadow-lg border border-gray-100">
                <Acordeon titulo="Ejercicio 1" isOpen={true}>
                    <div className="w-full flex justify-center items-center p-2">
                        <VisorDocumento />
                    </div>
                    
                </Acordeon>
                <Acordeon titulo="Ejercicio 2">
                    <div className="w-full flex justify-center items-center p-2">
                       <TemporizadorPomodoro />
                    </div>
                </Acordeon>
                <Acordeon titulo="Ejercicio 3"> 
                    <div className="w-full flex justify-center items-center p-2"> 
                        <ConfiguracionUsuario />
                    </div>
                </Acordeon>
             </div>
        </div>
        )
}