import { useParams, Link, useNavigate } from 'react-router-dom';
import { useNotas } from '../context/NotasContext';

function DetalleNota() {
    const { id } = useParams();
    const { notas, eliminarNota, toggleFijada } = useNotas();
    const navigate = useNavigate();

    const nota = notas.find(n => n.id === id);

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

    const handleEliminar = () => {
        if (window.confirm('¿Estás seguro de que quieres eliminar esta nota?')) {
            eliminarNota(id);
            navigate('/ejercicio2/notas');
        }
    };

    if (!nota) {
        return (
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200 text-center">
                <p className="text-4xl mb-4">🔍</p>
                <h2 className="text-2xl font-bold text-gray-700 mb-4">Nota no encontrada</h2>
                <p className="text-gray-500 mb-6">La nota que buscas no existe o fue eliminada.</p>
                <Link
                    to="/ejercicio2/notas"
                    className="inline-block px-6 py-3 bg-[#1e293b] text-white font-semibold rounded-lg hover:bg-[#334155] transition-colors"
                >
                    ← Volver a notas
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 border border-gray-200">
            <div className="flex items-start justify-between mb-4">
                <h2 className="text-3xl font-bold text-[#1e293b]">
                    {nota.titulo}
                    {nota.fijada && <span className="ml-2 text-yellow-500">⭐</span>}
                </h2>
                <button
                    onClick={() => toggleFijada(id)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                        nota.fijada
                            ? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                    {nota.fijada ? '⭐ Desfijar' : '☆ Fijar'}
                </button>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
                <span className={`text-sm font-semibold px-3 py-1 rounded-full capitalize ${
                    nota.categoria === 'personal' ? 'bg-blue-100 text-blue-700' :
                    nota.categoria === 'trabajo' ? 'bg-purple-100 text-purple-700' :
                    nota.categoria === 'estudio' ? 'bg-green-100 text-green-700' :
                    'bg-yellow-100 text-yellow-700'
                }`}>
                    {nota.categoria}
                </span>
                <span className="text-sm text-gray-400">
                    📅 {formatearFecha(nota.fechaCreacion)}
                </span>
            </div>

            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 mb-6">
                <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                    {nota.contenido}
                </p>
            </div>

            <div className="flex flex-wrap gap-3">
                <Link
                    to="/ejercicio2/notas"
                    className="px-6 py-3 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600 transition-colors"
                >
                    ← Volver a notas
                </Link>
                <Link
                    to={`/ejercicio2/notas/${id}/editar`}
                    className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                    ✏️ Editar
                </Link>
                <button
                    onClick={handleEliminar}
                    className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
                >
                    🗑️ Eliminar
                </button>
            </div>
        </div>
    );
}

export default DetalleNota;