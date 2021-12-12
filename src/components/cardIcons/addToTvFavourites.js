import React, { useContext } from "react";
import { TvContext } from "../../contexts/tvContext";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";

const AddToTvFavoritesIcon = ({ favoritetv }) => {
  const context = useContext(TvContext);

  const handleAddToTvFavorites = (e) => {
    e.preventDefault();
    context.addToTvFavorites(favoritetv);
  };
  return (
    <IconButton aria-label="add to Tv Show favorites" onClick={handleAddToTvFavorites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToTvFavoritesIcon;