import { useState, useEffect, useCallback } from 'react';

/**
 * Hook personalizado para gestionar notificaciones temporales
 * @param {number} duracion - Duración en milisegundos (por defecto 3000ms)
 * @returns {Object} - Objeto con notificacion, mostrar y cerrar
 */
function useNotificacion(duracion = 3000) {
    const [notificacion, setNotificacion] = useState(null);
    const [timeoutId, setTimeoutId] = useState(null);

    // Función para mostrar una notificación
    const mostrar = useCallback((mensaje, tipo = 'info') => {
        // Limpiar timeout existente si hay una notificación previa
        if (timeoutId) {
            clearTimeout(timeoutId);
            setTimeoutId(null);
        }

        // Crear nueva notificación con ID único
        const nuevaNotificacion = {
            id: Date.now() + Math.random(),
            mensaje,
            tipo,
            timestamp: new Date().toLocaleTimeString()
        };

        setNotificacion(nuevaNotificacion);

        // Programar cierre automático
        const nuevoTimeoutId = setTimeout(() => {
            setNotificacion(null);
            setTimeoutId(null);
            console.log('🔔 Notificación cerrada automáticamente');
        }, duracion);

        setTimeoutId(nuevoTimeoutId);
        console.log(`🔔 Notificación mostrada: "${mensaje}" (${tipo})`);
    }, [duracion, timeoutId]);

    // Función para cerrar manualmente la notificación
    const cerrar = useCallback(() => {
        if (timeoutId) {
            clearTimeout(timeoutId);
            setTimeoutId(null);
        }
        setNotificacion(null);
        console.log('🔔 Notificación cerrada manualmente');
    }, [timeoutId]);

    // Limpiar timeout al desmontar el componente
    useEffect(() => {
        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
                console.log('🔔 Timeout de notificación limpiado al desmontar');
            }
        };
    }, [timeoutId]);

    return {
        notificacion,
        mostrar,
        cerrar
    };
}

export default useNotificacion;