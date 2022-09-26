import {useState, useEffect} from 'react'; 
import AddElement from '../AddElement/AddElement';
import Modal from '../Modal/Modal'; 
import Item from '../Item/Item';
import FilterExpense from '../FilterExpense/FilterExpense';
import {format} from '../helpers'; 
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'; 
import 'react-circular-progressbar/dist/styles.css'; 
import style from './BudgetMain.module.css'; 

const BudgetMain = ({budget, items, setItems, setBudget}) => {

    const [modal, setModal] = useState(false);
    const [percentage, setPercentage] = useState(0); 
    const [expense, setExpense] = useState(0); 
    const [available, setAvailable] = useState(0);
    const [itemEdit, setItemEdit] = useState({}); 
    const [filterExpense, setFilterExpense] = useState(""); 
    const [filterExpenses, setFilterExpenses] = useState([]);

    useEffect(() => {
        const newExpense = items.reduce((count, item) => count += item.priceItem, 0); 
        setExpense(newExpense);
    }, [items]);

    useEffect(() =>{
        setAvailable(budget - expense);
        const newPercentage = ((expense * 100) / budget).toFixed(2); 

        setTimeout(() => {
            setPercentage(newPercentage);
        }, 1500); 
    }, [expense]); 

    useEffect(() => {
        const newFilters = items.filter(newFilter => filterExpense === newFilter.categoryItem); 
        setFilterExpenses(newFilters);
    }, [filterExpense]);

    const resetApp = () => {
        if(confirm("Do you wanna delete this expenses?")){
            setItems([]);
            setBudget(0); 
        }
    }

    return(
        <>
            {modal && <Modal 
                            items={items} 
                            setItems={setItems} 
                            modal={modal} 
                            setModal={setModal} 
                            itemEdit={itemEdit}
                            setItemEdit = {setItemEdit}
                            available = {available}
                            filterExpenses={filterExpenses}
                            setFilterExpenses={setFilterExpenses}
                        /> 
            }
            <div className={style.BudgetMainContainer + " m-c mt-60"}>
                <div className='center'>
                    <div className={style.BudgetMainProgressbar}>
                        <CircularProgressbar
                            value={percentage}
                            text={`${percentage}%`}
                            styles={buildStyles({
                                // font size
                                textSize: '20px', 
                                // colors
                                pathColor: '#3498DB',
                                trailColor: '#d6d6d6',
                                textColor: '#3498DB'
                            })}
                        />
                    </div>
                </div>
                <div> 
                    <p className={style.BudgetMainText}> Budget: <span className={style.BudgetMainTextValue}> {format(budget)} </span></p>
                    <p className={style.BudgetMainText}> Available: <span className={style.BudgetMainTextValue}> {format(available)} </span></p>
                    <p className={style.BudgetMainText}> Expenses: <span className={style.BudgetMainTextValue}> {format(expense)}</span></p>
                    <button className={style.BudgetMainButton} onClick={() => resetApp()}>
                        Reset budget
                    </button>
                </div>
            </div>
            
            <FilterExpense filterExpense={filterExpense} setFilterExpense={setFilterExpense}/>

            <div className="m-c mt-20 mb-20">
                {
                    filterExpense ? 
                    (<>
                        <h2 className={style.BudgetEmpty}> {filterExpenses.length ? 'Expenses':'There is not expense'} </h2>
                        <div className={style.BudgetContainerCards + " m-c"}>
                            {filterExpenses.map(item => 
                                            <Item 
                                                items={items} 
                                                setItems={setItems} 
                                                filterExpenses={filterExpenses}
                                                setFilterExpenses={setFilterExpenses}
                                                filterExpense={filterExpense}
                                                modal={modal} 
                                                setModal={setModal} 
                                                key={item.id} 
                                                property={item}
                                                setItemEdit={setItemEdit}
                                            />)
                            }
                        </div>                        
                    </>) : 
                        (<>
                            <h2 className={style.BudgetEmpty}> {items.length ? 'Expenses':'There is not expenses'} </h2>
                            <div className={style.BudgetContainerCards + " m-c"}>
                                {items.map(item => 
                                            <Item 
                                                items={items} 
                                                setItems={setItems} 
                                                modal={modal} 
                                                setModal={setModal} 
                                                key={item.id} 
                                                property={item}
                                                setItemEdit={setItemEdit}
                                        />)
                                }
                            </div>                        
                        </>)
                    
                }
                
                
                
            </div>

            <AddElement modal={modal} setModal={setModal}/>
        </>
        
    );
}

export default BudgetMain; 