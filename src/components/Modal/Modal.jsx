import style from './Modal.module.css'; 
import { FaTimesCircle } from "react-icons/fa";
import {useState} from 'react';
import MessageError from '../MessageError/MessageError'; 


const Modal = ({items, setItems, modal, setModal, setAvailable, available}) => {

    const [item, setItem] = useState(''); 
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState('');  
    const [validation, setValidation] = useState(false); 

    const hadleModal = (e) =>{
        e.preventDefault(); 

        if([item, price, category].includes('') || price <= 0){
            setValidation(true);
            return; 
        }

        if(available >= price){
            const newItem = {
                id: generateId(),
                name: item,
                priceItem: Number(price), 
                categoryItem: category,
                date: generateDate()
            }
    
            setAvailable(available - price); 
    
            setItems([...items, newItem]);  
            setValidation(false); 
            console.log(newItem); 
    
            setItem('');
            setPrice(0); 
            setCategory(""); 
        }

        

    }

    const generateDate = () => {
        const date = new Date(); 
        const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let formatDate = "/" + month[date.getMonth() + 1] + "/" + date.getFullYear(); 

        if(date.getDate() < 10){
            return "0" + date.getDate() + formatDate;
        }

        return date.getDate() + formatDate; 
    }

    const generateId = () =>{
        const firstPart = Date.now().toString(); 
        const secondPart = Math.random().toString(); 

        return firstPart.substr(5, firstPart.length) + secondPart.substr(5, 7); 
    }

    return(
        <div className={style.Modal + ' center'}>
            <button onClick={() => setModal(!modal)} className={style.ModalExit + ' center'}>
                <FaTimesCircle />
            </button>

            <form className={style.ModalForm} onSubmit={hadleModal}>
                <h2 className={style.ModalTitle}> New Item </h2>
                {validation && <MessageError message={price < 0 ? "Price negative is invalid" : "Empty fields!"}/>}

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