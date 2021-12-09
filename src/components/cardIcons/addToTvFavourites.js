import React, { useContext } from "react";
import { TvContext } from "../../contexts/tvContext";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";

const AddToTvFavoritesIcon = ({ tv }) => {
  const context = useContext(TvContext);

  const handleAddToFavorites = (e) => {
    e.preventDefault();
    context.addToFavorites(tv);
  };
  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToFavorites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToTvFavoritesIcon;