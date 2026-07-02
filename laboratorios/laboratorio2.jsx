import Perfil from '../src/components/Perfil'
import Clima from '../src/components/Clima'
import EstadoPedido from '../src/components/EstadoPedido'
import MensajeBienvenida from '../src/components/MensajeBienvenida'
import ListaHabilidades from '../src/components/ListaHabilidades'
import ListaProductos from '../src/components/ListaProductos'
import ListaTareas from '../src/components/ListaTareas'
import Tarjeta from '../src/components/Tarjeta'
import Dashboard from '../src/components/Dashboard'

export default function Laboratorio2() {
    return (
        <div className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-md p-6 mb-6 w-full border border-blue-200">
            <h2 className="text-3xl font-bold text-[#1e293b] mb-1">
                Laboratorio 2
            </h2>
            <div className="ejercicios flex flex-wrap w-full gap-6 p-2 bg-white rounded-2xl shadow-lg border border-gray-100">
                

               <div className="ejercicio-1 flex flex-wrap justify-center items-center w-full gap-4 border border-gray-200 py-6 px-4 bg-[#f8fafc] rounded-xl">
                    <h3 className="w-full text-[#1e293b] font-bold text-2xl">
                        Ejercicio 1
                    </h3>
                    <Perfil />
                    <Perfil />
                    <Perfil />
                    <Perfil />
                    <Perfil />
                    <Perfil />
                </div>
                
                <div className="ejercicio-2 flex flex-wrap justify-center items-center w-full gap-4 border border-gray-200 py-6 px-4 bg-[#f8fafc] rounded-xl">
                    <h3 className="w-full text-[#1e293b] font-bold text-2xl">
                        Ejercicio 2-3
                    </h3>
                    <Clima />
                    <EstadoPedido />
                       
                </div>

                <div className="ejercicio-4 flex flex-wrap justify-center items-center w-full gap-4 border border-gray-200 py-6 px-4 bg-[#f8fafc] rounded-xl">
                    <h3 className="w-full text-[#1e293b] font-bold text-2xl">
                        Ejercicio 4
                    </h3>
                    <MensajeBienvenida />   
                       
                </div>
                
                <div className="ejercicio-5 flex flex-wrap justify-center items-center w-full gap-4 border border-gray-200 py-6 px-4 bg-[#f8fafc] rounded-xl">
                    <h3 className="w-full text-[#1e293b] font-bold text-2xl">
                        Ejercicio 5
                    </h3>
                    <ListaHabilidades />   
                       
                </div>
                <div className="ejercicio-6 flex flex-wrap justify-center items-center w-full gap-4 border border-gray-200 py-6 px-4 bg-[#f8fafc] rounded-xl">
                    <h3 className="w-full text-[#1e293b] font-bold text-2xl">
                        Ejercicio 6
                    </h3>
                    <ListaProductos />   
                       
                </div>
                <div className="ejercicio-7 flex flex-wrap justify-center items-center w-full gap-4 border border-gray-200 py-6 px-4 bg-[#f8fafc] rounded-xl">
                    <h3 className="w-full text-[#1e293b] font-bold text-2xl">
                        Ejercicio 7
                    </h3>
                    <ListaTareas     />   
                       
                </div>
                <div className="ejercicio-8 flex flex-wrap justify-center items-center w-full gap-4 border border-gray-200 py-6 px-4 bg-[#f8fafc] rounded-xl">
                    <h3 className="w-full text-[#1e293b] font-bold text-2xl">
                        Ejercicio 8
                    </h3>
                    <Tarjeta />   
                       
                </div>
                <div className="ejercicio-9 flex flex-wrap justify-center items-center w-full gap-4 border border-gray-200 py-6 px-4 bg-[#f8fafc] rounded-xl">
                    <h3 className="w-full text-[#1e293b] font-bold text-2xl">
                        Ejercicio 9
                    </h3>
                    <Dashboard />
                       
                </div>

            </div>


          
        </div>
    )
}