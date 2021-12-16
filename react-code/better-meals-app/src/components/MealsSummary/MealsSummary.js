import React from "react";
import styles from "./MealsSummary.module.css";

const MealsSummary = () => {
    return (
        <section className={styles.summary}>
            <h2>Delicious Food Delivered To You</h2>
            <p>
                Choose your favorite meal from our broad selection of available meals
                and enjoy a delicious lunch or dinner at home.
            </p>
            <p>
                All of our meals are cooked to perfection by experienced chefs with the most high- 
                quality ingredients just in time to enjoy.
            </p>
        </section>
    );
};

export default MealsSummary;