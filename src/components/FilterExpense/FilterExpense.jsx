import styles from "./FilterExpense.module.css";

const FilterExpense = ({filterExpense, setFilterExpense}) => {
    return (
        <div className={ styles.FilterContainer + " m-c mt-20 mb-20"}>
            <h2 className={ styles.FilterTitle}> Filter expenses </h2>
            <select className={styles.FilterSelect} value={filterExpense} onChange={e => setFilterExpense(e.target.value)}>
                <option value="" disabled selected> --- Select one option --- </option> 
                <option value=""> All categories </option>
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
    ); 
}

export default FilterExpense; 