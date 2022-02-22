import react,{useState} from "react";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "./Card";
import ExpenseFilter from "./NewExpense/ExpenseFilter";

function Expenses(props){
    console.log("props",props);
    const[filterYear,setfilterYear]=useState('2020')
    const filterChange=(selectedYear)=>{
setfilterYear(selectedYear);
    }
    return(
        <div className="expense">
            <ExpenseFilter  selected={filterYear}onChangeFilter={filterChange}/>
            {props.items.map((expense)=>{
                console.log("title",expense.title);
                console.log("price,",expense.price);
                console.log("date",expense.date);
                return<ExpenseItem
                title={expense.title}
                price={expense.price}
                date={expense.date}
                />
})}

</div>
    );
}
export default Expenses;