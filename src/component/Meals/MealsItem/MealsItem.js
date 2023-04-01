import React from "react";
import { useContext } from "react";
import MealItemForm from "./MealItemForm/MealItemForm";
import classes from "./MealsItem.module.css";
import cartContext from "../../../Store/CartContext";
import { useState } from "react";
function MealsItem(props) {
    const cartCtx = useContext(cartContext);
    const price = `$${props.price.toFixed(2)}`;

    ///gọi lấy dữ liệu từ child sang parent thông qua callback
    ///lấy dữ số lượng đặt hàng từ mealItemForm
    const addToCartHandler = (amount) => {

        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price,
            image: props.image,
        });
    };

    return (
        <li className={classes.meal}>
            <div className={classes.infoMeal}>
                <div>
                    <img className={classes.image} src={props.image} alt="" />
                </div>
                <div>
                    <h3>{props.name}</h3>
                    <div className={classes.description}>
                        {props.decription}
                    </div>
                    <div className={classes.price}>{price}</div>
                </div>
            </div>
            <div>
                <MealItemForm onAddToCart={addToCartHandler} />
            </div>
        </li>
    );
}

export default MealsItem;
