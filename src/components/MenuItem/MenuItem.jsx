import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./MenuItem.module.css";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

const MenuItem = ({ dish }) => {
  const { strMeal: name, strMealThumb: image } = dish;
  const navigate = useNavigate();
  
  const [isFavorite, setIsFavorite] = useState(() => {  // To render correctly after reload page RestaurantView
  const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
  return savedFavorites.some(fav => fav.idMeal === dish.idMeal);
  });

  const handleFavorite = () => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    let updatedFavorites;

    if (isFavorite) { // To toggle the dish from the localStorage
      updatedFavorites = savedFavorites.filter(fav => fav.idMeal !== dish.idMeal);
    } else {
      updatedFavorites = [...savedFavorites, dish];
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.menuItem}>
      <button className="btn-add-favorite" 
              style={{border:"none", borderRadius:"5px", position:"absolute", right:"2px", top:"3px"}}
              onClick={handleFavorite}>
        {isFavorite ? 
        <>
          Remove Favorite <FaStar color="gold"/>
        </> :
        <>
          Add Favorite <FaStar color="gray"/>
        </>
        }
          
      </button>
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <div className={styles.menuItemBtnContainer}>
        <Button onClick={() => navigate(`/meals/${dish.idMeal}`)}>
          Details
        </Button>
      </div>
    </div>
  );
};

export default MenuItem;
