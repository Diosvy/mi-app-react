import { useParams, Link, useNavigate } from 'react-router-dom';
import { useNotas } from '../context/NotasContext';
import FormularioNota from '../components/FormularioNota';

function EditarNota() {
    const { id } = useParams();
    const { notas, editarNota } = useNotas();
    const navigate = useNavigate();

    const nota = notas.find(n => n.id === id);

    if (!nota) {
        return (
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200 text-center">
                <p className="text-4xl mb-4">🔍</p>
                <h2 className="text-2xl font-bold text-gray-700 mb-4">Nota no encontrada</h2>
                <p className="text-gray-500 mb-6">La nota que intentas editar no existe o fue eliminada.</p>
                <Link
                    to="/ejercicio2/notas"
                    className="inline-block px-6 py-3 bg-[#1e293b] text-white font-semibold rounded-lg hover:bg-[#334155] transition-colors"
                >
                    ← Volver a notas
                </Link>
            </div>
        );
    }

    const handleSubmit = (datos) => {
        editarNota(id, datos);
        navigate(`/ejercicio2/notas/${id}`);
    };

    const handleCancelar = () => {
        navigate(`/ejercicio2/notas/${id}`);
    };

    return (
        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 border border-gray-200">
            <h2 className="text-3xl font-bold text-[#1e293b] mb-6">
                ✏️ Editar Nota
            </h2>
            
            <FormularioNota
                valoresIniciales={{
                    titulo: nota.titulo,
                    contenido: nota.contenido,
                    categoria: nota.categoria,
                    fijada: nota.fijada
                }}
                onSubmit={handleSubmit}
                textoBoton="💾 Guardar Cambios"
                onCancelar={handleCancelar}
            />
        </div>
    );
}

export default EditarNota;