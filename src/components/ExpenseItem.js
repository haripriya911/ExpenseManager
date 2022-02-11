import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from './Card';
function ExpenseItem(props) {

    return (<>

        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item_description'>
                <h3>{props.title}</h3>
            </div>
            <div className='expense-item_price'>${props.price}</div>

        </Card>
    </>
     );

}
export default ExpenseItem;
