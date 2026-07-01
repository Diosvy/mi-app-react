import { Fragment } from 'react';

function Dashboard() {
    // Datos internos del componente
    const usuario = {
        nombre: 'Carlos Martínez',
        email: 'carlos.martinez@email.com',
        rol: 'Administrador'
    };

    const notificaciones = [
        {
            id: 1,
            mensaje: 'Nuevo comentario en tu publicación',
            leida: false
        },
        {
            id: 2,
            mensaje: 'Tu proyecto fue aprobado',
            leida: false
        },
        {
            id: 3,
            mensaje: 'Actualización del sistema disponible',
            leida: true
        },
        {
            id: 4,
            mensaje: 'Invitación a reunión de equipo',
            leida: false
        }
    ];

    const actividadReciente = [
        {
            id: 1,
            accion: 'Actualizó el perfil',
            fecha: '2025-05-25 14:30'
        },
        {
            id: 2,
            accion: 'Creó un nuevo proyecto',
            fecha: '2025-05-25 12:15'
        },
        {
            id: 3,
            accion: 'Comentó en el issue #42',
            fecha: '2025-05-24 18:45'
        }
    ];

    // Calcular notificaciones no leídas
    const noLeidas = notificaciones.filter(noti => !noti.leida).length;

    return (
        <Fragment>
            {/* Sección 1 — Información del usuario */}
            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200">
                <h4 className="text-lg font-bold text-[#1e293b] mb-4 flex items-center gap-2">
                    <span className="text-2xl">👤</span> Información del Usuario
                </h4>
                <div className="space-y-2">
                    <p className="text-gray-700">
                        <span className="font-semibold">Nombre:</span> {usuario.nombre}
                    </p>
                    <p className="text-gray-700">
                        <span className="font-semibold">Email:</span> {usuario.email}
                    </p>
                    <p className="text-gray-700">
                        <span className="font-semibold">Rol:</span> 
                        <span className="ml-2 inline-block bg-blue-100 text-blue-700 font-medium px-3 py-1 rounded-full text-sm">
                            {usuario.rol}
                        </span>
                    </p>
                </div>
            </div>

            {/* Sección 2 — Notificaciones */}
            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold text-[#1e293b] flex items-center gap-2">
                        <span className="text-2xl">🔔</span> Notificaciones
                    </h4>
                    <span className="bg-red-100 text-red-700 font-semibold px-3 py-1 rounded-full text-sm">
                        {noLeidas} no leídas
                    </span>
                </div>
                
                {notificaciones.length === 0 ? (
                    <p className="text-gray-500 text-center py-4">No hay notificaciones</p>
                ) : noLeidas === 0 ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                        <p className="text-green-600 font-medium">✅ No tienes notificaciones pendientes</p>
                    </div>
                ) : (
                    <ul className="space-y-2">
                        {notificaciones.map((notificacion) => (
                            <li 
                                key={notificacion.id} 
                                className={`p-3 rounded-lg border ${
                                    notificacion.leida 
                                        ? 'bg-gray-50 border-gray-200 opacity-70' 
                                        : 'bg-blue-50 border-blue-200'
                                }`}
                            >
                                <p className={`text-gray-700 ${!notificacion.leida ? 'font-semibold' : ''}`}>
                                    {notificacion.mensaje}
                                </p>
                                <span className={`text-xs ${notificacion.leida ? 'text-gray-400' : 'text-blue-600 font-medium'}`}>
                                    {notificacion.leida ? '✓ Leída' : '● No leída'}
                                </span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Sección 3 — Actividad Reciente */}
            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200">
                <h4 className="text-lg font-bold text-[#1e293b] mb-4 flex items-center gap-2">
                    <span className="text-2xl">🕐</span> Actividad Reciente
                </h4>
                
                {actividadReciente.length === 0 ? (
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                        <p className="text-gray-500 font-medium">📝 No hay actividad reciente</p>
                    </div>
                ) : (
                    <ul className="space-y-2">
                        {actividadReciente.map((actividad) => (
                            <li 
                                key={actividad.id} 
                                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100 hover:bg-gray-100 transition-colors duration-200"
                            >
                                <span className="text-gray-700 font-medium">
                                    {actividad.accion}
                                </span>
                                <span className="text-xs text-gray-500">
                                    {actividad.fecha}
                                </span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </Fragment>
    );
}

export default Dashboard;