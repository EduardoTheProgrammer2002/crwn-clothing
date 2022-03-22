import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
    //find productToAdd in cartItems
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    //if found, increment the quantity
    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
        {...cartItem, quantity: cartItem.quantity + 1}:
        cartItem
        ) 
    }

    //create a new cartItem and return a new array with the new cartItem
    return [...cartItems, {...productToAdd, quantity:1}];
};

export const CartContext = createContext({
    open: false,
    setOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0
    
});

export const CartProvider = ({children}) => {
    const [open, setOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);

    },[cartItems]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const value = {open, setOpen, cartItems, addItemToCart, cartCount};

    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
}