import { IMG_CDN_URL } from "./constants";

const RestaurantCard = ({
  name,
  cuisines,
  avgRating,
  slaString,
  costForTwoString,
  cloudinaryImageId,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId}></img>
      <h3 className="card-title">{name}</h3>
      <h5 className="card-cuisine">{cuisines.join(", ")}</h5>
      <div className="card-rating">
        <span>{avgRating} stars</span>
        <span>{slaString}</span>
        <span>{costForTwoString}</span>
      </div>
    </div>
  );
};
export default RestaurantCard;
