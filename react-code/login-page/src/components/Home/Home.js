import React from "react";
import Card from "../Card/Card";
import styles from "./Home.module.css";

function Home(props) {
    return(
        <Card className={styles.home}>
            <h1>Welcome back</h1>
        </Card>
    );
};

export default Home;