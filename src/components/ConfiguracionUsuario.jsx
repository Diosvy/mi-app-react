import { useState } from 'react';
import BotonAccion from './BotonAccion';
import Alerta from './Alerta';
import useLocalStorage from '../hooks/useLocalStorage';
import useNotificacion from '../hooks/useNotificacion';

function ConfiguracionUsuario() {
    // Usar el custom hook useLocalStorage
    const CLAVE_STORAGE = 'config-usuario';
    const valoresPorDefecto = {
        nombre: '',
        tema: 'claro',
        notificaciones: true
    };

    const [configuracion, setConfiguracion] = useLocalStorage(CLAVE_STORAGE, valoresPorDefecto);
    
    // Usar el custom hook useNotificacion
    const { notificacion, mostrar, cerrar } = useNotificacion(4000);

    // Manejar cambios en los campos del formulario
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        
        setConfiguracion(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    // Restablecer valores
    const restablecerValores = () => {
        setConfiguracion(valoresPorDefecto);
        mostrar('Configuración restablecida correctamente', 'exito');
    };

    // Guardar configuración manualmente
    const guardarConfiguracion = () => {
        // Ya se guarda automáticamente con el hook
        mostrar('Configuración guardada correctamente', 'exito');
    };

    // Función para obtener el emoji del tema
    const getEmojiTema = (tema) => {
        return tema === 'claro' ? '☀️' : '🌙';
    };

    // Función para obtener el texto del tema
    const getTextoEstadoNotificaciones = (notificaciones) => {
        return notificaciones ? '✅ Activadas' : '❌ Desactivadas';
    };

    return (
        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 w-full max-w-2xl border border-gray-200">
            <h3 className="text-2xl font-bold text-[#1e293b] mb-6 text-center">
                ⚙️ Configuración de Usuario
            </h3>

            {/* Notificación temporal */}
            {notificacion && (
                <div className={`mb-4 p-4 rounded-xl border ${
                    notificacion.tipo === 'exito' 
                        ? 'bg-green-50 border-green-200 text-green-800'
                        : 'bg-blue-50 border-blue-200 text-blue-800'
                }`}>
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="font-semibold">
                                {notificacion.tipo === 'exito' ? '✅ ' : 'ℹ️ '}
                                {notificacion.mensaje}
                            </p>
                            <p className="text-xs opacity-70 mt-1">
                                {notificacion.timestamp}
                            </p>
                        </div>
                        <button
                            onClick={cerrar}
                            className="text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}

            <form className="space-y-4">
                {/* Campo: Nombre */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                        👤 Nombre de usuario
                    </label>
                    <input
                        type="text"
                        name="nombre"
                        value={configuracion.nombre}
                        onChange={handleChange}
                        placeholder="Ej: Juan Pérez"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>

                {/* Campo: Tema */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                        🎨 Tema de la aplicación
                    </label>
                    <select
                        name="tema"
                        value={configuracion.tema}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                        <option value="claro">☀️ Claro</option>
                        <option value="oscuro">🌙 Oscuro</option>
                    </select>
                </div>

                {/* Campo: Notificaciones */}
                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        name="notificaciones"
                        checked={configuracion.notificaciones}
                        onChange={handleChange}
                        className="w-5 h-5 accent-blue-600 cursor-pointer"
                    />
                    <label className="text-sm font-medium text-gray-700 cursor-pointer">
                        🔔 Activar notificaciones
                    </label>
                </div>
            </form>

            {/* Vista previa en tiempo real */}
            <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
                <h4 className="text-sm font-semibold text-gray-600 mb-3">
                    📋 Vista previa de la configuración
                </h4>
                <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                        <span className="text-gray-500">Nombre:</span>
                        <span className="font-medium text-gray-800">
                            {configuracion.nombre || '(Sin nombre)'}
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-500">Tema:</span>
                        <span className="font-medium text-gray-800">
                            {getEmojiTema(configuracion.tema)} {configuracion.tema}
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-500">Notificaciones:</span>
                        <span className="font-medium text-gray-800">
                            {getTextoEstadoNotificaciones(configuracion.notificaciones)}
                        </span>
                    </div>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-200">
                    <p className="text-xs text-gray-400">
                        💾 Datos guardados en: <span className="font-mono">{CLAVE_STORAGE}</span>
                    </p>
                    <pre className="mt-2 text-xs bg-gray-100 p-2 rounded border border-gray-200 overflow-x-auto">
                        {JSON.stringify(configuracion, null, 2)}
                    </pre>
                </div>
            </div>

            {/* Botones de acción */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <BotonAccion
                    texto="💾 Guardar configuración"
                    variante="primario"
                    onClick={guardarConfiguracion}
                />
                <BotonAccion
                    texto="🔄 Restablecer valores"
                    variante="peligro"
                    onClick={restablecerValores}
                />
            </div>

            {/* Información de estado */}
            <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
                <p className="text-xs text-blue-600 text-center">
                    💡 Los cambios se guardan automáticamente en localStorage usando <span className="font-mono">useLocalStorage</span>
                </p>
                <p className="text-xs text-blue-600 text-center mt-1">
                    🔔 Las notificaciones se gestionan con <span className="font-mono">useNotificacion</span>
                </p>
            </div>
        </div>
    );
}

export default ConfiguracionUsuario;