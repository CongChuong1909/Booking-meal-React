import React, { useReducer } from "react";
import cartReducer, { initialCartState } from "./CartReducer";
import { addItem, removeItem } from "./Action";
import CartContext from "./CartContext";

function CartProvider(props) {
    const [cartState, dispatchCartAction] = useReducer(
        cartReducer,
        initialCartState,
    );
    const addItemToCartHandler = (payload) => {
        dispatchCartAction(addItem(payload));
    };

    const removeItemFromCartHandler = (payload) => {
        dispatchCartAction(removeItem(payload));
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;
