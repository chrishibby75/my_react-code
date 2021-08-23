import React, { useState } from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../Card/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import "./Expense.css"

function Expense(props) {

    const [yearValue, setYearValue] = useState("2021");

    const handleYearChange = yearShowing => {
        // console.log("Expenses.js");
        // console.log(yearShowing);
        setYearValue(yearShowing);
    }

    return (
        <div>
            <Card className="expenses">
            <ExpensesFilter 
                onUpdateYear={handleYearChange}
                value={yearValue}    
            />
            {props.expenses.map((expense) => {
               return <ExpenseItem 
                        key={expense.id}
                        id={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                     />
            })}
            </Card>
        </div>
    )
}

export default Expense;