import { NavLink, Outlet } from 'react-router-dom';
import { useNotas } from '../context/NotasContext';

function Layout() {
    const { notas, notificacion, cerrarNotificacion } = useNotas();

    return (
        <div className="min-h-screen bg-[#f0f4f8] flex flex-col">
            {/* NOTIFICACIONES TOAST */}
            {notificacion && (
                <div className={`fixed top-4 right-4 z-50 p-4 rounded-xl shadow-lg max-w-md animate-slideIn ${
                    notificacion.tipo === 'exito' 
                        ? 'bg-green-50 border-2 border-green-300 text-green-800'
                        : 'bg-blue-50 border-2 border-blue-300 text-blue-800'
                }`}>
                    <div className="flex items-center justify-between gap-4">
                        <p className="font-medium">{notificacion.mensaje}</p>
                        <button
                            onClick={cerrarNotificacion}
                            className="text-gray-400 hover:text-gray-600"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}

            {/* Encabezado */}
            <header className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        {/* Botón de navegación a laboratorios */}
                        <button
                            onClick={() => window.location.href = '/'}
                            className="flex items-center gap-2 px-4 py-2 bg-[#1e293b] text-white font-semibold rounded-lg hover:bg-[#334155] transition-colors duration-200 shadow-md hover:shadow-lg"
                            title="Volver a los laboratorios"
                        >
                            <span className="text-lg">←</span>
                            <span className="hidden sm:inline">Laboratorios</span>
                        </button>

                        {/* Título */}
                        <h1 className="text-2xl md:text-3xl font-extrabold text-[#1e293b] text-center flex-1">
                            📝 MisNotas
                        </h1>

                        {/* Espacio para mantener el centrado */}
                        <div className="w-20 md:w-32"></div>
                    </div>
                </div>
            </header>

            {/* Barra de navegación */}
            <nav className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-3">
                    <div className="flex flex-wrap items-center justify-center gap-2">
                        <NavLink
                            to=""
                            end
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                                    isActive
                                        ? 'bg-[#1e293b] text-white shadow-md'
                                        : 'text-[#1e293b] hover:bg-gray-100'
                                }`
                            }
                        >
                            🏠 Inicio
                        </NavLink>
                        <NavLink
                            to="notas"
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                                    isActive
                                        ? 'bg-[#1e293b] text-white shadow-md'
                                        : 'text-[#1e293b] hover:bg-gray-100'
                                }`
                            }
                        >
                            📋 Notas
                        </NavLink>
                        <NavLink
                            to="notas/nueva"
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                                    isActive
                                        ? 'bg-[#1e293b] text-white shadow-md'
                                        : 'text-[#1e293b] hover:bg-gray-100'
                                }`
                            }
                        >
                            ➕ Nueva Nota
                        </NavLink>
                    </div>
                </div>
            </nav>

            {/* Contador de notas */}
            <div className="bg-blue-50 border-b border-blue-200 py-2">
                <div className="max-w-7xl mx-auto px-4">
                    <p className="text-sm text-blue-700 text-center">
                        📝 Total de notas: <span className="font-bold">{notas.length}</span>
                    </p>
                </div>
            </div>

            {/* Contenido principal */}
            <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8">
                <Outlet />
            </main>

            {/* Pie de página */}
            <footer className="bg-white border-t border-gray-200 py-4 mt-auto">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-sm text-gray-500">© 2026 MisNotas</p>
                </div>
            </footer>
        </div>
    );
}

export default Layout;