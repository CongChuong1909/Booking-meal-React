import React, { Fragment } from "react";
import AvalableMeals from "./AvalableMeals/AvalableMeals";
import MealsSumary from "./MealsSumary/MealsSumary";

function Meals(props) {
    return (
        <Fragment>
            <MealsSumary />
            <AvalableMeals />
        </Fragment>
    );
}

export default Meals;
