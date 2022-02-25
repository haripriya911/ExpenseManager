import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  console.log("propnews", props.items.length);
  const arrayValue = props.items;
  const arrayLength = props.items.length;
  let expenseContent =
    arrayLength > 0 ? (
      arrayValue.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            price={expense.price}
            date={expense.date}
          />
        );
      })
    ) : (
      <p className="color"> NO items found</p>
    );
  return expenseContent;
};
export default ExpenseList;
