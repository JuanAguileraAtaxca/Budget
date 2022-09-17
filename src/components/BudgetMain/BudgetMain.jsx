import {useState} from 'react'; 
import AddElement from '../AddElement/AddElement';
import Modal from '../Modal/Modal'; 
import Item from '../Item/Item';
import {format} from '../helpers'; 
import style from './BudgetMain.module.css'; 

const BudgetMain = ({budget, setBudget}) => {

    const [modal, setModal] = useState(false);
    const [available, setAvailable] = useState(budget); 
    const [items, setItems] = useState([]); 
    const [itemEdit, setItemEdit] = useState({}); 

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
            <div className={style.BudgetMainContainer + " m-c mt-100 shadow"}>
                <div className='center'>
                    <div className={style.graphTest}></div>
                </div>
                <div> 
                    <p className={style.BudgetMainText}> Presupuesto: <span className={style.BudgetMainTextValue}> {format(budget)} </span></p>
                    <p className={style.BudgetMainText}> Saldo disponible: <span className={style.BudgetMainTextValue}> {format(available)} </span></p>
                    <p className={style.BudgetMainText}> Gastos: <span className={style.BudgetMainTextValue}> {format(budget - available)}</span></p>
                    <button className={style.BudgetMainButton} onClick={() => setBudget(0)}>
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