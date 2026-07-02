import { Routes, Route } from 'react-router-dom'; // ← SOLO Routes y Route, SIN BrowserRouter
import { NotasProvider } from '../context/NotasContext';
import Layout from '../components/Layout';
import Inicio from './Inicio';
import Notas from './Notas';
import NuevaNota from './NuevaNota';
import NoEncontrada from './NoEncontrada';
import DetalleNota from './DetalleNota';
import EditarNota from './EditarNota';

export default function Ejercicio2() {
    return (
        <NotasProvider>
            <Routes> {/* ← SIN BrowserRouter, SOLO Routes */}
                <Route path="/" element={<Layout />}>
                    <Route index element={<Inicio />} />
                    <Route path="notas" element={<Notas />} />
                    <Route path="notas/nueva" element={<NuevaNota />} />
                    <Route path="notas/:id" element={<DetalleNota />} />
                    <Route path="notas/:id/editar" element={<EditarNota />} />
                    <Route path="*" element={<NoEncontrada link={"/ejercicio2/"} />} />
                </Route>
            </Routes>
        </NotasProvider>
    ); 
}