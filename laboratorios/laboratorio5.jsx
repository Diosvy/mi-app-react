import Acordeon from '../src/components/Acordeon';
import PruebaNotas from '../src/components/PruebaNotas';
import Layout  from '../src/components/Layout';
import { useNavigate } from 'react-router-dom';

export default function Laboratorio5() {
    const navigate = useNavigate();
    const abrirEjercicio2 = () => {
        // Navega dentro de la misma pestaña
        navigate('/ejercicio2/');
    };

    return (
        <div className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-md p-6 mb-6 w-full border border-blue-200">
            <h2 className="text-3xl font-bold text-[#1e293b] mb-1">
                Laboratorio 5
            </h2>
            <div className="ejercicios flex flex-col flex-wrap w-full gap-6 p-2 bg-white rounded-2xl shadow-lg border border-gray-100">
                <Acordeon titulo="Ejercicio 1" isOpen={true}>
                    <div className="w-full flex justify-center items-center p-2">
                        <PruebaNotas />
                    </div>
                </Acordeon>
                <Acordeon titulo="Ejercicio 2" isOpen={true}>
                    <div className="w-full flex justify-center items-center p-4">
                        <button
                            onClick={abrirEjercicio2}
                            className="px-8 py-4 bg-[#1e293b] text-white font-bold rounded-xl"
                        >
                            📒 Abrir Ejercicio 2
                        </button>
                    </div>
                </Acordeon>
            </div>
        </div>
    );
}