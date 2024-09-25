import { useContext, useState } from "react";
import { CartContext } from "../context/CartProvider ";
import { useNavigate } from "react-router-dom";
import ClientSelect from "./ClientSelect";

const Cart = () => {
    const navigate = useNavigate();
    const { cartItems, removeFromCart } = useContext(CartContext);

    const [selectedClient, setSelectedClient] = useState(null);
    const [loading, setLoading] = useState(false);


    const calculateTotal = () => {
        return cartItems.reduce(
            (total, item) => total + item.precio * item.qty * item.qty,
            0
        );
    };

    const handleViewDasboard = () => {
        navigate('/dashboard');
    };

    // * Guardar Carrito de compra
    const handleClientSelect = (clientId) => {
        setSelectedClient(clientId); // Guarda el cliente seleccionado
    };

    const handleSubmitSale = () => {
        if (!selectedClient) {
            alert('Please select a client');
            return;
        }

        setLoading(true);
        console.log('iniciando venta')
    }
    return (
        <div className="max-w-[720px] mx-auto">
            <div className="block mb-4 mx-auto border-b border-slate-300 pb-2 max-w-[360px]">
                <a className='block w-full px-4 py-2 text-center text-slate-700 transition-all '>
                    Punto de Venta <b><button onClick={handleViewDasboard}>Regresar</button></b>.
                </a>
            </div>
            <div className="w-full flex justify-between items-center mb-3 mt-1 pl-3">
                <div>
                    <h3 className="text-lg font-semibold text-slate-800">Projects with Invoices</h3>
                    <p className="text-slate-500">Overview of the current activities.</p>
                </div>
                <div className="ml-3">
                    <div className="w-full max-w-sm min-w-[200px] relative">
                        <div className="relative">
                            <ClientSelect onClientSelect={handleClientSelect} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
                <table className="w-full text-left table-auto min-w-max">
                    <thead>
                        <tr>
                            <th className="p-4 border-b border-slate-200 bg-slate-50">
                                <p className="text-sm font-normal leading-none text-slate-500">
                                    Producto
                                </p>
                            </th>
                            <th className="p-4 border-b border-slate-200 bg-slate-50">
                                <p className="text-sm font-normal leading-none text-slate-500">
                                    $ Precio
                                </p>
                            </th>
                            <th className="p-4 border-b border-slate-200 bg-slate-50">
                                <p className="text-sm font-normal leading-none text-slate-500">
                                    Cantidad
                                </p>
                            </th>
                            <th className="p-4 border-b border-slate-200 bg-slate-50">
                                <p className="text-sm font-normal leading-none text-slate-500">
                                    Sub Total
                                </p>
                            </th>
                            <th className="p-4 border-b border-slate-200 bg-slate-50">
                                <p className="text-sm font-normal leading-none text-slate-500">
                                    Eliminar
                                </p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((item) => (
                            <tr
                                className="hover:bg-slate-50 border-b border-slate-200"
                                key={item.idproducto}
                            >
                                <td className="p-4 py-5">
                                    <p className="block font-semibold text-sm text-slate-800">
                                        {item.nombre}
                                    </p>
                                </td>
                                <td className="p-4 py-5">
                                    <p className="block font-semibold text-sm text-slate-800">
                                        {item.precio}
                                    </p>
                                </td>
                                <td className="p-4 py-5">
                                    <p className="block font-semibold text-sm text-slate-800">
                                        {item.qty}
                                    </p>
                                </td>
                                <td className="p-4 py-5">
                                    <p className="block font-semibold text-sm text-slate-800">
                                        ${item.precio * item.qty}
                                    </p>
                                </td>
                                <td>
                                    <button onClick={() => removeFromCart(item.idproducto)}>
                                        🗑️
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <button
                        className=" mt-5 text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2"
                    >
                        Total a pagar:  <b>${calculateTotal()} </b>
                    </button>
                </table>
                <button onClick={handleSubmitSale} disabled={loading}>
                    {loading ? 'Procesando...' : 'Confirmar Venta'}
                </button>
            </div>
        </div>
    )
}

export default Cart