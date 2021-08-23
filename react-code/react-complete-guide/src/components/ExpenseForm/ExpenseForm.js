import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {

    const [inputValue, setInputValue] = useState({
        title: "",
        amount: "",
        date: ""
    });

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setInputValue(prevValue => {
            return { ...prevValue, [name]: value }
        });
    }

    // const [titleText, setTitleText] = useState("");
    // const [amountText, setAmountText] = useState("");
    // const [dateValue, setDateValue] = useState("");

    // const handleTitleChange = event => {
    //     setTitleText(event.target.value);
    // }

    // const handleAmountChange = event => {
    //     setAmountText(event.target.value);
    // }

    // const handleDateChange = event => {
    //     setDateValue(event.target.value);
    // }

    const HandleSubmit = event => {
        event.preventDefault();

        const expenseData = {
            title: inputValue.title,
            amount: inputValue.amount,
            data: new Date(inputValue.date).toLocaleDateString()
        }
        props.onSaveExpenseData(expenseData);
        setInputValue({
            title: "",
            amount: "",
            date: ""
        })
    };

    return (
        <form onSubmit={HandleSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input 
                        type="text" 
                        name="title" 
                        value={inputValue.title} 
                        onChange={handleOnChange}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input 
                        type="number" 
                        min="0.01" step="0.01" 
                        name="amount" value={inputValue.amount} 
                        onChange={handleOnChange} 
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input 
                        type="date" 
                        min="2020-01-01" 
                        max="2024-12-31" 
                        name="date" 
                        value={inputValue.date}
                        onChange={handleOnChange} 
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
};

export default ExpenseForm;