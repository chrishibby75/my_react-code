import React, { useState } from "react";
import Card from "../Card/Card";
import Button from "../Button/Button";
import styles from "./AddUser.module.css";

function AddUser(props) {

    const [enteredValues, setEnteredValues] = useState({
        username: "",
        age: ""
    });

    function handleAddUser(event) {
        event.preventDefault();
        if (enteredValues.username.trim().length === 0 || enteredValues.age.trim().length === 0) {
            return;
        }
        // if (parseInt(enteredValues.age) < 1) {
        if (+enteredValues.age < 1) {
            return;
        }
        props.onAddUser(enteredValues.username, enteredValues.age);
        setEnteredValues({
            username: "",
            age: ""
        })
    };

    function handleChange(event) {
        const {name, value} = event.target;
        setEnteredValues(prevValue => {
            return { ...prevValue, [name]: value }
        });
    }

    return (
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
    )
}

export default AddUser;