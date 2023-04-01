import React, { useEffect } from "react";
import { useState } from "react";
import Card from "../../UI/Card/Card";
import { DUMMY_MEALS as dummyMeal } from "../DataMeals";
import MealsItem from "../MealsItem/MealsItem";
import classes from "./AvalableMeals.module.css";

function AvalableMeals(props) {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [httpError, setHttpError] = useState(null);
    useEffect(() => {
        const fetchMeals = async () => {
            setIsLoading(true);
            const response = await fetch(
                "https://food-order-app-9a5cd-default-rtdb.firebaseio.com/meals.json",
            );

            if (!response.ok) {
                throw new Error("Something is wrong!");
            }

            const responseData = await response.json();
            const loadedMeals = [];
            for (const key in responseData) {
                loadedMeals.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price,
                    image: responseData[key].image,
                });
            }
            setMeals(loadedMeals);
            setIsLoading(false);
        };
        fetchMeals().catch((error) => {
            setIsLoading(false);
            setHttpError(error.message);
        });
    }, []);
    console.log(meals);

    if (isLoading) {
        return (
            <section className={classes.loading}>
                <h4>Loading...</h4>
            </section>
        );
    }

    if (httpError) {
        return (
            <section className={classes.error}>
                <h4>{httpError}</h4>
            </section>
        );
    }

    const mealsList = meals.map((meal) => (
        <MealsItem key={meal.id} {...meal} />
    ));
    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    );
}

export default AvalableMeals;
