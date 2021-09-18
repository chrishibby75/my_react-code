import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import Button from "../Button/Button";
import styles from "./Login.module.css";

function Login(props) {

    const [enteredValues, setEnteredValues] = useState({
        email: "",
        password: ""
    });
    const [emailIsValid, setEmailIsValid] = useState();
    const [passwordIsValid, setPasswordIsValied] = useState();
    const [formIsValid, setFormIsValid] = useState(false);

    useEffect(() => {
        setFormIsValid(enteredValues.email.includes("@") && enteredValues.password.trim().length > 6);
    }, [enteredValues.email, enteredValues.password]); //no need to add state updating functions(setFormIsValid in this case) 
    // }, [setFormIsValid, enteredValues.email, enteredValues.password]);

    function handleOnChange(event) {
        const {name, value} = event.target;
        setEnteredValues(prevValue => {
            return { ...prevValue, [name]: value }
        });
    }

    function handleValidateEmail() {
        setEmailIsValid(enteredValues.email.includes("@"));
        
    }

    function handleValidatePassword() {
        setPasswordIsValied(enteredValues.password.trim().length > 6);
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.onLogin(enteredValues.email, enteredValues.password);
    }

    return(
        <Card className={styles.login}>
            <form onSubmit={handleSubmit}>
                <div className={`${styles.control} ${emailIsValid === false ? styles.invalid : ""}`}>
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={enteredValues.email}
                        onChange={handleOnChange}
                        onBlur={handleValidateEmail}
                    />
                </div>
                <div className={`${styles.control} ${passwordIsValid === false ? styles.invalid : ""}`}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={enteredValues.password}
                        onChange={handleOnChange}
                        onBlur={handleValidatePassword}
                    />
                </div>
                <div className={styles.actions}>
                    <Button type="submit" className={styles.btn} disabled={!formIsValid}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;