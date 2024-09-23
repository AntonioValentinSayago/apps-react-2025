import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { CartContext } from '../context/CartProvider ';

const getProducts = async () => {
    const token = localStorage.getItem('authToken');
    try {
        const response = await axios.get('https://curso.tgconsulting.online/minipos/api/producto/', {
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
    const { addToCart } = useContext(CartContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const productsData = await getProducts();
            setProducts(productsData);
        };

        fetchProducts();
    }, []);

    return (
        <div className='container m-10'>
            <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-slate-900 md:text-5xl lg:text-3xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Better Data</span> Scalable AI.</h1>
            <div className='container m-10 grid grid-cols-4 gap-4'>

                {products.map((product, index) => (
                    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-600" key={index}>
                        <a href="#">
                            <img className="p-8 rounded-t-lg" src="https://w7.pngwing.com/pngs/314/871/png-transparent-apple-watch-series-2-apple-watch-series-3-smartwatch-watch-watch-accessory-digital-accessories.png" alt="product image" />
                        </a>
                        <div className="px-5 pb-5">
                            <a href="#">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.nombre}</h5>
                            </a>
                            <div className="flex items-center mt-2.5 mb-5">
                                <div className='className="flex items-center space-x-1 rtl:space-x-reverse"'>
                                    <p className='text-yellow-200'>{product.descripcion}</p>
                                </div>
                                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">Disponible {product.stock}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.precio}</span>
                                <button
                                    type='button'
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    onClick={() => addToCart(product)}
                                >
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}


            </div>
        </div>
    );
};

export default Productos;
