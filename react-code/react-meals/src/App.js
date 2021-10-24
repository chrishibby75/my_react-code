import React, { useState } from "react";
import Meals from "./components/Meals/Meals";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

const App = () => {

    const [cartIsShown, setCartIsShown] = useState(false);

    const handleShowCart = () => {
        setCartIsShown(true);
    };

    const handleHideCart = () => {
        setCartIsShown(false);
    };

    return (
        <CartProvider>
            {cartIsShown && <Cart onClose={handleHideCart}/>}
            <Header onShowCart={handleShowCart} />
            <main>
                <Meals />
            </main>
        </CartProvider>
    );
};

export default App;