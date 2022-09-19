import {useState, useEffect} from 'react'; 
import AddElement from '../AddElement/AddElement';
import Modal from '../Modal/Modal'; 
import Item from '../Item/Item';
import {format} from '../helpers'; 
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'; 
import 'react-circular-progressbar/dist/styles.css'; 
import style from './BudgetMain.module.css'; 

const BudgetMain = ({budget, setBudget}) => {

    const [modal, setModal] = useState(false);
    const [percentage, setPercentage] = useState(0); 
    const [available, setAvailable] = useState(budget); 
    const [items, setItems] = useState([]); 
    const [itemEdit, setItemEdit] = useState({}); 

    const reset = () =>{
        setBudget(0); 
    }

    useEffect(() => {
        let updatePercentage = 100 - ((100 * available) / budget);
        setPercentage(Number(updatePercentage.toString().substring(0, 5)));
    }, [available]);

    return(
        <>
            {modal && <Modal 
                            items={items} 
                            setItems={setItems} 
                            modal={modal} 
                            setModal={setModal} 
                            setAvailable={setAvailable} 
                            available={available}
                            itemEdit={itemEdit}
                            setItemEdit = {setItemEdit}
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
                    <p className={style.BudgetMainText}> Presupuesto: <span className={style.BudgetMainTextValue}> {format(budget)} </span></p>
                    <p className={style.BudgetMainText}> Disponible: <span className={style.BudgetMainTextValue}> {format(available)} </span></p>
                    <p className={style.BudgetMainText}> Gastos: <span className={style.BudgetMainTextValue}> {format(budget - available)}</span></p>
                    <button className={style.BudgetMainButton} onClick={() => reset()}>
                        Reset budget
                    </button>
                </div>
            </div>
            <div className="m-c mt-20 mb-20">
                {items.length > 0 ? 
                    <>
                        <h2 className={style.BudgetEmpty}> Expenses </h2>
                        <div className={style.BudgetContainerCards + " m-c"}>
                            {items.map(item => 
                                            <Item 
                                                items={items} 
                                                setItems={setItems} 
                                                modal={modal} 
                                                setModal={setModal} 
                                                key={item.id} 
                                                property={item}
                                                available={available}
                                                setAvailable={setAvailable}
                                                setItemEdit={setItemEdit}
                                            />
                                        )
                            }
                        </div>                        
                    </>
                    
                : 
                    <h2 className={style.BudgetEmpty}> there's not items</h2>
                }
                
                
            </div>

            <AddElement modal={modal} setModal={setModal}/>
        </>
        
    );
}

export default BudgetMain; 