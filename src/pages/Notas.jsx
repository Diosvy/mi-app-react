import { Link } from 'react-router-dom';
import { useNotas } from '../context/NotasContext';

function Notas() {
    const { 
        notas, 
        filtroCategoria, 
        busqueda, 
        cambiarFiltro, 
        cambiarBusqueda,
        toggleFijada 
    } = useNotas();

    // Filtrar notas según búsqueda y categoría
    const notasFiltradas = notas.filter(nota => {
        const coincideCategoria = filtroCategoria === 'todas' || nota.categoria === filtroCategoria;
        const coincideBusqueda = 
            nota.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
            nota.contenido.toLowerCase().includes(busqueda.toLowerCase());
        return coincideCategoria && coincideBusqueda;
    });

    // Ordenar: fijadas primero
    const notasOrdenadas = [...notasFiltradas].sort((a, b) => {
        if (a.fijada && !b.fijada) return -1;
        if (!a.fijada && b.fijada) return 1;
        return 0;
    });

    // Formatear fecha
    const formatearFecha = (fechaISO) => {
        const fecha = new Date(fechaISO);
        return fecha.toLocaleDateString('es-ES', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    // Truncar texto
    const truncarTexto = (texto, maximo = 100) => {
        if (texto.length <= maximo) return texto;
        return texto.slice(0, maximo) + '...';
    };

    // Manejar toggle fijada sin navegar
    const handleToggleFijada = (e, id) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFijada(id);
    };

    return (
        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 border border-gray-200">
            <h2 className="text-3xl font-bold text-[#1e293b] mb-6">
                📋 Mis Notas
            </h2>

            {/* Filtros */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                    <input
                        type="text"
                        placeholder="🔍 Buscar notas..."
                        value={busqueda}
                        onChange={(e) => cambiarBusqueda(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>
                <div>
                    <select
                        value={filtroCategoria}
                        onChange={(e) => cambiarFiltro(e.target.value)}
                        className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                        <option value="todas">📂 Todas las categorías</option>
                        <option value="personal">👤 Personal</option>
                        <option value="trabajo">💼 Trabajo</option>
                        <option value="estudio">📚 Estudio</option>
                        <option value="ideas">💡 Ideas</option>
                    </select>
                </div>
            </div>

            {/* Contador de resultados */}
            <p className="text-sm text-gray-500 mb-4">
                Mostrando {notasOrdenadas.length} de {notas.length} notas
                {busqueda && ` (buscando: "${busqueda}")`}
                {filtroCategoria !== 'todas' && ` (categoría: ${filtroCategoria})`}
            </p>

            {/* Lista de notas */}
            {notasOrdenadas.length === 0 ? (
                <div className="text-center p-12 bg-gray-50 rounded-xl border border-gray-200">
                    <p className="text-4xl mb-4">🔍</p>
                    <p className="text-gray-500 text-lg">No se encontraron notas</p>
                    <p className="text-gray-400 text-sm mt-2">
                        Prueba con otro término de búsqueda o cambia el filtro
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {notasOrdenadas.map(nota => (
                        <Link
                            key={nota.id}
                            to={`/ejercicio2/notas/${nota.id}`}
                            className={`block p-4 rounded-xl border-2 transition-all duration-200 hover:shadow-lg ${
                                nota.fijada
                                    ? 'bg-yellow-50 border-yellow-200 hover:border-yellow-400'
                                    : 'bg-white border-gray-200 hover:border-blue-300'
                            }`}
                        >
                            <div className="flex items-start justify-between mb-2">
                                <h3 className="font-bold text-gray-800 text-lg flex-1">
                                    {nota.titulo}
                                </h3>
                                <div className="flex items-center gap-1 ml-2 flex-shrink-0">
                                    {/* Botón de fijada (sin navegar) */}
                                    <button
                                        onClick={(e) => handleToggleFijada(e, nota.id)}
                                        className="text-xl hover:scale-125 transition-transform"
                                        title={nota.fijada ? 'Desfijar' : 'Fijar'}
                                    >
                                        {nota.fijada ? '⭐' : '☆'}
                                    </button>
                                </div>
                            </div>

                            <p className="text-gray-600 text-sm mb-3">
                                {truncarTexto(nota.contenido)}
                            </p>

                            <div className="flex flex-wrap items-center justify-between gap-2">
                                <span className={`text-xs font-semibold px-3 py-1 rounded-full capitalize ${
                                    nota.categoria === 'personal' ? 'bg-blue-100 text-blue-700' :
                                    nota.categoria === 'trabajo' ? 'bg-purple-100 text-purple-700' :
                                    nota.categoria === 'estudio' ? 'bg-green-100 text-green-700' :
                                    'bg-yellow-100 text-yellow-700'
                                }`}>
                                    {nota.categoria}
                                </span>
                                <span className="text-xs text-gray-400">
                                    📅 {formatearFecha(nota.fechaCreacion)}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Notas;