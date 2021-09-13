import React, { useState } from "react";
import Card from "../Card/Card";
import Button from "../Button/Button";
import ErrorModal from "../ErrorModal/ErrorModal";
import styles from "./AddUser.module.css";

function AddUser(props) {

    const [enteredValues, setEnteredValues] = useState({
        username: "",
        age: ""
    });

    const [error, setError] = useState();

    function handleAddUser(event) {
        event.preventDefault();
        if (enteredValues.username.trim().length === 0 || enteredValues.age.trim().length === 0) {
            setError({
                title: "Invalid Input",
                message: "Please enter a valid name and age."
            });
            return;
        }
        // if (parseInt(enteredValues.age) < 1) {
        if (+enteredValues.age < 1) {
            setError({
                title: "Invalid Age",
                message: "Please enter a valid age."
            });
            return;
        }
        props.onAddUser(enteredValues.username, enteredValues.age);
        setEnteredValues({
            username: "",
            age: ""
        });
    };

    function handleChange(event) {
        const { name, value } = event.target;
        setEnteredValues(prevValue => {
            return { ...prevValue, [name]: value }
        });
    }

    const errorHandler = () => {
        setError(null);
        setEnteredValues({
            username: "",
            age: ""
        });
    };

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={styles.input}>
                <form onSubmit={handleAddUser}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        name="username"
                        value={enteredValues.username}
                        type="text"
                        onChange={handleChange}
                    />
                    <label htmlFor="age">Age</label>
                    <input
                        id="age"
                        name="age"
                        value={enteredValues.age}
                        type="number"
                        onChange={handleChange}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser;