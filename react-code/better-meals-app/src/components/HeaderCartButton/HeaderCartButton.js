import React, { useState, useContext, useEffect } from "react";
import CartIcon from "../CartIcon/CartIcon";
import CartContext from "../../store/cart-context";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = props => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);

    const { items } = cartCtx;

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);
        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);
        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return (
        <button className={`${styles.button} ${btnIsHighlighted ? styles.bump : ""}`} onClick={props.onClick}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;