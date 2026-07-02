import { useState, useEffect } from 'react';
import BotonAccion from './BotonAccion';
import Alerta from './Alerta';

function TemporizadorPomodoro() {
    // Tiempo inicial: 25 minutos (1500 segundos)
    const TIEMPO_INICIAL = 1500;
    
    // Estados
    const [tiempoRestante, setTiempoRestante] = useState(TIEMPO_INICIAL);
    const [estaActivo, setEstaActivo] = useState(false);
    const [tiempoCompletado, setTiempoCompletado] = useState(false);

    // Efecto para gestionar el intervalo
    useEffect(() => {
        let intervalo = null;

        if (estaActivo && tiempoRestante > 0) {
            intervalo = setInterval(() => {
                setTiempoRestante(prev => {
                    const nuevoTiempo = prev - 1;
                    // Verificar si llegó a cero
                    if (nuevoTiempo <= 0) {
                        setEstaActivo(false);
                        setTiempoCompletado(true);
                        // Alerta nativa
                        alert('⏰ ¡Tiempo completado!');
                        return 0;
                    }
                    return nuevoTiempo;
                });
            }, 1000);
        }

        // Función de limpieza: se ejecuta al desmontar, pausar o reiniciar
        return () => {
            if (intervalo) {
                clearInterval(intervalo);
                console.log('Intervalo limpiado');
            }
        };
    }, [estaActivo, tiempoRestante]); // Dependencias

    // Formatear tiempo en MM:SS
    const formatearTiempo = (segundos) => {
        const mins = Math.floor(segundos / 60);
        const segs = segundos % 60;
        return `${mins.toString().padStart(2, '0')}:${segs.toString().padStart(2, '0')}`;
    };

    // Calcular progreso (para barra visual)
    const progreso = ((TIEMPO_INICIAL - tiempoRestante) / TIEMPO_INICIAL) * 100;

    // Funciones de control
    const iniciar = () => {
        if (tiempoRestante > 0) {
            setEstaActivo(true);
            setTiempoCompletado(false);
        }
    };

    const pausar = () => {
        setEstaActivo(false);
    };

    const reiniciar = () => {
        setEstaActivo(false);
        setTiempoRestante(TIEMPO_INICIAL);
        setTiempoCompletado(false);
    };

    return (
        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 w-full max-w-md border border-gray-200">
            <h3 className="text-2xl font-bold text-[#1e293b] mb-6 text-center">
                🍅 Temporizador Pomodoro
            </h3>

            {/* Tiempo restante */}
            <div className="text-center mb-6">
                <div className="text-7xl font-extrabold text-[#1e293b] py-6 bg-gray-50 rounded-xl border border-gray-100 font-mono">
                    {formatearTiempo(tiempoRestante)}
                </div>
                
                {/* Barra de progreso */}
                <div className="mt-4 bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-1000"
                        style={{ width: `${Math.min(progreso, 100)}%` }}
                    />
                </div>
                
                <p className="text-xs text-gray-400 mt-2">
                    {estaActivo ? '⏳ Temporizador en marcha...' : '⏸️ Temporizador pausado'}
                </p>
            </div>

            {/* Alerta de tiempo completado */}
            {tiempoCompletado && (
                <Alerta tipo="exito" titulo="✅ ¡Tiempo completado!">
                    <p>Has completado tu sesión de 25 minutos. ¡Descansa un momento!</p>
                </Alerta>
            )}

            {/* Botones de control */}
            <div className="grid grid-cols-3 gap-3 mt-4">
                <BotonAccion
                    texto="▶ Iniciar"
                    variante="primario"
                    onClick={iniciar}
                    disabled={estaActivo || tiempoRestante === 0}
                />
                <BotonAccion
                    texto="⏸ Pausar"
                    variante="secundario"
                    onClick={pausar}
                    disabled={!estaActivo}
                />
                <BotonAccion
                    texto="🔄 Reiniciar"
                    variante="peligro"
                    onClick={reiniciar}
                />
            </div>

            {/* Información adicional */}
            <div className="mt-4 p-3 bg-gray-50 rounded-lg border border-gray-100 text-center">
                <p className="text-sm text-gray-500">
                    ⏱️ Tiempo restante: <span className="font-semibold text-gray-700">{formatearTiempo(tiempoRestante)}</span>
                </p>
                <p className="text-xs text-gray-400 mt-1">
                    {tiempoRestante === 0 && !tiempoCompletado ? '✅ Tiempo completado' : `Progreso: ${Math.round(progreso)}%`}
                </p>
            </div>
        </div>
    );
}

export default TemporizadorPomodoro;