import { useState, useEffect } from 'react'; 
import BudgetForm from './components/BudgetForm/BudgetForm'; 
import Header from './components/Header/Header'; 
import BudgetMain from './components/BudgetMain/BudgetMain'; 
import './App.css'

function App() {
  const [budget, setBudget] = useState(Number(localStorage.getItem('budget') ?? 0)); 
  const [items, setItems] = useState(
    localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : []
  ); 

  useEffect(() => {
    localStorage.setItem('budget', budget ?? 0); 
  }, [budget]); 

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items) ?? []); 
  }, [items]);

  return (
    <div className="App">
      <Header /> 

      {budget > 0 ? 
        <BudgetMain budget={budget} items={items} setItems={setItems} setBudget={setBudget} /> : 
        <BudgetForm budget={budget} setBudget={setBudget}/> 
      }

    </div>
  )
}

export default App
