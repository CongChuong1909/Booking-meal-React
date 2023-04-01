import { useState } from "react";
import Cart from "./component/Cart/Cart";
import Header from "./component/Layout/Header/Header";
import Meals from "./component/Meals/Meals";
import CartProvider from "./Store/CartProvider";

function App() {
    const [cartIsShow, setCartIsShow] = useState(false);

    const showCartHandle = () => {
        setCartIsShow(true);
    };
    const hideCartHandle = () => {
        setCartIsShow(false);
    };
    return (
        <CartProvider>
            {cartIsShow && <Cart onHideCart={hideCartHandle} />}
            <Header onShowCart={showCartHandle} />
            <Meals />
        </CartProvider>
    );
}

export default App;
