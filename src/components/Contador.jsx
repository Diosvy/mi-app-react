import { useState } from 'react';
import BotonAccion from './BotonAccion';
import Alerta from './Alerta';

function Contador() {
    const [valor, setValor] = useState(0);

    // Funciones para actualizar el contador (usando forma funcional)
    const incrementar = () => {
        setValor(prev => prev + 1);
    };

    const decrementar = () => {
        setValor(prev => prev - 1);
    };

    const incrementarCinco = () => {
        setValor(prev => prev + 5);
    };

    const reiniciar = () => {
        setValor(0);
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md w-full border border-gray-200">
            <h3 className="text-2xl font-bold text-[#1e293b] text-center mb-4">
                🔢 Contador
            </h3>

            {/* Valor actual */}
            <div className="text-6xl font-extrabold text-center text-[#1e293b] py-4 mb-4 bg-gray-50 rounded-xl border border-gray-100">
                {valor}
            </div>

            {/* Alertas condicionales */}
            {valor === 0 && (
                <Alerta tipo="info" titulo="Contador en cero">
                    <p>El contador está en cero</p>
                </Alerta>
            )}

            {valor > 10 && (
                <Alerta tipo="advertencia" titulo="¡Valor alto!">
                    <p>El contador ha superado el límite de 10</p>
                </Alerta>
            )}

            {/* Botones de control */}
            <div className="grid grid-cols-2 gap-3 mt-4">
                <BotonAccion
                    texto="➖ Decrementar"
                    variante="secundario"
                    disabled={valor === 0}
                    onClick={decrementar}
                />
                <BotonAccion
                    texto="➕ Incrementar"
                    variante="primario"
                    onClick={incrementar}
                />
                <BotonAccion
                    texto="➕5 Incrementar +5"
                    variante="primario"
                    onClick={incrementarCinco}
                />
                <BotonAccion
                    texto="🔄 Reiniciar"
                    variante="peligro"
                    onClick={reiniciar}
                />
            </div>
        </div>
    );
}

export default Contador;