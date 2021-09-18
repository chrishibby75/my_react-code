import React from "react";
import Navigation from "../Navigation/Navigation";
import styles from "./MainHeader.module.css";

function MainHeader(props) {
    return(
        <header className={styles["main-header"]}>
            <h1>A Typical Page</h1>
            <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
        </header>
    );
};

export default MainHeader;