import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses';
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
  ];
  return (
    <div>
      <h1>lets started the project</h1>
      <Expenses items={expense}/>
      
    </div>
  );
}

export default App;
