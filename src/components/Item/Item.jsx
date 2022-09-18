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
    modal, 
    setModal, 
    property, 
    available, 
    setAvailable, 
    setItemEdit
}) => {

    const {name, date, priceItem, categoryItem} = property; 

    const imgItem = (category) => {
        return "/img/" + category + ".png"; 
    }

    const deleteElement = (object) => {
        setAvailable(available + object.priceItem); 
        const newItems = items.filter(itemIterator => itemIterator.id !== object.id);
        setItems([...newItems]); 
    }

    const editElement = (object) => {
        setModal(!modal); 
        setItemEdit(object); 
    }

    const leadingAction = (object) => (
        <LeadingActions>
            <SwipeAction onClick={() => editElement(object)}>
                Edit
            </SwipeAction>
        </LeadingActions>
    ); 

    const trailingAction = (object) => (
        <TrailingActions>
            <SwipeAction onClick={() => deleteElement(object)}>
                Delete
            </SwipeAction>
        </TrailingActions>
    ); 


    return(
        <SwipeableList>
            <SwipeableListItem leadingActions={leadingAction(property)} trailingActions={trailingAction(property)}>
                <div className={style.ItemCard + " shadow mt-20 mb-20"}>
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