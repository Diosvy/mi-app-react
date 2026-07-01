function Perfil() {
    let nombre = "Juan Pérez";
    let profesion = "Desarrollador Web";
    let experiencia = "5 años de experiencia";
    let disponibilidad = true;

    return (
        <div className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-6 w-64 border border-gray-100">
            
            
            <h2 className="text-xl font-bold text-gray-800 mb-1">{nombre}</h2>
            
            <div className="flex flex-col justify-center mt-2 gap-2 w-full">
                <div className="bg-gray-50 rounded-lg px-3 py-2 border border-gray-100">
                    <span className="font-semibold text-[13px] text-blue-600 block">Profesión</span>
                    <span className="text-gray-700 text-sm">{profesion}</span>
                </div>
                
                <div className="bg-gray-50 rounded-lg px-3 py-2 border border-gray-100">
                    <span className="font-semibold text-[13px] text-blue-600 block">Experiencia</span>
                    <span className="text-gray-700 text-sm">{experiencia}</span>
                </div>
                
                <div className="bg-gray-50 rounded-lg px-3 py-2 border border-gray-100">
                    <span className="font-semibold text-[13px] text-blue-600 block">Disponibilidad</span>
                    <span className={`text-sm font-medium ${disponibilidad ? 'text-green-600' : 'text-red-600'}`}>
                        {disponibilidad ? "✅ Disponible" : "❌ No disponible"}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Perfil;