import React, { Fragment, useContext, useState } from "react";
import Modal from "../Modal/Modal";
import CartItem from "../CartItem/CartItem";
import Checkout from "../Checkout/Checkout";
import CartContext from "../../store/cart-context";
import styles from "./Cart.module.css";

const Cart = props => {
    const [isCheckout, setIsCheckout] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);

    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id);
    }

    const cartItemAddHandler = item => {
        cartCtx.addItem(item);
    }

    const orderHandler = event => {
        setIsCheckout(true);
    }

    const submitOrderHandler = userData => {
        setIsSubmitting(true);
        fetch("https://reactmealsdb-94567-default-rtdb.firebaseio.com/orders.json", {
            method: "POST",
            body: JSON.stringify({
                user: userData,
                orderedItems: cartCtx.items
            })
        }).then(() => {
            setIsSubmitting(false);
            setDidSubmit(true);
            cartCtx.clearCart();
        });
    };

    const cartModalContent = (
        <Fragment>
            <ul className={styles["cart-items"]}>
                {cartCtx.items.map(item => (
                    <CartItem
                        key={item.id}
                        name={item.name}
                        amount={item.amount}
                        price={item.price}
                        onRemove={cartItemRemoveHandler.bind(null, item.id)}
                        onAdd={cartItemAddHandler.bind(null, item)}
                    />
                ))}
            </ul>
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckout && <Checkout onCancel={props.onClose} onConfirm={submitOrderHandler} />}
            {!isCheckout && <div className={styles.actions}>
                <button className={styles["button--alt"]} onClick={props.onClose}>Close</button>
                {hasItems && <button className={styles.button} onClick={orderHandler}>Order</button>}
            </div>}
        </Fragment>
    );

    const isSubmittingModalContent = <p>Sending order...</p>;

    const didSubmitModalContent = (
    <Fragment>
        <p>Order sent!</p>
        <div className={styles.actions}>
        <button className={styles.button} onClick={props.onClose}>Close</button>
        </div>
    </Fragment>
    );

    return (
        <Modal onClose={props.onClose}>
            {!isSubmitting && !didSubmit && cartModalContent}
            {isSubmitting && isSubmittingModalContent}
            {!isSubmitting && didSubmit && didSubmitModalContent}
        </Modal>
    );
};

export default Cart;