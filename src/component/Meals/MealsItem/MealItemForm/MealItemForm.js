import React from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../../UI/Input/Input";
import { useRef } from "react";
function MealItemForm(props) {
    //Sử dụng Ref để lấy ra được số lượng sản phẩm và two way binding
    const amountInputRef = useRef();
    const submitHandler = (e) => {
        e.preventDefault();

        const enterAmount = amountInputRef.current.value;
        const enterAmountNumber = +enterAmount; /// enterAmount nhận dữ liệu dạng string nên convert sang number
        if (
            enterAmount.trim().length === 0 ||
            enterAmountNumber < 0 ||
            enterAmountNumber > 5
        )
            return;
        /// vì chỉ có số lượng nên chưa gọi useContext ở đây được cần phải truyền dữ liệu thông qua callback để cpn cha nhận được amount
        props.onAddToCart(enterAmountNumber);
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label="Amount"
                input={{
                    id: "amount",
                    type: "number",
                    min: "1",
                    max: "5",
                    step: "1",
                    defaultValue: "1",
                }}
            />
            <button>+ Add</button>
        </form>
    );
}

export default MealItemForm;
