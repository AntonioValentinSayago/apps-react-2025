import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../helpers/Navbar';

const HistorialCompras = () => {

    const [compras, setCompras] = useState([]);
    const token = localStorage.getItem('authToken'); // Obtener el token de autenticación

    useEffect(() => {
        const fetchCompras = async () => {
            try {
                const response = await axios.get('https://curso.tgconsulting.online/minipos/api/compra/', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setCompras(response.data); // Guardar las compras en el estado
            } catch (error) {
                console.error('Error al obtener el historial de compras:', error);
            }
        };

        fetchCompras();
    }, []);

    return (
        <div>
            <Navbar />
            <h1>Historial de Compras</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID Compra</th>
                        <th>Cliente</th>
                        <th>Empleado</th>
                        <th>Total</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {compras.map((compra) => (
                        <tr key={compra.idcompra}>
                            <td>{compra.idcompra}</td>
                            <td>{compra.cliente.nombre} {compra.cliente.apellido}</td>
                            <td>{compra.usuario.nombre} {compra.cliente.email}</td>
                            <td>${compra.total}</td>
                            <td>{new Date(compra.fecha).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default HistorialCompras