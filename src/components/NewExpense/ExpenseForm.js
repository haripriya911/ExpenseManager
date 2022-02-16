import React, {useState}from "react";
import './ExpenseForm.css';

const ExpenseForm = () => {
    const [enterTitle,setEnteredTitle]=useState('');
    const [enterPrice,setEnteredPrice]=useState('');
    const [enterDate,setEnteredDate]=useState('');

    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value);
    };
    const priceChange=(event)=>{
        setEnteredPrice(event.target.value);
    };
    const dateChange=(event)=>{
        setEnteredDate(event.target.value);
    };
const submitHandler=(event)=>{
    event.preventDefault();
    const expenseData={
        title:enterTitle,
        price:enterPrice,
        date:new Date(enterDate)
    };
    console.log(expenseData);
};
    return (

        <form onSubmit={submitHandler}>
            <div >
                <div className="expense-controls">
                    <label>Title :</label>
                    <input type="text"  onChange={titleChangeHandler}/>
                </div>
                <div className="expense-controls">
                    <label>price:</label>
                    <input type="number" onChange={priceChange} />
                </div>
                <div className="expense-controls">
                    <label>Date:</label>
                    <input type="date"  min ="2019-1-1" max="2022-12-31" onChange={dateChange} />
                </div>
                <div className="addexpense">
                    <button type="submit"   className="button">AddExpense</button>
                </div>
            </div>



        </form>
    );
}
export default ExpenseForm;



