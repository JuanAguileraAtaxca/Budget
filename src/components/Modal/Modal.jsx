import style from './Modal.module.css'; 
import { FaTimesCircle } from "react-icons/fa";



const Modal = ({modal, setModal}) => {
    return(
        <div className={style.Modal + ' center'}>
            <button onClick={() => setModal(!modal)} className={style.ModalExit + ' center'}>
                <FaTimesCircle />
            </button>
            <form className={style.ModalForm}>
                <h2 className={style.ModalTitle}> New Item </h2>
                <div>
                    <label> Item: </label>
                    <input type="text" placeholder='Name item'/>
                </div>
                <div>
                    <label> Price: </label>
                    <input type="text" placeholder='Price item'/>
                </div>

                <div>
                    <label> Category: </label>
                    <select>
                        <option value='' disabled selected> -- Select one option -- </option> 
                        <option value='Feeding' > Feeding </option> 
                        <option value='Travels'> Travels </option> 
                        <option value='Education'> Education </option> 
                        <option value='Health'> Health </option> 
                    </select>
                </div>
                
                <input className={style.ModalAdd} type="submit" value="Add item" />
            </form>
        </div>
    ); 
}

export default Modal; 