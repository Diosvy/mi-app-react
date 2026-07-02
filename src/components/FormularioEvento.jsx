import { useState } from 'react';
import BotonAccion from './BotonAccion';
import Alerta from './Alerta';




function FormularioEvento() {
    // Estado del formulario
    const [formulario, setFormulario] = useState({
        titulo: '',
        fecha: '',
        categoria: '',
        descripcion: '',
        esPublico: false
    });

    // Estado para errores de validación
    const [errores, setErrores] = useState({});

    // Estado para controlar la visibilidad del mensaje de confirmación
    const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);
    const [datosEnviados, setDatosEnviados] = useState(null);

    // Función única para manejar cambios en el formulario
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        
        setFormulario(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));

        // Limpiar error del campo cuando el usuario escribe
        if (errores[name]) {
            setErrores(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    // Función de validación
    const validarFormulario = () => {
        const nuevosErrores = {};
        const fechaActual = new Date();
        fechaActual.setHours(0, 0, 0, 0);
        const fechaSeleccionada = new Date(formulario.fecha);

        // Validar título
        if (formulario.titulo.trim().length < 5) {
            nuevosErrores.titulo = 'El título debe tener al menos 5 caracteres';
        }

        // Validar fecha
        if (!formulario.fecha) {
            nuevosErrores.fecha = 'La fecha es obligatoria';
        } else if (fechaSeleccionada < fechaActual) {
            nuevosErrores.fecha = 'La fecha no puede ser pasada';
        }

        // Validar categoría
        if (!formulario.categoria) {
            nuevosErrores.categoria = 'Debes seleccionar una categoría';
        }

        // Validar descripción
        if (formulario.descripcion.trim().length < 20) {
            nuevosErrores.descripcion = 'La descripción debe tener al menos 20 caracteres';
        }

        setErrores(nuevosErrores);
        return Object.keys(nuevosErrores).length === 0;
    };

    // Verificar si algún campo obligatorio está vacío (para deshabilitar botón)
    const camposObligatoriosVacios = () => {
        return !formulario.titulo.trim() || 
               !formulario.fecha || 
               !formulario.categoria || 
               formulario.descripcion.trim().length < 20;
    };

    // Función para limpiar el formulario
    const limpiarFormulario = () => {
        setFormulario({
            titulo: '',
            fecha: '',
            categoria: '',
            descripcion: '',
            esPublico: false
        });
        setErrores({});
    };

    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validarFormulario()) {
            // Guardar datos para mostrar en confirmación
            setDatosEnviados({ ...formulario });
            setMostrarConfirmacion(true);

            // Limpiar formulario
            limpiarFormulario();

            // Ocultar mensaje de confirmación después de 4 segundos
            setTimeout(() => {
                setMostrarConfirmacion(false);
                setDatosEnviados(null);
            }, 4000);
        }
    };

    return (
        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 w-full max-w-2xl border border-gray-200">
            <h3 className="text-2xl font-bold text-[#1e293b] mb-6 text-center">
                📅 Registrar Evento
            </h3>

            {/* Mensaje de confirmación */}
            {mostrarConfirmacion && datosEnviados && (
                <Alerta tipo="exito" titulo="✅ Evento registrado correctamente">
                    <div className="space-y-1 text-sm">
                        <p><span className="font-semibold">Título:</span> {datosEnviados.titulo}</p>
                        <p><span className="font-semibold">Fecha:</span> {datosEnviados.fecha}</p>
                        <p><span className="font-semibold">Categoría:</span> {datosEnviados.categoria}</p>
                        <p><span className="font-semibold">Descripción:</span> {datosEnviados.descripcion}</p>
                        <p><span className="font-semibold">Público:</span> {datosEnviados.esPublico ? 'Sí' : 'No'}</p>
                    </div>
                </Alerta>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Campo: Título */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Título *
                    </label>
                    <input
                        type="text"
                        name="titulo"
                        value={formulario.titulo}
                        onChange={handleChange}
                        placeholder="Ej: Conferencia de React"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    {errores.titulo && (
                        <div className="mt-2">
                            <Alerta tipo="error" titulo="Error en el título">
                                <p>{errores.titulo}</p>
                            </Alerta>
                        </div>
                    )}
                </div>

                {/* Campo: Fecha */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Fecha *
                    </label>
                    <input
                        type="date"
                        name="fecha"
                        value={formulario.fecha}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    {errores.fecha && (
                        <div className="mt-2">
                            <Alerta tipo="error" titulo="Error en la fecha">
                                <p>{errores.fecha}</p>
                            </Alerta>
                        </div>
                    )}
                </div>

                {/* Campo: Categoría */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Categoría *
                    </label>
                    <select
                        name="categoria"
                        value={formulario.categoria}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                        <option value="">Selecciona una categoría</option>
                        <option value="conferencia">Conferencia</option>
                        <option value="taller">Taller</option>
                        <option value="seminario">Seminario</option>
                        <option value="otro">Otro</option>
                    </select>
                    {errores.categoria && (
                        <div className="mt-2">
                            <Alerta tipo="error" titulo="Error en la categoría">
                                <p>{errores.categoria}</p>
                            </Alerta>
                        </div>
                    )}
                </div>

                {/* Campo: Descripción */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Descripción * (mínimo 20 caracteres)
                    </label>
                    <textarea
                        name="descripcion"
                        value={formulario.descripcion}
                        onChange={handleChange}
                        placeholder="Describe el evento con detalle..."
                        rows="3"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    />
                    {errores.descripcion && (
                        <div className="mt-2">
                            <Alerta tipo="error" titulo="Error en la descripción">
                                <p>{errores.descripcion}</p>
                            </Alerta>
                        </div>
                    )}
                </div>

                {/* Campo: Es público (checkbox) */}
                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        name="esPublico"
                        checked={formulario.esPublico}
                        onChange={handleChange}
                        className="w-5 h-5 accent-blue-600 cursor-pointer"
                    />
                    <label className="text-sm font-medium text-gray-700 cursor-pointer">
                        📢 Evento público
                    </label>
                </div>

                {/* Botón de envío */}
                <div className="pt-4">
                    <BotonAccion
                        texto="📤 Registrar Evento"
                        variante="primario"
                        disabled={camposObligatoriosVacios()}
                        onClick={handleSubmit}
                    />
                </div>
            </form>
        </div>
    );
}

export default FormularioEvento; 