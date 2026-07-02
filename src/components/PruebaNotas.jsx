import { useNotas } from '../context/NotasContext';

function PruebaNotas() {
    const { notas, filtroCategoria, busqueda, cambiarFiltro, cambiarBusqueda } = useNotas();

    // ✅ APLICAR FILTROS CORRECTAMENTE
    const notasFiltradas = notas.filter(nota => {
        const coincideCategoria = filtroCategoria === 'todas' || nota.categoria === filtroCategoria;
        const coincideBusqueda = nota.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
                                  nota.contenido.toLowerCase().includes(busqueda.toLowerCase());
        return coincideCategoria && coincideBusqueda;
    });

    // ✅ ORDENAR: Fijadas primero
    const notasOrdenadas = [...notasFiltradas].sort((a, b) => {
        if (a.fijada && !b.fijada) return -1;
        if (!a.fijada && b.fijada) return 1;
        return 0;
    });

    return (
        <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 w-full">
            <h3 className="text-lg font-bold text-[#1e293b] mb-4">
                📝 Prueba del Contexto de Notas
            </h3>

            <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-100 text-center">
                    <p className="text-sm text-gray-500">Total de notas</p>
                    <p className="text-2xl font-bold text-blue-600">{notas.length}</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-100 text-center">
                    <p className="text-sm text-gray-500">Filtro actual</p>
                    <p className="text-lg font-bold text-purple-600 capitalize">{filtroCategoria}</p>
                </div>
            </div>

            <div className="space-y-2">
                <div>
                    <label className="text-sm font-medium text-gray-700">Filtrar por categoría:</label>
                    <select
                        value={filtroCategoria}
                        onChange={(e) => cambiarFiltro(e.target.value)}
                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="todas">Todas</option>
                        <option value="personal">Personal</option>
                        <option value="trabajo">Trabajo</option>
                        <option value="estudio">Estudio</option>
                        <option value="ideas">Ideas</option>
                    </select>
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-700">Buscar:</label>
                    <input
                        type="text"
                        value={busqueda}
                        onChange={(e) => cambiarBusqueda(e.target.value)}
                        placeholder="Buscar por título..."
                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>

            <div className="mt-4 max-h-80 overflow-y-auto">
                <p className="text-sm text-gray-500 mb-2">
                    Mostrando {notasOrdenadas.length} de {notas.length} notas
                    {busqueda && ` (buscando: "${busqueda}")`}
                </p>

                {notasOrdenadas.length === 0 ? (
                    <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
                        <p className="text-gray-500">🔍 No se encontraron notas</p>
                        <p className="text-xs text-gray-400 mt-1">
                            Prueba con otro término de búsqueda o quita el filtro
                        </p>
                    </div>
                ) : (
                    <ul className="space-y-2">
                        {notasOrdenadas.map(nota => (
                            <li 
                                key={nota.id} 
                                className={`text-sm p-3 rounded-lg border ${
                                    nota.fijada 
                                        ? 'bg-yellow-50 border-yellow-200' 
                                        : 'bg-gray-50 border-gray-100'
                                }`}
                            >
                                <div className="flex items-center justify-between">
                                    <span className="font-medium text-gray-800">
                                        {nota.titulo}
                                        {nota.fijada && (
                                            <span className="ml-1 text-yellow-500">⭐</span>
                                        )}
                                    </span>
                                    <span className="text-xs text-gray-400 capitalize">
                                        {nota.categoria}
                                    </span>
                                </div>
                                <p className="text-gray-600 text-xs mt-1 line-clamp-1">
                                    {nota.contenido}
                                </p>
                                <p className="text-xs text-gray-400 mt-1">
                                    {new Date(nota.fechaCreacion).toLocaleDateString()}
                                </p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default PruebaNotas;