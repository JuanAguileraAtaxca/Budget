import style from './BudgetForm.module.css'; 
import MessageError from '../MessageError/MessageError'; 
import {useState} from 'react';

const BudgetForm = ({setBudget}) => {
    const [validation, setValidation] = useState(false); 
    const [value, setValue] = useState(0); 
    
    const hadleSubmit = (e) => {
        e.preventDefault();
        if(value < 0){
            setValidation(true); 
            return; 
        }
        setValidation(false);
        setBudget(value); 
    }

    return (
        <form className={style.BudgetFormContainer + " m-c mt-100"} onSubmit={hadleSubmit}>
            {(validation && value < 0)  && <MessageError message="Invalid value!"/> }
            <label className={style.BudgetLabel}> Insert your budget </label>
            <input className={style.BudgetFormInput} onChange={(e) => setValue(Number(e.target.value))} value={value} type="number" placeholder="insert your budget"/>
            <input className={style.BudgetFormSubmit} type="submit" value="accept" /> 
        </form>
    );
}

export default BudgetForm; 