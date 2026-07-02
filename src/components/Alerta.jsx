function Alerta({ tipo = 'info', titulo, children }) {
    // Configuración de cada tipo de alerta
    const configuracion = {
        info: {
            icono: 'ℹ️',
            colorFondo: 'bg-blue-50',
            colorBorde: 'border-blue-200',
            colorTexto: 'text-blue-800',
            colorTitulo: 'text-blue-900'
        },
        exito: {
            icono: '✅',
            colorFondo: 'bg-green-50',
            colorBorde: 'border-green-200',
            colorTexto: 'text-green-800',
            colorTitulo: 'text-green-900'
        },
        advertencia: {
            icono: '⚠️',
            colorFondo: 'bg-yellow-50',
            colorBorde: 'border-yellow-200',
            colorTexto: 'text-yellow-800',
            colorTitulo: 'text-yellow-900'
        },
        error: {
            icono: '❌',
            colorFondo: 'bg-red-50',
            colorBorde: 'border-red-200',
            colorTexto: 'text-red-800',
            colorTitulo: 'text-red-900'
        }
    };

    // Obtener la configuración según el tipo (si no existe, usar 'info')
    const estilo = configuracion[tipo] || configuracion.info;

    return (
        <div className={`rounded-2xl border ${estilo.colorBorde} ${estilo.colorFondo} p-4 shadow-sm transition-all duration-300 hover:shadow-md`}>
            {/* Cabecera: ícono + título */}
            <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{estilo.icono}</span>
                <h4 className={`text-lg font-bold ${estilo.colorTitulo}`}>
                    {titulo}
                </h4>
            </div>
            
            {/* Contenido: children */}
            <div className={`${estilo.colorTexto} pl-2`}>
                {children}
            </div>
        </div>
    );
}

export default Alerta;