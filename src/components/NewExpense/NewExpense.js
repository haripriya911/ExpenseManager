import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
    console.log(props);
    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseData,
        };
        props.onAddExpense(expenseData);
        console.log(expenseData);
    };
    return (
        <div className="newexpense">
            <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
        </div>

    );
}
export default NewExpense;