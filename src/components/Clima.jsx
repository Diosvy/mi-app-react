function Clima() {

    const temperatura = 22;

    // Cálculo de sensación según la temperatura
    let sensacion = '';
    let recomendacion = '';

    if (temperatura < 15) {
        sensacion = 'frío';
        recomendacion = 'Lleva abrigo';
    } else if (temperatura >= 15 && temperatura <= 25) {
        sensacion = 'agradable';
        recomendacion = 'Disfruta el día';
    } else {
        sensacion = 'caluroso';
        recomendacion = 'Mantente hidratado';
    }

    return (
        <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-sm border border-gray-200">
            <h3 className="text-xl font-bold text-[#1e293b] mb-4 text-center">
                Clima Actual
            </h3>
            
            <div className="space-y-3">
                {/* Temperatura */}
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                    <span className="text-gray-600 font-medium">Temperatura</span>
                    <span className="text-2xl font-bold text-[#2563eb]">
                        {temperatura}°C
                    </span>
                </div>

                {/* Sensación térmica */}
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                    <span className="text-gray-600 font-medium">Sensación</span>
                    <span className={`font-semibold px-3 py-1 rounded-full text-sm ${
                        sensacion === 'frío' ? 'bg-blue-100 text-blue-700' :
                        sensacion === 'agradable' ? 'bg-green-100 text-green-700' :
                        'bg-red-100 text-red-700'
                    }`}>
                        {sensacion}
                    </span>
                </div>

                {/* Recomendación */}
                <div className="mt-4 p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <span className="text-gray-700 font-medium">Recomendación:</span>
                    <p className="text-gray-800 mt-1 font-semibold">
                        {recomendacion}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Clima;