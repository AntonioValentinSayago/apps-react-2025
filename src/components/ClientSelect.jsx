/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";

const ClientSelect = ({ onClientSelect }) => {
    const [clients, setClients] = useState([]);
    const [selectedClient, setSelectedClient] = useState(null);

    // Función para obtener los clientes desde la API
    const fetchClients = async () => {
        try {
            const token = localStorage.getItem('authToken'); // Obtén el token desde el localStorage
            const response = await axios.get('https://curso.tgconsulting.online/minipos/api/cliente/', {
                headers: {
                    Authorization: `Bearer ${token}`, // Añade el token en el header de la petición
                },
            });
            setClients(response.data); // Guarda la lista de clientes en el estado
        } catch (error) {
            console.error('Error fetching clients:', error);
        }
    };

    useEffect(() => {
        fetchClients(); // Llama a la función para obtener los clientes al montar el componente
    }, []);

    // Manejar el cambio de selección del cliente
    const handleClientChange = (e) => {
        const clientId = e.target.value;
        setSelectedClient(clientId);
        onClientSelect(clientId); // Llama la función pasada desde el padre
    };

    return (
        <div className="max-w-sm mx-auto">
            <label htmlFor="client-select" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Seleccione un cliente:</label>
            <select
                id="client-select"
                value={selectedClient}
                onChange={handleClientChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                <option value="">-- Seleccionar cliente --</option>
                {clients.map((client) => (
                    <option key={client.id} value={client.id}>
                        {client.nombre} {/* Cambia según el campo de nombre en la respuesta de la API */}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default ClientSelect