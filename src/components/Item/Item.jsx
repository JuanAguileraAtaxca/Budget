import {format} from '../helpers'; 
import style from './Item.module.css'; 

const Item = ({property}) => {

    const {name, date, priceItem, categoryItem} = property; 

    const imgItem = (category) => {
        return "/img/" + category + ".png"; 
    }
    return(
        <div className={style.ItemCard + " m-c shadow mt-20 mb-20"}>
            <div className={style.ItemCardSub + ' center'}>
                <img src={imgItem(categoryItem)} />
                <div>
                    <h3 className={style.ItemCardCategory}> {categoryItem}</h3>
                    <p className={style.ItemCardName}> {name} </p>

                    <p> {date} </p>
                </div>
            </div>
            <p className={style.ItemCardPrice}> {format(priceItem)} </p>
        </div>
    );
}

export default Item; 