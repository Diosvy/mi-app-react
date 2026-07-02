import Acordeon from  '../src/components/Acordeon'
import Alerta from '../src/components/Alerta'

import BotonAccion from '../src/components/BotonAccion';
import Modal from '../src/components/Modal';
import Contador from '../src/components/Contador';

import ListaContactos from '../src/components/ListaContactos';

import FormularioEvento from '../src/components/FormularioEvento';

import { useState } from 'react';



export default function Laboratorio3() {

    // Estado para controlar la visibilidad del modal
    const [modalAbierto, setModalAbierto] = useState(false);

    // Funciones para abrir y cerrar el modal
    const abrirModal = () => setModalAbierto(true);
    const cerrarModal = () => setModalAbierto(false);

    return ( 
        <div className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-md p-6 mb-6 w-full border border-blue-200">
            <h2 className="text-3xl font-bold text-[#1e293b] mb-1">
                Laboratorio 3
            </h2> 
             <div className="ejercicios flex flex-col flex-wrap w-full gap-6 p-2 bg-white rounded-2xl shadow-lg border border-gray-100">
                <Acordeon titulo="Ejercicio 1" isOpen={true}>
                        <Alerta tipo="info" titulo="Información">
                            <p>Este es un mensaje informativo. Puedes usarlo para mostrar detalles adicionales o notificaciones generales.</p>
                        </Alerta>

                        {/* Alerta de tipo Éxito */}
                        <Alerta tipo="exito" titulo="Operación exitosa">
                            <p>¡Tu proyecto ha sido creado correctamente! Ya puedes empezar a trabajar en él.</p>
                        </Alerta>

                        <Alerta tipo="advertencia" titulo="Advertencia">
                             <p>El servidor estará en mantenimiento el día domingo de 2:00 AM a 5:00 AM. Por favor, guarda tu trabajo.</p>
                        </Alerta>

                        {/* Alerta de tipo Error */}
                        <Alerta tipo="error" titulo="Error crítico">
                            <p>No se pudo establecer conexión con la base de datos. Verifica tu conexión a Internet e intenta nuevamente.</p>
                        </Alerta>
                </Acordeon>
                <Acordeon titulo="Ejercicio 2">
                    {/* Botón para abrir el modal */}
                    <div className="flex justify-center items-center p-2">
                            <BotonAccion
                                texto="Abrir Modal"
                                variante="primario"
                                onClick={abrirModal}
                            />
                    </div>
                    

                    {/* Modal */}
                    <Modal
                        titulo="📋 Información Importante"
                        abierto={modalAbierto}
                        onCerrar={cerrarModal}
                    >
                        <Contador />
                        <div className="flex justify-end">
                            <BotonAccion
                                texto="Cerrar"
                                variante="secundario"
                                onClick={cerrarModal}
                            />
                        </div>
                    </Modal>


                </Acordeon>
                <Acordeon titulo="Ejercicio 3">
                    <div className="w-full flex justify-center items-center p-2">
                        <ListaContactos />
                    </div>
                   
                </Acordeon>
                <Acordeon titulo="Ejercicio 4">
                    <div className="w-full flex justify-center items-center p-2">
                        <FormularioEvento />
                    </div>
                </Acordeon>
            </div>
        </div>
        
    )
}