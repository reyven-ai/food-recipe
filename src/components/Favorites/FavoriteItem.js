import { Link } from "react-router-dom";

const FavoriteItem = ({ idMeal, strMeal, strMealThumb }) => {
  return (
    <div>
      <li key={idMeal}>
        <Link to={`/view/${idMeal}`}>
          <img
            className="w-full h-[200px] object-cover shadow-md rounded-lg"
            src={strMealThumb}
            alt={strMeal}
          />
        </Link>
      </li>
    </div>
  );
};

export default FavoriteItem;
