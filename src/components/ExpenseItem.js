import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';
function ExpenseItem(props){
    
    return(
        
        <Card className='expense-item'>
        <ExpenseDate date={props.date}/>
            <div className='expense-item_description'>
                <h3>{props.title}</h3>
                </div>
                <div className='expense-item_price'>${props.price}</div>
                
                </Card>
    );         
                       
}
export default ExpenseItem;
