import React, { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { MoviesContext } from "../../contexts/moviesContext";

const RemoveFromTvFavoritesIcon = ({ show }) => {
  const context = useContext(MoviesContext);

  const handleRemoveFromTvFavorites = (s) => {
    s.preventDefault();
    context.removeFromTvFavorites(show);
  };
  return (
    <IconButton
      aria-label="remove from favorites"
      onClick={handleRemoveFromTvFavorites}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromTvFavoritesIcon;