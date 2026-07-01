function EstadoPedido() {
    const estado = 'entregado'; // Valores posibles: 'pendiente', 'enviado', 'entregado', 'cancelado'

    
    const configuracion = {
        pendiente: {
            icono: '⏳',
            mensaje: 'Tu pedido está siendo procesado',
            color: 'text-yellow-600 bg-yellow-50 border-yellow-200'
        },
        enviado: {
            icono: '🚚',
            mensaje: 'Tu pedido está en camino',
            color: 'text-blue-600 bg-blue-50 border-blue-200'
        },
        entregado: {
            icono: '✅',
            mensaje: 'Tu pedido ha sido entregado',
            color: 'text-green-600 bg-green-50 border-green-200'
        },
        cancelado: {
            icono: '❌',
            mensaje: 'Tu pedido fue cancelado',
            color: 'text-red-600 bg-red-50 border-red-200'
        }
    };

    
    const estadoActual = configuracion[estado] || configuracion.pendiente;

    return (
        <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-sm border border-gray-200">
            <h3 className="text-xl font-bold text-[#1e293b] mb-4 text-center">
                 Estado del Pedido
            </h3>
            
            <div className={`p-4 rounded-xl border-2 ${estadoActual.color}`}>
                <div className="flex items-center gap-3">
                    <span className="text-3xl">{estadoActual.icono}</span>
                    <div>
                        <span className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                            Estado
                        </span>
                        <p className="text-lg font-bold text-gray-800">
                            {estadoActual.mensaje}
                        </p>
                    </div>
                </div>
            </div>

           
            {estado === 'enviado' && (
                <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-sm text-blue-700 flex items-center gap-2">
                        <span>🕐</span>
                        <span className="font-medium">Tiempo estimado de entrega: 2-3 días hábiles</span>
                    </p>
                </div>
            )}

            <div className="mt-4 text-center">
                <span className="text-xs text-gray-400">
                    Estado actual: <span className="font-medium text-gray-600 uppercase">{estado}</span>
                </span>
            </div>
        </div>
    );
}

export default EstadoPedido;