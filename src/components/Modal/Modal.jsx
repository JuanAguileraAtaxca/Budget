import {useState, useEffect} from 'react';
import MessageError from '../MessageError/MessageError'; 
import { FaTimesCircle } from "react-icons/fa";
import {generateId} from '../helpers'; 
import style from './Modal.module.css'; 

const Modal = ({
    items, 
    setItems, 
    modal, 
    setModal, 
    itemEdit, 
    setItemEdit, 
    available, 
    filterExpenses, 
    setFilterExpenses}
    ) => {

    const [item, setItem] = useState(""); 
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState("");  
    const [validation, setValidation] = useState(false); 
    
    useEffect(() => {
        setItem(itemEdit.name ?? ""); 
        setPrice(itemEdit.priceItem ?? 0); 
        setCategory(itemEdit.categoryItem ?? ""); 
    }, [itemEdit]); 

    const hadleModal = (e) =>{
        e.preventDefault(); 

        if([item, price, category].includes('') || price <= 0){
            setValidation(true);
            setTimeout(() => {
                setValidation(false);
            }, 2000);
            return; 
        }

        addElements();         
        
    }

    const addElements = () => {
        if(available > price){
            let newItem = {name: item, priceItem: Number(price), categoryItem: category, date: generateDate()}

            if(Object.keys(itemEdit).length > 0){ 
                newItem.id = itemEdit.id;
                const newItems = items.map(itemIterator => itemIterator.id === itemEdit.id ? newItem : itemIterator);
                setItems(newItems); 
                if(filterExpenses.length){
                    setFilterExpenses(filterExpenses.map(itemIterator => itemIterator.id === itemEdit.id ? newItem : itemIterator));
                }
                clearFields(); 
                return; 
            }

            newItem.id = generateId(); 
            setItems([...items, newItem]);  
            clearFields(); 
            return;
        } 
    }

    const clearFields = () => {
        setItem('');
        setPrice(0); 
        setCategory(''); 
        setTimeout(() => { setModal(false); }, 1000);
        setItemEdit({}); 
    }

    const generateDate = () => {
        const date = new Date(); 
        const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let formatDate = " de " + month[date.getMonth() + 1] + " de " + date.getFullYear(); 

        if(date.getDate() < 10){
            return "0" + date.getDate() + formatDate;
        }

        return date.getDate() + formatDate; 
    }

    const close = () => {
        setModal(!modal); 
        setItemEdit({});
    }

    return(
        <div className={style.Modal + ' center'}>
            <button onClick={() => close()} className={style.ModalExit + ' center'}>
                <FaTimesCircle />
            </button>

            <form className={style.ModalForm} onSubmit={hadleModal}>
                <h2 className={style.ModalTitle}> {JSON.stringify(itemEdit) === '{}' ? 'New item' : 'Edit item'} </h2>
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
                        <option value="Outfit"> Outfit </option>
                        <option value="Subscriptions"> Subscriptions </option>
                        <option value="Sport"> Sport </option>
                        <option value="Others"> Others </option>
                    </select>
                </div>
                
                <input className={style.ModalAdd} type="submit" value={JSON.stringify(itemEdit) === '{}' ? "Add item" : "Edit item"} />
            </form>
        </div>
    ); 
}

export default Modal; 