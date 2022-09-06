import style from './Modal.module.css'; 
import { FaTimesCircle } from "react-icons/fa";
import {useState} from 'react'; 


const Modal = ({items, setItems, modal, setModal}) => {

    const [item, setItem] = useState(''); 
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState('');  

    const hadleModal = (e) =>{
        e.preventDefault(); 

        if([item, price, category].includes('')){
            console.log("there's field empty"); 
            return; 
        }

        const newItem = {
            name: item,
            priceItem: Number(price), 
            categoryItem: category
        }

        setItems([...items, newItem]);  

        setItem('');
        setPrice(0); 
        setCategory(""); 

    }

    return(
        <div className={style.Modal + ' center'}>
            <button onClick={() => setModal(!modal)} className={style.ModalExit + ' center'}>
                <FaTimesCircle />
            </button>
            <form className={style.ModalForm} onSubmit={hadleModal}>
                <h2 className={style.ModalTitle}> New Item </h2>
                <div>
                    <label> Item: </label>
                    <input value={item} onChange={(e) => setItem(e.target.value)} type="text" placeholder='Name item'/>
                </div>
                <div>
                    <label> Price: </label>
                    <input value={price} onChange={(e) => setPrice(e.target.value)} type="number" placeholder='Price item'/>
                </div>

                <div>
                    <label> Category: </label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)} >
                        <option value="" disabled selected> --- Select one option --- </option> 
                        <option value="Feeding" > Feeding </option> 
                        <option value="Travels"> Travels </option> 
                        <option value="Education"> Education </option> 
                        <option value="Health"> Health </option> 
                        <option value="Entertainment"> Entertainment </option>
                    </select>
                </div>
                
                <input className={style.ModalAdd} type="submit" value="Add item" />
            </form>
        </div>
    ); 
}

export default Modal; 