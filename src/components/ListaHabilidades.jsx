function ListaHabilidades() {
   
    const habilidades = [
        'React',
        'JavaScript',
        'CSS',
        'Node.js',
        'Git',
        'TypeScript'
    ];

    return (
        <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-md border border-gray-200">
            {/* Título */}
            <h3 className="text-2xl font-bold text-[#1e293b] mb-1">
                Habilidades técnicas
            </h3>
            
            {/* Párrafo con el total de habilidades */}
            <p className="text-gray-600 text-sm mb-4">
                Total de habilidades: <span className="font-semibold text-[#2563eb]">{habilidades.length}</span>
            </p>

            {/* Lista desordenada usando map() */}
            <ul className="space-y-2">
                {habilidades.map((habilidad) => (
                    <li 
                        key={habilidad} 
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 border border-gray-100 hover:border-blue-200"
                    >
                        <span className="text-blue-500 text-lg">▸</span>
                        <span className="font-medium text-gray-700">{habilidad}</span>
                    </li>
                ))}
            </ul>

        
            <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100 text-center">
                <p className="text-sm text-blue-600">
                    Estás aprendiendo <span className="font-bold">{habilidades.length}</span> habilidades técnicas
                </p>
            </div>
        </div>
    );
}

export default ListaHabilidades;