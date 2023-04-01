import classes from "./CartItems.module.css";
import React from "react";
const CartItems = (props) => {
    const price = `$${props.price.toFixed(2)}`;
    return (
        <li key={props.id} className={classes["cart-item"]}>
            <div className={classes.infoMeals}>
                <div className={classes.image}>
                    <img src={props.image} alt="" />
                </div>
                <div>
                    <h2>{props.name}</h2>
                    <div className={classes.summary}>
                        <span className={classes.price}>{price}</span>
                        <span className={classes.amount}>x {props.amount}</span>
                    </div>
                </div>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onRemove}>−</button>
                <button onClick={props.onAdd}>+</button>
            </div>
        </li>
    );
};

export default CartItems;
