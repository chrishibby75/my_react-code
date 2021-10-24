import React, { Fragment } from "react";
import mealImage from "../../assets/meals.jpg";
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";
import styles from "./Header.module.css";

const Header = props => {
    return (
        <Fragment>
            <header className={styles.header}>
                <h1>React Meals</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={styles["main-image"]}>
                <img src={mealImage} alt="A table of food" />
            </div>
        </Fragment>
    );
};

export default Header;