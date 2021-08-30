import React, { useState } from "react";
import Card from "../Card/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "../ExpensesList/ExpensesList";
import ExpensesChart from "../ExpensesChart/ExpensesChart";
import "./Expense.css"

function Expense(props) {

    const [yearValue, setYearValue] = useState("2021");

    const handleYearChange = yearShowing => {
        setYearValue(yearShowing);
    }


    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === yearValue;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    onUpdateYear={handleYearChange}
                    value={yearValue}
                />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList expenses={filteredExpenses} />
                {/* {filteredExpenses.length === 0 && <h2>No Expenses Found</h2>}
            {filteredExpenses.length > 0 && filteredExpenses.map((expense) => (
                <ExpenseItem 
                    key={expense.id}
                    id={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))} */}
                {/* {filteredExpenses.length === 0 ? (
                <h2>No Expenses Found</h2>
                ) : (
                    filteredExpenses.map(expense => (
                        <ExpenseItem 
                            key={expense.id}
                            id={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />
                    ))
                )} */}
            </Card>
        </div>
    )
}

export default Expense;