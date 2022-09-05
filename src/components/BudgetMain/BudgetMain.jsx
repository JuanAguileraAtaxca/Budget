import style from './BudgetMain.module.css'; 
import AddElement from '../AddElement/AddElement';
import Modal from '../Modal/Modal'; 
import {useState} from 'react'; 

const BudgetMain = ({budget, setBudget}) => {

    const [modal, setModal] = useState(false); 

    const format = (value) => {
        return value.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

    return(
        <>
            {modal && <Modal modal={modal} setModal={setModal}/> }
            <div className={style.BudgetMainContainer + " m-c mt-100"}>
                <div className='center'>
                    <div className={style.graphTest}></div>
                </div>
                <div> 
                    <p className={style.BudgetMainText}> Presupuesto: <span className={style.BudgetMainTextValue}> {format(budget)} </span></p>
                    <p className={style.BudgetMainText}> Saldo disponible: <span className={style.BudgetMainTextValue}> {format(0)} </span></p>
                    <p className={style.BudgetMainText}> Gastos: <span className={style.BudgetMainTextValue}> {format(0)}</span></p>
                    <button className={style.BudgetMainButton} onClick={() => setBudget(0)}>
                        Reset budget
                    </button>
                </div>
                
            </div>
            <AddElement modal={modal} setModal={setModal}/>
        </>
        
    );
}

export default BudgetMain; 