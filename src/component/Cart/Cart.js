import React from "react";
import { useState } from "react";
import { useContext } from "react";
import CartContext from "../../Store/CartContext";
import Modal from "../UI/Modal/Modal";
import classes from "./Cart.module.css";
import CartItems from "./CartItems";
import Checkout from "./Checkout";

function Cart(props) {
    const [isCheckOut, setIsCheckOut] = useState(false);

    const cartCtx = useContext(CartContext);
    const price = `$${cartCtx.totalAmount.toFixed(2)}`;
    const listMealsCard = cartCtx.items;
    const hasItems = listMealsCard.length > 0;
    const orderHandler = () => {
        setIsCheckOut(true);
    };
    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };
    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
    };
    const cartItems = (
        <ul className={classes["cart-items"]}>
            {listMealsCard.map((item) => (
                <CartItems
                    key={item.id}
                    {...item}
                    onAdd={cartItemAddHandler.bind(null, item)}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                />
            ))}
        </ul>
    );

    const modalActions = (
        <div className={classes.actions}>
            <button
                onClick={props.onHideCart}
                className={classes["button--alt"]}
            >
                Close
            </button>
            {hasItems && (
                <button onClick={orderHandler} className={classes.button}>
                    Order
                </button>
            )}
        </div>
    );
    return (
        <Modal onClick={props.onHideCart}>
            {cartItems}
            <div className={classes.cartEmptyWrapp}>
                {!hasItems && (
                    <img
                        className={classes.cartEmpty}
                        src="https://shobhikaweddings.com/public/images/cart.jpg"
                    />
                )}
            </div>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{price}</span>
            </div>
            {isCheckOut && <Checkout onCancel={props.onHideCart} />}
            {!isCheckOut && modalActions}
        </Modal>
    );
}

export default Cart;
