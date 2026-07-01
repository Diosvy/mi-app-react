function ListaProductos() {
   
    const productos = [
        {
            id: 1,
            nombre: 'Laptop Pro',
            precio: 1299.99,
            disponible: true
        },
        {
            id: 2,
            nombre: 'Auriculares Bluetooth',
            precio: 89.50,
            disponible: true
        },
        {
            id: 3,
            nombre: 'Monitor 27" 4K',
            precio: 449.00,
            disponible: false
        },
        {
            id: 4,
            nombre: 'Teclado Mecánico',
            precio: 120.75,
            disponible: true
        },
        {
            id: 5,
            nombre: 'Mouse Inalámbrico',
            precio: 35.99,
            disponible: false
        }
    ];

    return (
        <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-3xl border border-gray-200">
            {/* Título */}
            <h3 className="text-2xl font-bold text-[#1e293b] mb-1">
                Lista de Productos
            </h3>
            
            {/* Párrafo con el total de productos */}
            <p className="text-gray-600 text-sm mb-4">
                Total de productos: <span className="font-semibold text-[#2563eb]">{productos.length}</span>
            </p>

            {/* Tabla de productos */}
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    
                    <thead>
                        <tr className="bg-gray-100 border-b-2 border-gray-200">
                            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 uppercase tracking-wider">
                                Nombre
                            </th>
                            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 uppercase tracking-wider">
                                Precio
                            </th>
                            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 uppercase tracking-wider">
                                Estado
                            </th>
                        </tr>
                    </thead>

                   
                    <tbody>
                        {productos.map((producto) => (
                            <tr 
                                key={producto.id} 
                                className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200"
                            >
                                {/* Nombre */}
                                <td className="py-3 px-4 text-gray-800 font-medium">
                                    {producto.nombre}
                                </td>
                                
                                {/* Precio formateado */}
                                <td className="py-3 px-4 text-gray-800">
                                    ${producto.precio.toFixed(2)}
                                </td>
                                
                                {/* Estado con estilos en línea */}
                                <td className="py-3 px-4">
                                    <span 
                                        style={{
                                            color: producto.disponible ? '#16a34a' : '#dc2626',
                                            fontWeight: '600',
                                            backgroundColor: producto.disponible ? '#dcfce7' : '#fee2e2',
                                            padding: '4px 12px',
                                            borderRadius: '9999px',
                                            fontSize: '0.875rem',
                                            display: 'inline-block'
                                        }}
                                    >
                                        {producto.disponible ? 'Disponible' : 'Agotado'}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

           
            <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
                <p className="text-sm text-blue-600 flex items-center justify-between">
                    <span>Productos disponibles:</span>
                    <span className="font-bold">
                        {productos.filter(p => p.disponible).length}
                    </span>
                </p>
            </div>
        </div>
    );
}

export default ListaProductos;