function BotonAccion({ 
    texto, 
    variante = 'primario', 
    disabled = false, 
    onClick 
}) {
    // Configuración de estilos según la variante
    const estilos = {
        primario: {
            fondo: 'bg-blue-600 hover:bg-blue-700',
            texto: 'text-white',
            borde: 'border-transparent'
        },
        secundario: {
            fondo: 'bg-gray-200 hover:bg-gray-300',
            texto: 'text-gray-800',
            borde: 'border-gray-300'
        },
        peligro: {
            fondo: 'bg-red-600 hover:bg-red-700',
            texto: 'text-white',
            borde: 'border-transparent'
        }
    };

    const estilo = estilos[variante] || estilos.primario;

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
                px-4 py-2 rounded-lg font-semibold transition-all duration-200 
                border ${estilo.borde} ${estilo.fondo} ${estilo.texto}
                ${disabled 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:shadow-md transform hover:scale-105'
                }
            `}
        >
            {texto}
        </button>
    );
}

export default BotonAccion;