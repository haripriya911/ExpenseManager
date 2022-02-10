import './ExpenseDate.css';
function ExpenseDate(props){
    const month= props.date.toLocaleString('en-US',{month:'long'});
       const day= props.date.toLocaleString('en-US',{day:'2-digit'});
       const year= props.date.getFullYear();
        return(
            
                <div className='datecss'>
                    <div className="date">{month}</div>
                    <div className="date">{year}</div>
                    <div className="date">{day}</div>
                </div>
                );
        }
        export default ExpenseDate;