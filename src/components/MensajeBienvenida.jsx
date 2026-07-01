function MensajeBienvenida() {
    // Variable interna con el usuario (cambia entre null y un objeto para probar)
    const usuario = {
        nombre: 'Ana Martínez',
        rol: 'admin'
    };
    // const usuario = null; // Descomenta esta línea y comenta la de arriba para probar el early return

    // ✅ EARLY RETURN: Si usuario es null, retorna anticipadamente
    if (usuario === null) {
        return (
            <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-sm border border-gray-200">
                <div className="flex flex-col items-center justify-center p-4">
                    <span className="text-5xl mb-4">🔒</span>
                    <h3 className="text-xl font-bold text-gray-700 text-center">
                        Por favor, inicia sesión para continuar
                    </h3>
                    <p className="text-sm text-gray-400 mt-2">
                        Necesitas autenticarte para acceder al contenido
                    </p>
                </div>
            </div>
        );
    }

    // ✅ Si usuario tiene un valor, renderiza el contenido completo
    return (
        <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-sm border border-gray-200">
            <div className="flex items-start gap-3">
                <span className="text-4xl">👋</span>
                <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#1e293b]">
                        Bienvenido, {usuario.nombre}
                    </h3>
                    <p className="text-gray-600 mt-1">
                        <span className="font-medium">Rol:</span> {usuario.rol}
                    </p>
                    
                    {/* ✅ Condición adicional con &&: Solo si es 'admin' */}
                    {usuario.rol === 'admin' && (
                        <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                            <p className="text-sm text-blue-700 flex items-center gap-2">
                                <span>🔑</span>
                                <span className="font-medium">Tienes acceso completo al sistema</span>
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MensajeBienvenida;