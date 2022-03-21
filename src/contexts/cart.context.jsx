import { createContext, useState } from "react";
export const CartContext = createContext({
    open: false,
    setOpen: () => null
});

export const CartProvider = ({children}) => {
    const [open, setOpen] = useState(false);
    const value = {open, setOpen};

    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
}