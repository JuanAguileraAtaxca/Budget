import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list'; 
import 'react-swipeable-list/dist/styles.css'

import {format} from '../helpers'; 
import style from './Item.module.css'; 

const Item = ({
    items, 
    setItems,
    filterExpenses,
    setFilterExpenses,
    filterExpense, 
    modal, 
    setModal, 
    property, 
    setItemEdit
}) => {

    const {id, name, date, priceItem, categoryItem} = property; 

    const imgItem = (category) => {
        return "/img/" + category + ".png"; 
    }

    const deleteElement = () => {
        const newItems = items.filter(itemIterator => itemIterator.id !== id);
        setItems(newItems);
        if(filterExpense){
            setFilterExpenses(filterExpenses.filter(itemIterator => itemIterator.id !== id)); 
        }
        
    }

    const editElement = () => {
        setModal(!modal); 
        setItemEdit(property); 
    }

    const leadingAction = () => (
        <LeadingActions>
            <SwipeAction onClick={() => editElement()}>
                Edit
            </SwipeAction>
        </LeadingActions>
    ); 

    const trailingAction = () => (
        <TrailingActions>
            <SwipeAction onClick={() => deleteElement()}>
                Delete
            </SwipeAction>
        </TrailingActions>
    ); 


    return(
        <SwipeableList>
            <SwipeableListItem leadingActions={leadingAction(property)} trailingActions={trailingAction(property)}>
                <div className={style.ItemCard + " mt-20 mb-20"}>
                    <div className={style.ItemCardSub + ' center'}>
                        <img className={style.ItemCardImg} src={imgItem(categoryItem)} />
                        <div>
                            <h3 className={style.ItemCardCategory}> {categoryItem}</h3>
                            <p className={style.ItemCardName}> {name} </p>
                            <p className={style.ItemCardDate}> {date} </p>
                        </div>
                    </div>
                    <p className={style.ItemCardPrice}> {format(priceItem)} </p>
                </div>
            </SwipeableListItem>
        </SwipeableList>
        
    );
}

export default Item; 