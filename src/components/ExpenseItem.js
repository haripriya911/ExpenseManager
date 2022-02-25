import react, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "./Card";

const ExpenseItem = (props) => {
  //function  {}
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("updated!!");
  };

  return (
    <>
      <div>
        <Card className="expense-item">
          <ExpenseDate date={props.date} />
          <div className="expense-item_description">
            <h3>{props.title}</h3>
          </div>
          <div className="expense-item_price">${props.price}</div>
          <button onClick={clickHandler}>change title</button>
        </Card>
      </div>
    </>
  );
};
export default ExpenseItem;
