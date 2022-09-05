import style from './MessageError.module.css'; 

const MessageError = ({message}) => {
    return (
        <div className={style.MessageErrorContainer}>
            <h2 className={style.MessageErrorText}> {message} </h2>
        </div>
    ); 
}

export default MessageError; 