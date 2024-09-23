/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

// Crea el contexto
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Función para agregar productos al carrito
    const addToCart = (product) => {
        console.log(product);
        setCartItems((prevItems) => {
            // Busca si el producto ya está en el carrito
            const existingItem = prevItems.find(item => item.idproducto === product.idproducto);

            if (existingItem) {
                // Si el producto ya está en el carrito, solo incrementa la cantidad
                return prevItems.map(item =>
                    item.idproducto === product.idproducto
                        ? { ...item, qty: item.qty + 1 }
                        : item
                );
            } else {
                // Si es un nuevo producto, lo agrega al carrito con una cantidad de 1
                return [...prevItems, { ...product, qty: 1 }];
            }
        });
    };

    // Nueva función para eliminar un producto del carrito
    const removeFromCart = (productId) => {
        setCartItems((prevItems) => prevItems.filter(item => item.idproducto !== productId));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
