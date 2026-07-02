import { useState } from 'react';
import BotonAccion from './BotonAccion';
import Modal from './Modal';
import Alerta from './Alerta';

function ListaContactos() {
    // Estado con array de contactos (al menos 5)
    const [contactos, setContactos] = useState([
        { id: 1, nombre: 'Ana Martínez', telefono: '555-1234', favorito: true },
        { id: 2, nombre: 'Carlos López', telefono: '555-5678', favorito: false },
        { id: 3, nombre: 'María García', telefono: '555-9012', favorito: true },
        { id: 4, nombre: 'Juan Pérez', telefono: '555-3456', favorito: false },
        { id: 5, nombre: 'Laura Sánchez', telefono: '555-7890', favorito: false },
        { id: 6, nombre: 'Pedro Ramírez', telefono: '555-2345', favorito: true }
    ]);

    // Estado para la búsqueda
    const [nuevoBusqueda, setNuevoBusqueda] = useState('');
    
    // Estado para filtrar favoritos
    const [mostrarFavoritos, setMostrarFavoritos] = useState(false);

    // Estado para el modal de confirmación
    const [modalAbierto, setModalAbierto] = useState(false);
    const [contactoAEliminar, setContactoAEliminar] = useState(null);

    // Filtrar contactos por búsqueda (sin modificar el array original)
    const contactosFiltrados = contactos.filter(contacto => {
        const busqueda = nuevoBusqueda.toLowerCase();
        return contacto.nombre.toLowerCase().includes(busqueda) || 
               contacto.telefono.toLowerCase().includes(busqueda);
    });

    // Filtrar por favoritos si está activado
    const contactosMostrados = mostrarFavoritos 
        ? contactosFiltrados.filter(contacto => contacto.favorito)
        : contactosFiltrados;

    // Contador de favoritos
    const totalFavoritos = contactos.filter(c => c.favorito).length;

    // Función para alternar favorito (usando map para crear nuevo array)
    const toggleFavorito = (id) => {
        setContactos(prevContactos => 
            prevContactos.map(contacto => 
                contacto.id === id 
                    ? { ...contacto, favorito: !contacto.favorito }
                    : contacto
            )
        );
    };

    // Función para eliminar contacto (usando filter)
    const eliminarContacto = (id) => {
        setContactos(prevContactos => 
            prevContactos.filter(contacto => contacto.id !== id)
        );
        // Cerrar modal después de eliminar
        setModalAbierto(false);
        setContactoAEliminar(null);
    };

    // Abrir modal de confirmación
    const confirmarEliminacion = (contacto) => {
        setContactoAEliminar(contacto);
        setModalAbierto(true);
    };

    // Función para alternar entre mostrar todos o solo favoritos
    const toggleMostrarFavoritos = () => {
        setMostrarFavoritos(prev => !prev);
    };

    return (
        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 w-full max-w-4xl border border-gray-200">
            <h3 className="text-2xl font-bold text-[#1e293b] mb-6 text-center">
                📇 Lista de Contactos
            </h3>

            {/* Barra de herramientas */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
                {/* Campo de búsqueda */}
                <input 
                    type="text"
                    placeholder="🔍 Buscar por nombre o teléfono..."
                    value={nuevoBusqueda}
                    onChange={(e) => setNuevoBusqueda(e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />

                {/* Botón para mostrar favoritos */}
                <BotonAccion
                    texto={mostrarFavoritos ? '⭐ Mostrar todos' : '⭐ Solo favoritos'}
                    variante={mostrarFavoritos ? 'secundario' : 'primario'}
                    onClick={toggleMostrarFavoritos}
                />
            </div>

            {/* Contadores */}
            <div className="flex flex-wrap justify-between items-center mb-4 p-3 bg-gray-50 rounded-xl border border-gray-100">
                <div className="text-sm text-gray-600">
                    <span className="font-semibold">Total:</span> {contactos.length} contactos
                </div>
                <div className="text-sm text-gray-600">
                    <span className="font-semibold">⭐ Favoritos:</span> {totalFavoritos}
                </div>
                <div className="text-sm text-gray-600">
                    <span className="font-semibold">🔍 Resultados:</span> {contactosMostrados.length}
                </div>
            </div>

            {/* Lista de contactos */}
            {contactosMostrados.length === 0 ? (
                <Alerta tipo="info" titulo="Sin resultados">
                    <p>No se encontraron contactos</p>
                </Alerta>
            ) : (
                <ul className="space-y-3">
                    {contactosMostrados.map(contacto => (
                        <li 
                            key={contacto.id}
                            className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-200 gap-3"
                        >
                            {/* Información del contacto */}
                            <div className="flex-1">
                                <div className="flex items-center gap-2">
                                    <span className="font-semibold text-gray-800">
                                        {contacto.nombre}
                                    </span>
                                    <span 
                                        className="text-xl cursor-pointer hover:scale-125 transition-transform duration-200"
                                        onClick={() => toggleFavorito(contacto.id)}
                                    >
                                        {contacto.favorito ? '⭐' : '☆'}
                                    </span>
                                </div>
                                <span className="text-sm text-gray-500">
                                    📞 {contacto.telefono}
                                </span>
                            </div>

                            {/* Botones de acción */}
                            <div className="flex gap-2">
                                <BotonAccion
                                    texto="Eliminar"
                                    variante="peligro"
                                    onClick={() => confirmarEliminacion(contacto)}
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            )}

            {/* Modal de confirmación */}
            <Modal
                titulo="⚠️ Confirmar eliminación"
                abierto={modalAbierto}
                onCerrar={() => {
                    setModalAbierto(false);
                    setContactoAEliminar(null);
                }}
            >
                {contactoAEliminar && (
                    <>
                        <p className="text-gray-700 mb-4">
                            ¿Estás seguro de eliminar a <span className="font-bold">{contactoAEliminar.nombre}</span>?
                        </p>
                        <div className="flex gap-3 justify-end">
                            <BotonAccion
                                texto="Cancelar"
                                variante="secundario"
                                onClick={() => {
                                    setModalAbierto(false);
                                    setContactoAEliminar(null);
                                }}
                            />
                            <BotonAccion
                                texto="Eliminar"
                                variante="peligro"
                                onClick={() => eliminarContacto(contactoAEliminar.id)}
                            />
                        </div>
                    </>
                )}
            </Modal>
        </div>
    );
}

export default ListaContactos;