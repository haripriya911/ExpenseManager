import react, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";
import ExpenseFilter from "./NewExpense/ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  
  const [filterYear, setfilterYear] = useState("2020");
  const filterChange = (selectedYear) => {
    setfilterYear(selectedYear);
  };
  const filterByYear = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div className="expense">
      <ExpenseFilter selected={filterYear} onChangeFilter={filterChange} />
      <ExpenseChart expense={filterByYear} />
      <ExpenseList items={filterByYear} />
    </div>
  );
}
export default Expenses;
