import { useContext } from "react";
import { CartContext } from "../context/CartProvider ";
import { useNavigate } from "react-router-dom";
import ClientSelect from "./ClientSelect";

const Cart = () => {
    const navigate = useNavigate();
    const { cartItems, removeFromCart } = useContext(CartContext);

    const calculateTotal = () => {
        return cartItems.reduce(
            (total, item) => total + item.precio * item.qty * item.qty,
            0
        );
    };

    const handleViewDasboard = () => {
        navigate('/dashboard');
    };

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
                            <ClientSelect />
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
                    <button type="button" className=" mt-5 text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2">
                        <svg className="w-4 h-4 me-2 -ms-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="paypal" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4 .7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9 .7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"></path></svg>
                        Total a pagar:  <b>${calculateTotal()} </b>
                    </button>
                </table>
            </div>
        </div>
    )
}

export default Cart