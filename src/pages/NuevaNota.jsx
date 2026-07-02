import { useNavigate } from 'react-router-dom';
import { useNotas } from '../context/NotasContext';
import FormularioNota from '../components/FormularioNota';

function NuevaNota() {
    const navigate = useNavigate();
    const { agregarNota } = useNotas();

    const handleSubmit = (datos) => {
        agregarNota(datos);
        navigate('/ejercicio2/notas');
    };

    const handleCancelar = () => {
        navigate('/ejercicio2/notas');
    };

    return (
        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 border border-gray-200">
            <h2 className="text-3xl font-bold text-[#1e293b] mb-6">
                ➕ Crear Nueva Nota
            </h2>
            
            <FormularioNota
                valoresIniciales={{ titulo: '', contenido: '', categoria: 'personal', fijada: false }}
                onSubmit={handleSubmit}
                textoBoton="📝 Crear Nota"
                onCancelar={handleCancelar}
            />
        </div>
    );
}

export default NuevaNota;