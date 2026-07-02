import { useState } from 'react';

function Acordeon({ titulo, children, isOpen = false }) {
    // Estado interno para controlar si está expandido o no
    const [expandido, setExpandido] = useState(isOpen);

    // Función para alternar el estado
    const toggleExpandido = () => {
        setExpandido(!expandido);
    };

    return (
        <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden transition-all duration-300 ">
            {/* Cabecera del acordeón (siempre visible) */}
            <div 
                className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                onClick={toggleExpandido}
            >
                <h3 className="text-lg font-semibold text-[#1e293b]">
                    {titulo}
                </h3>
                <span className="text-2xl text-gray-500 transition-transform duration-300">
                    {expandido ? '▼' : '▶'}
                </span>
            </div>

            {/* Contenido del acordeón (se muestra u oculta según el estado) */}
            {expandido && (
                <div className="p-4 pt-0 border-t border-gray-100 text-gray-700 flex flex-col gap-4">
                    {children}
                </div>
            )}
        </div>
    );
}

export default Acordeon;