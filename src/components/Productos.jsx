import { useEffect, useState } from 'react';
import axios from 'axios';

const getProducts = async () => {
    const token = localStorage.getItem('authToken');
    try {
        const response = await axios.get('https://curso.tgconsulting.online/minipos/api/categoria/', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data; // Devuelve los productos obtenidos
    } catch (error) {
        console.error('Error al obtener productos:', error);
        return [];
    }
};

const Productos = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const productsData = await getProducts();
            setProducts(productsData);
        };

        fetchProducts();
    }, []);

    console.log(products);

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>
                        {product.nombre} - {product.descripcion}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Productos;
