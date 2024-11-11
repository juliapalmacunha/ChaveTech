import React, { useState } from 'react';
import CartContext from './CartContext';

function CartProvider({ children }) {

    const [cartItems, setCartItems] = useState([]);


    const addItemToCart = (nome, preco, url) => {

        const itemJaExiste = cartItems.find(item => item.nome === nome);
        if (itemJaExiste) {
            setCartItems((prevItems) =>
                prevItems.map(item =>
                    item.nome === nome
                        ? {
                            ...item,
                            quantidade: item.quantidade + 1,
                            preco: (preco * (item.quantidade + 1)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                        }
                        : item
                )
            );
        } else {

            const novoItem = {
                url,
                nome,
                quantidade: 1,
                preco: preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            };

            setCartItems((prevItems) => [...prevItems, novoItem]);
        }
    };

    return (
        <CartContext.Provider value={{ cartItems, addItemToCart }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;
