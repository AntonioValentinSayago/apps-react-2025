import axios from "axios";
import { useEffect, useState } from "react";

const ClientSelect = () => {
    const [clients, setClients] = useState([]);
    const [selectedClient, setSelectedClient] = useState('');

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
        setSelectedClient(e.target.value);
    };

    return (
        <div>
            <label htmlFor="client-select">Seleccione un cliente:</label>
            <select id="client-select" value={selectedClient} onChange={handleClientChange}>
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