function ListaTareas() {
    
    const tareas = [
        {
            id: 1,
            titulo: 'Terminar el proyecto de React',
            completada: false,
            prioridad: 'alta'
        },
        {
            id: 2,
            titulo: 'Revisar el correo electrónico',
            completada: true,
            prioridad: 'media'
        },
        {
            id: 3,
            titulo: 'Preparar la presentación del equipo',
            completada: false,
            prioridad: 'alta'
        },
        {
            id: 4,
            titulo: 'Actualizar la documentación',
            completada: false,
            prioridad: 'baja'
        },
        {
            id: 5,
            titulo: 'Reunión con el cliente',
            completada: true,
            prioridad: 'alta'
        },
        {
            id: 6,
            titulo: 'Hacer backup de la base de datos',
            completada: false,
            prioridad: 'media'
        },
        {
            id: 7,
            titulo: 'Limpiar el código fuente',
            completada: true,
            prioridad: 'baja'
        }
    ];

    // Filtrar tareas pendientes y completadas
    const tareasPendientes = tareas.filter(tarea => !tarea.completada);
    const tareasCompletadas = tareas.filter(tarea => tarea.completada);

    // Función para obtener el color de la prioridad
    const getPrioridadColor = (prioridad) => {
        switch (prioridad) {
            case 'alta':
                return 'bg-red-100 text-red-700 border-red-200';
            case 'media':
                return 'bg-yellow-100 text-yellow-700 border-yellow-200';
            case 'baja':
                return 'bg-green-100 text-green-700 border-green-200';
            default:
                return 'bg-gray-100 text-gray-700 border-gray-200';
        }
    };

    // Función para renderizar una lista de tareas
    const renderizarListaTareas = (listaTareas, titulo, vacioMensaje) => {
        return (
            <div className="bg-white rounded-2xl shadow-md p-6 w-full border border-gray-200">
                {/* Título y contador de la lista */}
                <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold text-[#1e293b]">{titulo}</h4>
                    <span className="bg-gray-200 text-gray-700 font-semibold px-3 py-1 rounded-full text-sm">
                        {listaTareas.length}
                    </span>
                </div>

                {/* Lista de tareas o mensaje vacío */}
                {listaTareas.length === 0 ? (
                    <p className="text-center text-gray-500 py-6 bg-gray-50 rounded-lg border border-gray-100">
                        {vacioMensaje}
                    </p>
                ) : (
                    <ul className="space-y-2">
                        {listaTareas.map((tarea) => (
                            <li 
                                key={tarea.id} 
                                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-sm transition-shadow duration-200"
                            >
                                {/* Título de la tarea */}
                                <span 
                                    className={`font-medium text-gray-700 ${
                                        tarea.completada ? 'text-gray-400 line-through' : ''
                                    } ${
                                        tarea.prioridad === 'alta' && !tarea.completada ? 'font-bold text-red-600' : ''
                                    }`}
                                    style={{
                                        textDecoration: tarea.completada ? 'line-through' : 'none'
                                    }}
                                >
                                    {tarea.titulo}
                                </span>

                                {/* Badge de prioridad (solo para pendientes) */}
                                {!tarea.completada && (
                                    <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${getPrioridadColor(tarea.prioridad)}`}>
                                        {tarea.prioridad}
                                    </span>
                                )}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        );
    };

    return (
        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 w-full max-w-4xl border border-gray-200">
            {/* Título principal */}
            <h3 className="text-2xl font-bold text-[#1e293b] mb-2 text-center">
                Lista de Tareas
            </h3>
            
            {/* Resumen general */}
            <div className="flex justify-center gap-6 mb-6 p-3 bg-gray-50 rounded-xl border border-gray-100">
                <div className="text-center">
                    <span className="text-sm text-gray-500">Total de tareas</span>
                    <p className="text-2xl font-bold text-[#1e293b]">{tareas.length}</p>
                </div>
                <div className="text-center">
                    <span className="text-sm text-gray-500">Pendientes</span>
                    <p className="text-2xl font-bold text-red-500">{tareasPendientes.length}</p>
                </div>
                <div className="text-center">
                    <span className="text-sm text-gray-500">Completadas</span>
                    <p className="text-2xl font-bold text-green-500">{tareasCompletadas.length}</p>
                </div>
            </div>

            {/* Contenedor de las dos listas */}
            <div className="flex flex-col md:flex-row gap-6">
                {/* Tareas Pendientes */}
                {renderizarListaTareas(
                    tareasPendientes,
                    'Tareas Pendientes',
                    '¡No hay tareas pendientes!'
                )}

                {/* Tareas Completadas */}
                {renderizarListaTareas(
                    tareasCompletadas,
                    'Tareas Completadas',
                    'No hay tareas completadas aún'
                )}
            </div>
        </div>
    );
}

export default ListaTareas;