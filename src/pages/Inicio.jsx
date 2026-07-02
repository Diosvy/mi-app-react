import { useNotas } from '../context/NotasContext';

function Inicio() {
    const { notas } = useNotas();

    const totalNotas = notas.length;
    const notasFijadas = notas.filter(nota => nota.fijada).length;
    const categorias = notas.reduce((acc, nota) => {
        acc[nota.categoria] = (acc[nota.categoria] || 0) + 1;
        return acc;
    }, {});

    return (
        <div className="space-y-6">
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
                <h2 className="text-3xl font-bold text-[#1e293b] mb-4">
                    🏠 Bienvenido a MisNotas
                </h2>
                <p className="text-gray-600 text-lg">
                    Gestiona tus notas de manera fácil y rápida. Organiza tus ideas, tareas y proyectos en un solo lugar.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 text-center">
                    <p className="text-3xl font-extrabold text-blue-600">{totalNotas}</p>
                    <p className="text-sm text-gray-500">Total de notas</p>
                </div>
                <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 text-center">
                    <p className="text-3xl font-extrabold text-yellow-500">{notasFijadas}</p>
                    <p className="text-sm text-gray-500">Notas fijadas ⭐</p>
                </div>
                <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 text-center">
                    <p className="text-3xl font-extrabold text-green-500">{Object.keys(categorias).length}</p>
                    <p className="text-sm text-gray-500">Categorías</p>
                </div>
                <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 text-center">
                    <p className="text-sm font-medium text-gray-500">Última nota</p>
                    <p className="text-sm text-gray-700 truncate">
                        {notas.length > 0 ? notas[0].titulo : 'Sin notas'}
                    </p>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-[#1e293b] mb-3">
                    📊 Notas por categoría
                </h3>
                <div className="flex flex-wrap gap-3">
                    {Object.entries(categorias).map(([categoria, count]) => (
                        <div
                            key={categoria}
                            className="px-4 py-2 bg-gray-100 rounded-full border border-gray-200"
                        >
                            <span className="text-sm font-medium text-gray-700 capitalize">
                                {categoria}: <span className="font-bold text-blue-600">{count}</span>
                            </span>
                        </div>
                    ))}
                    {Object.keys(categorias).length === 0 && (
                        <p className="text-gray-500 text-sm">No hay notas en ninguna categoría</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Inicio;