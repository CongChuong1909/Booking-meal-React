import React from "react";
import { useState } from "react";
import { useRef } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChar = (value) => value.trim().length === 5;

function Checkout(props) {
    const [valueInputForm, setValueInputForm] = useState({
        name: true,
        street: true,
        postal: true,
        city: true,
    });

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalInputRef = useRef();
    const cityInputRef = useRef();

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const name = nameInputRef.current.value;
        const street = streetInputRef.current.value;
        const postal = postalInputRef.current.value;
        const city = cityInputRef.current.value;

        const nameIsValid = !isEmpty(name);
        const streetIsValid = !isEmpty(street);
        const postalIsValid = isFiveChar(postal);
        const cityIsValid = !isEmpty(city);

        setValueInputForm({
            name: nameIsValid,
            street: streetIsValid,
            postal: postalIsValid,
            city: cityIsValid,
        });
        const formInvalid =
            nameIsValid && streetIsValid && postalIsValid && cityIsValid;

        if (!formInvalid) {
            return;
        }
    };
    const classesNameInvaid = `${classes.control} ${
        valueInputForm.name ? "" : classes.invalid
    }`;
    const classesStreetInvaid = `${classes.control} ${
        valueInputForm.street ? "" : classes.invalid
    }`;
    const classesPostalInvaid = `${classes.control} ${
        valueInputForm.postal ? "" : classes.invalid
    }`;
    const classesCityInvaid = `${classes.control} ${
        valueInputForm.city ? "" : classes.invalid
    }`;

    return (
        <form onSubmit={onSubmitHandler} className={classes.form}>
            <div className={classesNameInvaid}>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" ref={nameInputRef} />
                {!valueInputForm.name && <p>Please enter a valid name!</p>}
            </div>

            <div className={classesStreetInvaid}>
                <label htmlFor="street">Street</label>
                <input type="text" id="street" ref={streetInputRef} />
                {!valueInputForm.name && <p>Please enter a valid street!</p>}
            </div>

            <div className={classesPostalInvaid}>
                <label htmlFor="postal">Postal Code</label>
                <input type="text" id="postal" ref={postalInputRef} />
                {!valueInputForm.name && (
                    <p>Please enter a valid postal code! (5 characters long)</p>
                )}
            </div>

            <div className={classesCityInvaid}>
                <label htmlFor="city">City</label>
                <input type="text" id="city" ref={cityInputRef} />
                {!valueInputForm.name && <p>Please enter a valid city!</p>}
            </div>
            <div className={classes.actions}>
                <button type="button" onClick={props.onCancel}>
                    Cancel
                </button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
}

export default Checkout;
