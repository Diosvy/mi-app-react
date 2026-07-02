import BotonAccion from './BotonAccion';

function Modal({ titulo, abierto, children, onCerrar }) {
    // Si el modal no está abierto, retorna null
    if (!abierto) {
        return null;
    }

    return (
        <>
            {/* Fondo oscuro semitransparente */}
            <div 
                className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                onClick={onCerrar} // Cerrar al hacer clic en el fondo
            >
                {/* Contenedor del modal */}
                <div 
                    className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-6 relative animate-fadeIn"
                    onClick={(e) => e.stopPropagation()} // Evitar que el clic en el modal lo cierre
                >
                    {/* Botón de cerrar (X) */}
                    <button
                        onClick={onCerrar}
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200 text-2xl"
                    >
                        ✕
                    </button>

                    {/* Título del modal */}
                    <h3 className="text-2xl font-bold text-[#1e293b] mb-4">
                        {titulo}
                    </h3>

                    {/* Contenido del modal */}
                    <div className="text-gray-700 flex flex-col gap-4">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;