function Tarjeta() {
    
    const datos = {
        titulo: 'Aprende React con Vite',
        descripcion: 'Descubre cómo construir aplicaciones modernas con React y Vite, el bundler ultrarrápido que revoluciona el desarrollo frontend.',
        etiquetas: ['React', 'Vite', 'Frontend', 'JavaScript', 'Web'],
        destacado: true
    };

    
    const getColorEtiqueta = (index) => {
        const colores = [
            'bg-blue-100 text-blue-700 border-blue-200',
            'bg-green-100 text-green-700 border-green-200',
            'bg-purple-100 text-purple-700 border-purple-200',
            'bg-pink-100 text-pink-700 border-pink-200',
            'bg-yellow-100 text-yellow-700 border-yellow-200',
            'bg-indigo-100 text-indigo-700 border-indigo-200',
            'bg-red-100 text-red-700 border-red-200',
            'bg-teal-100 text-teal-700 border-teal-200'
        ];
        return colores[index % colores.length];
    };

    return (
        <div 
            className={`
                rounded-2xl shadow-md p-6 w-full max-w-md transition-all duration-300 hover:shadow-xl
                ${datos.destacado 
                    ? 'border-2 border-blue-400 bg-gradient-to-br from-blue-50 to-indigo-50' 
                    : 'border border-gray-200 bg-white'}
            `}
        >
            {/* Título */}
            <h3 className="text-2xl font-bold text-[#1e293b] mb-3">
                {datos.titulo}
            </h3>

            {/* Descripción */}
            <p className="text-gray-600 text-base leading-relaxed mb-4">
                {datos.descripcion}
            </p>

            {/* Etiquetas */}
            <div className="flex flex-wrap gap-2 mb-4">
                {datos.etiquetas.map((etiqueta, index) => (
                    <span 
                        key={etiqueta} 
                        className={`text-xs font-semibold px-3 py-1 rounded-full border ${getColorEtiqueta(index)}`}
                    >
                        {etiqueta}
                    </span>
                ))}
            </div>

            {/* Badge de "Destacado" */}
            {datos.destacado && (
                <div className="mt-3 pt-3 border-t border-blue-200">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                        ⭐ Destacado
                    </span>
                </div>
            )}
        </div>
    );
}

export default Tarjeta;