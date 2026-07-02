import { useState, useEffect } from 'react';

/**
 * Hook personalizado para sincronizar estado con localStorage
 * @param {string} clave - Clave para localStorage
 * @param {any} valorInicial - Valor por defecto si no existe en localStorage
 * @returns {[any, function]} - Array con el valor actual y función setter
 */
function useLocalStorage(clave, valorInicial) {
    // Función para leer el valor de localStorage (solo al montar - lazy)
    const leerValorInicial = () => {
        try {
            const item = localStorage.getItem(clave);
            if (item !== null) {
                console.log(`✅ useLocalStorage: Datos cargados desde localStorage (${clave})`);
                return JSON.parse(item);
            }
        } catch (error) {
            console.warn(`⚠️ useLocalStorage: Error al leer "${clave}":`, error);
        }
        console.log(`📝 useLocalStorage: Usando valor inicial para "${clave}"`);
        return valorInicial;
    };

    const [valor, setValor] = useState(leerValorInicial);

    // Sincronizar con localStorage cada vez que el valor cambie
    useEffect(() => {
        try {
            localStorage.setItem(clave, JSON.stringify(valor));
            console.log(`💾 useLocalStorage: Datos guardados en localStorage (${clave})`);
        } catch (error) {
            console.warn(`⚠️ useLocalStorage: Error al guardar "${clave}":`, error);
        }
    }, [clave, valor]);

    return [valor, setValor];
}

export default useLocalStorage;