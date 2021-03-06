import React, { useContext } from "react";
import Modal from "../Modal/Modal";
import CartItem from "../CartItem/CartItem";
import CartContext from "../../store/cart-context";
import styles from "./Cart.module.css";

const Cart = props => {
    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = item => {
        cartCtx.addItem({ ...item, amount: 1 });
    };

    return (
        <Modal onClose={props.onClose}>
            <ul className={styles["cart-items"]}>
                {cartCtx.items.map(item => (
                    <CartItem 
                        key={item.id}
                        id={item.id}
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
            <div className={styles.actions}>
                <button className={styles["button--alt"]} onClick={props.onClose}>Close</button>
                {hasItems && <button className={styles.button}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;