import { createContext, useContext, useReducer, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import useNotificacion from '../hooks/useNotificacion';

const NotasContext = createContext();

const estadoInicial = {
    notas: [],
    filtroCategoria: 'todas',
    busqueda: ''
};

// Cargar notas desde localStorage (solo las notas, no los filtros)
const cargarNotas = () => {
    try {
        const guardado = localStorage.getItem('notas');
        if (guardado) {
            const notas = JSON.parse(guardado);
            if (Array.isArray(notas) && notas.length > 0) {
                return notas;
            }
        }
    } catch (error) {
        console.error('Error al cargar notas:', error);
    }
    // Si no hay notas guardadas, usar las precargadas
    return [
        {
            id: Date.now().toString() + '1',
            titulo: 'Revisar proyecto de React',
            contenido: 'Revisar el código del laboratorio 4 y preparar la entrega final.',
            categoria: 'trabajo',
            fijada: true,
            fechaCreacion: new Date(Date.now() - 86400000 * 2).toISOString()
        },
        {
            id: Date.now().toString() + '2',
            titulo: 'Estudiar Custom Hooks',
            contenido: 'Profundizar en useLocalStorage, useNotificacion y otros hooks personalizados.',
            categoria: 'estudio',
            fijada: true,
            fechaCreacion: new Date(Date.now() - 86400000 * 1).toISOString()
        },
        {
            id: Date.now().toString() + '3',
            titulo: 'Hacer ejercicio',
            contenido: 'Salir a correr 30 minutos o hacer una rutina de ejercicios en casa.',
            categoria: 'personal',
            fijada: false,
            fechaCreacion: new Date().toISOString()
        },
        {
            id: Date.now().toString() + '4',
            titulo: 'Idea para nueva app',
            contenido: 'Crear una aplicación de seguimiento de hábitos con gamificación.',
            categoria: 'ideas',
            fijada: false,
            fechaCreacion: new Date().toISOString()
        },
        {
            id: Date.now().toString() + '5',
            titulo: 'Preparar presentación',
            contenido: 'Preparar la presentación del proyecto final para la clase de React.',
            categoria: 'trabajo',
            fijada: false,
            fechaCreacion: new Date(Date.now() - 86400000 * 3).toISOString()
        }
    ];
};

// Estado inicial completo
const obtenerEstadoInicial = () => ({
    notas: cargarNotas(),
    filtroCategoria: 'todas',
    busqueda: ''
});

function notasReducer(state, action) {
    switch (action.type) {
        case 'AGREGAR_NOTA': {
            const nuevaNota = {
                id: Date.now().toString(),
                ...action.payload,
                fechaCreacion: new Date().toISOString()
            };
            return {
                ...state,
                notas: [nuevaNota, ...state.notas]
            };
        }
        case 'ELIMINAR_NOTA': {
            return {
                ...state,
                notas: state.notas.filter(nota => nota.id !== action.payload)
            };
        }
        case 'EDITAR_NOTA': {
            return {
                ...state,
                notas: state.notas.map(nota =>
                    nota.id === action.payload.id
                        ? { ...nota, ...action.payload.datos }
                        : nota
                )
            };
        }
        case 'TOGGLE_FIJADA': {
            return {
                ...state,
                notas: state.notas.map(nota =>
                    nota.id === action.payload
                        ? { ...nota, fijada: !nota.fijada }
                        : nota
                )
            };
        }
        case 'CAMBIAR_FILTRO': {
            return {
                ...state,
                filtroCategoria: action.payload
            };
        }
        case 'CAMBIAR_BUSQUEDA': {
            return {
                ...state,
                busqueda: action.payload
            };
        }
        default:
            return state;
    }
}

export function NotasProvider({ children }) {
    const [state, dispatch] = useReducer(notasReducer, obtenerEstadoInicial());
    const { notificacion, mostrar, cerrar } = useNotificacion(3000);

    // Persistir en localStorage cada vez que cambien las notas
    useEffect(() => {
        try {
            localStorage.setItem('notas', JSON.stringify(state.notas));
        } catch (error) {
            console.error('Error al guardar notas:', error);
        }
    }, [state.notas]);

    const agregarNota = (datos) => {
        dispatch({ type: 'AGREGAR_NOTA', payload: datos });
        mostrar('✅ Nota creada correctamente', 'exito');
    };

    const eliminarNota = (id) => {
        dispatch({ type: 'ELIMINAR_NOTA', payload: id });
        mostrar('🗑️ Nota eliminada correctamente', 'info');
    };

    const editarNota = (id, datos) => {
        dispatch({ type: 'EDITAR_NOTA', payload: { id, datos } });
        mostrar('✏️ Nota actualizada correctamente', 'exito');
    };

    const toggleFijada = (id) => {
        const nota = state.notas.find(n => n.id === id);
        dispatch({ type: 'TOGGLE_FIJADA', payload: id });
        mostrar(nota?.fijada ? '📌 Nota desfijada' : '⭐ Nota fijada', 'info');
    };

    const cambiarFiltro = (categoria) => {
        dispatch({ type: 'CAMBIAR_FILTRO', payload: categoria });
    };

    const cambiarBusqueda = (texto) => {
        dispatch({ type: 'CAMBIAR_BUSQUEDA', payload: texto });
    };

    const value = {
        notas: state.notas,
        filtroCategoria: state.filtroCategoria,
        busqueda: state.busqueda,
        notificacion,
        mostrarNotificacion: mostrar,
        cerrarNotificacion: cerrar,
        agregarNota,
        eliminarNota,
        editarNota,
        toggleFijada,
        cambiarFiltro,
        cambiarBusqueda
    };

    return (
        <NotasContext.Provider value={value}>
            {children}
        </NotasContext.Provider>
    );
}

export function useNotas() {
    const context = useContext(NotasContext);
    if (!context) {
        throw new Error('useNotas debe ser usado dentro de un NotasProvider');
    }
    return context;
}

export default NotasContext;