import { Link } from 'react-router-dom';

function NoEncontrada({link}) {
    return (
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200 text-center">
            <div className="text-9xl mb-4">🤔</div>
            <h1 className="text-6xl font-extrabold text-gray-800 mb-4">404</h1>
            <h2 className="text-2xl font-bold text-gray-600 mb-6">
                ¡Ups! Página no encontrada
            </h2>
            <p className="text-gray-500 mb-8">
                La página que estás buscando no existe o ha sido movida.
            </p>
            <Link
                to={link || "/"}
                className="inline-block px-6 py-3 bg-[#1e293b] text-white font-semibold rounded-lg hover:bg-[#334155] transition-colors duration-200"
            >
                🏠 Volver al inicio
            </Link>
        </div>
    );
}

export default NoEncontrada;