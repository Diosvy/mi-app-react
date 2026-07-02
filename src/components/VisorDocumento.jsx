import { useState, useEffect } from 'react';
import BotonAccion from './BotonAccion';

function VisorDocumento() {
    // Estado para el contador
    const [contador, setContador] = useState(0);

    // Efecto para sincronizar el título de la pestaña
    useEffect(() => {
        // Actualizar el título con el valor actual del contador
        document.title = `Contador: ${contador} - Mi App`;
        console.log(`Título actualizado: Contador: ${contador} - Mi App`);

        // Función de limpieza: se ejecuta cuando el componente se desmonta
        return () => {
            document.title = 'Mi App';
            console.log('Componente desmontado - Título restaurado a "Mi App"');
        };
    }, [contador]); // Se ejecuta cada vez que cambia el contador

    // Funciones para modificar el contador
    const incrementar = () => {
        setContador(prev => prev + 1);
    };

    const decrementar = () => {
        setContador(prev => prev - 1);
    };

    return (
        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 w-full max-w-md border border-gray-200">
            <h3 className="text-2xl font-bold text-[#1e293b] mb-6 text-center">
                📄 Visor de Documento
            </h3>

            <div className="text-center mb-6">
                <p className="text-sm text-gray-500 mb-2">Valor actual del contador</p>
                <div className="text-6xl font-extrabold text-[#1e293b] py-4 bg-gray-50 rounded-xl border border-gray-100">
                    {contador}
                </div>
                <p className="text-xs text-gray-400 mt-2">
                    📌 Revisa el título de la pestaña del navegador
                </p>
            </div>

            {/* Botones de control */}
            <div className="grid grid-cols-2 gap-3 mt-4">
                <BotonAccion
                    texto="➖ Decrementar"
                    variante="secundario"
                    onClick={decrementar}
                    disabled={contador === 0}
                />
                <BotonAccion
                    texto="➕ Incrementar"
                    variante="primario"
                    onClick={incrementar}
                />
            </div>
        </div>
    );
}

export default VisorDocumento;