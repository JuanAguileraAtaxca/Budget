import { FaPlusCircle } from "react-icons/fa";
import style from './AddElement.module.css'; 

const AddElement = ({modal, setModal}) =>{
    return (
        <button onClick={() => setModal(!modal)} className={style.AddElementButton + ' center'}>
            <FaPlusCircle />
        </button>
    ); 
}

export default AddElement; 