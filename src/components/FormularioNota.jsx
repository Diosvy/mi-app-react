import { useState } from 'react';

function FormularioNota({ 
    valoresIniciales = { titulo: '', contenido: '', categoria: 'personal', fijada: false },
    onSubmit,
    textoBoton = 'Guardar',
    onCancelar
}) {
    const [formulario, setFormulario] = useState(valoresIniciales);
    const [errores, setErrores] = useState({});

    // Manejar cambios en los campos
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const nuevoValor = type === 'checkbox' ? checked : value;
        
        setFormulario(prev => ({ ...prev, [name]: nuevoValor }));
        
        // Limpiar error del campo cuando el usuario escribe
        if (errores[name]) {
            setErrores(prev => ({ ...prev, [name]: '' }));
        }
    };

    // Validar el formulario
    const validar = () => {
        const nuevosErrores = {};
        
        if (formulario.titulo.trim().length < 3) {
            nuevosErrores.titulo = 'El título debe tener al menos 3 caracteres';
        }
        
        if (formulario.contenido.trim().length < 10) {
            nuevosErrores.contenido = 'El contenido debe tener al menos 10 caracteres';
        }
        
        setErrores(nuevosErrores);
        return Object.keys(nuevosErrores).length === 0;
    };

    // Manejar envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validar()) {
            onSubmit(formulario);
        }
    };

    // Verificar si hay errores para deshabilitar el botón
    const tieneErrores = () => {
        return Object.keys(errores).length > 0;
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {/* Título */}
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Título *
                </label>
                <input
                    type="text"
                    name="titulo"
                    value={formulario.titulo}
                    onChange={handleChange}
                    placeholder="Escribe un título..."
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errores.titulo ? 'border-red-500' : 'border-gray-300'
                    }`}
                />
                {errores.titulo && (
                    <p className="mt-1 text-sm text-red-600">{errores.titulo}</p>
                )}
            </div>

            {/* Contenido */}
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Contenido *
                </label>
                <textarea
                    name="contenido"
                    value={formulario.contenido}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Escribe el contenido de la nota..."
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${
                        errores.contenido ? 'border-red-500' : 'border-gray-300'
                    }`}
                />
                {errores.contenido && (
                    <p className="mt-1 text-sm text-red-600">{errores.contenido}</p>
                )}
            </div>

            {/* Categoría */}
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Categoría
                </label>
                <select
                    name="categoria"
                    value={formulario.categoria}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                    <option value="personal">👤 Personal</option>
                    <option value="trabajo">💼 Trabajo</option>
                    <option value="estudio">📚 Estudio</option>
                    <option value="ideas">💡 Ideas</option>
                </select>
            </div>

            {/* Fijada */}
            <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    name="fijada"
                    checked={formulario.fijada}
                    onChange={handleChange}
                    className="w-5 h-5 accent-blue-600 cursor-pointer"
                />
                <label className="text-sm font-medium text-gray-700 cursor-pointer">
                    ⭐ Fijar nota
                </label>
            </div>

            {/* Botones */}
            <div className="flex gap-3 pt-4">
                <button
                    type="submit"
                    disabled={tieneErrores()}
                    className={`flex-1 px-6 py-3 font-semibold rounded-lg transition-colors ${
                        tieneErrores()
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                >
                    {textoBoton}
                </button>
                <button
                    type="button"
                    onClick={onCancelar}
                    className="px-6 py-3 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600 transition-colors"
                >
                    Cancelar
                </button>
            </div>
        </form>
    );
}

export default FormularioNota;