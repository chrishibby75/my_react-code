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
            {props.expenses.map((expense, index) => {
               return <ExpenseItem 
                        key={index}
                        id={index}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                     />
            })}
                {/* <ExpenseItem
                    title={props.expenses[0].title}
                    amount={props.expenses[0].amount}
                    date={props.expenses[0].date}
                />
                <ExpenseItem
                    title={props.expenses[1].title}
                    amount={props.expenses[1].amount}
                    date={props.expenses[1].date}
                />
                <ExpenseItem
                    title={props.expenses[2].title}
                    amount={props.expenses[2].amount}
                    date={props.expenses[2].date}
                />
                <ExpenseItem
                    title={props.expenses[3].title}
                    amount={props.expenses[3].amount}
                    date={props.expenses[3].date}
                /> */}
            </Card>
        </div>
    )
}

export default Expense;