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
        <>
            <button onClick={handleViewDasboard}>Regresar</button>
            <h1>Carrito de Compras</h1>
            <ClientSelect/>
            <table>
                <thead>
                    <tr>
                        <th>Título del producto</th>
                        <th>Precio de venta</th>
                        <th>Impuesto</th>
                        <th>Total</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item) => (
                        <tr key={item.idproducto}>
                            <td>{item.nombre}</td>
                            <td>{item.precio}</td>
                            <td>{item.descripcion}</td>
                            <td>{item.qty}</td>
                            <td>${item.precio * item.qty}</td>
                            <td>
                                <button onClick={() => removeFromCart(item.idproducto)}>
                                    🗑️
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h2>Total: ${calculateTotal()}</h2>
        </>
    )
}

export default Cart