import React, { Fragment } from "react";
import styles from "./Header.module.css";
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";

const Header = props => {
    return (
        <Fragment>
            <header className={styles.header}>
                <h1>React Meals</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={styles["main-image"]}>
                <img src={mealsImage} alt="Table full of food" />
            </div>
        </Fragment>
    );
};

export default Header;
