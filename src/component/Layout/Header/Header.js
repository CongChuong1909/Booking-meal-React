import React, { Fragment } from "react";
import classes from "./Header.module.css";
import mealImg from "../../../assets/meals.jpg";
import CartButton from "../CartButton/CartButton";

function Header(props) {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <CartButton onClick={props.onShowCart} />
            </header>
            <div className={classes["main-image"]}>
                <img src={mealImg} alt="A table full of delicious food!" />
            </div>
        </Fragment>
    );
}

export default Header;
