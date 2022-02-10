import ExpenseItem from './components/ExpenseItem';
function App() {
  const expense = [{
    id: 'e1',
    title: 'Toilet Paper',
    price: 94.12,
    date: new Date(2021, 1, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    price: 194.12,
    date: new Date(2020, 12, 16),
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    price: 294.12,
    date: new Date(2021, 2, 15),
  },
  {
    id: 'e4',
    title: 'New desk',
    price: 200.12,
    date: new Date(2020, 2, 17),
  },
  ]
  return (
    <div>
      <h1>lets started the project</h1>
      <ExpenseItem
        title={expense[0].title}
        price={expense[0].price}
        date={expense[0].date}
      />
      
      <ExpenseItem
        title={expense[1].title}
        price={expense[1].price}
        date={expense[1].date}
      />
    

      <ExpenseItem
        title={expense[2].title}
        price={expense[2].price}
        date={expense[2].date}
      />
      
      <ExpenseItem
        title={expense[3].title}
        price={expense[3].price}
        date={expense[3].date}
      />
    </div>
  );
}

export default App;
