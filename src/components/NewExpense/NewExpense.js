import React,{useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
    console.log(props);
    const [value,setValue]=useState(false);
    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseData,
        };
        props.onAddExpense(expenseData);
        console.log(expenseData);
    };
    const addNewExpense=()=>{
        setValue(!value);
    };
    return (
        <div className="newexpense">
            {!value && <button  onClick={addNewExpense}> Add New Expense</button>}
            {value && <ExpenseForm  cancelButton={addNewExpense} onSaveExpenseData={onSaveExpenseDataHandler} />}
        </div>

    );
}
export default NewExpense;