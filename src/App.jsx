import { useState } from 'react'; 
import BudgetForm from './components/BudgetForm/BudgetForm'; 
import Header from './components/Header/Header'; 
import BudgetMain from './components/BudgetMain/BudgetMain'; 
import './App.css'

function App() {
  const [budget, setBudget] = useState(0); 

  return (
    <div className="App">
      <Header /> 

      {budget > 0 ? 
      <BudgetMain budget={budget} setBudget={setBudget} /> : 
      <BudgetForm budget={budget} setBudget={setBudget}/> }

    </div>
  )
}

export default App
