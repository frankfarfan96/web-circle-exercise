import styles from "./SearchField.module.css";

const SearchField = ({setSearchDishes, searchDishes}) => {
  
  return (
    <div className={styles.wrapper}>
      <input
        placeholder="Filter dishes..."
        type="text"     
        value={searchDishes}
        onChange={(e) => setSearchDishes(e.target.value)}
      />
    </div>
  );
};

export default SearchField;
