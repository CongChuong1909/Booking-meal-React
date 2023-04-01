import React, { useEffect, useState } from "react";
import CartIcon from "../../Cart/CartIcon";
import classes from "./CartButton.module.css";
import { useContext } from "react";
import cartContext from "../../../Store/CartContext";
function CartButton(props) {
    const cartCtx = useContext(cartContext);
    const [isChangeCart, setIsChangeCart] = useState(false);
    const { items } = cartCtx;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setIsChangeCart(true);

        const timer = setTimeout(() => {
            setIsChangeCart(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);
    //hàm tính tổng số lượng của giỏ hàng
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const classEffectButton = `${classes.button} ${
        isChangeCart && classes.bump
    }`;
    return (
        <button onClick={props.onClick} className={classEffectButton}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
}

export default CartButton;
